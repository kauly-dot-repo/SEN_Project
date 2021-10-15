import ResearchOutput from "./ResearchOutput";

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// getting the research output information to put on the data tab
var outputs;
axios.get('http://localhost:8000/researchOutputs').then((response) => {
  console.log('----- RESPONSE DATA -----');
  outputs = response.data;
  console.log("---- OUTPUTS ----");
  console.log(outputs);
})



export default function ResearchOutputList(props) {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    // alert(params.api);
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onBtnExport = () => {
    gridApi.exportDataAsCsv();
  };

  // const onBtnUpdate = () => {
  //   document.querySelector('#csvResult').value = gridApi.getDataAsCsv();
  // };


  return (


    <div>

      <div style={{ margin: '10px 0' }}>
        {/* <button onClick={() => onBtnUpdate()}>
          Show CSV export content text
        </button> */}
        <button onClick={() => onBtnExport()}>
          Download Report as CSV
        </button>
      </div>

      <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
        <AgGridReact
          rowData={outputs}
          suppressExcelExport={true}
          popupParent={document.body}
          onGridReady={onGridReady}
        >
          <AgGridColumn field="outputType" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="title" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="author" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="co_author" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="yearPublished" sortable={true} filter={true}></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
  //   <div>
  //     <ul>
  //     {props.researchOutputs.map((researchOutput) => (

  //       <ResearchOutput
  //         author={researchOutput.author}
  //         outputType={researchOutput.outputType}
  //         title={researchOutput.title}
  //         yearPublished={researchOutput.yearPublished}
  //       />

  //     ))}
  //     </ul>
  //   </div>
  // );
}


import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import classes from './ResearchOutputsPage.module.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import ResearchOutput from '../components/research/ResearchOutput';

const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 },
  { make: "Honda", model: "Celica", price: 35000 },
  { make: "Ferrari", model: "Fancy", price: 32000 },
  { make: "Porsche", model: "Fancy", price: 72000 },
  { make: "Porsche", model: "Very Fancy", price: 72000 },
  { make: "Honda", model: "Affordable", price: 35000 },
  { make: "Ferrari", model: "Expensive", price: 32000 },
  { make: "Porsche", model: "Expensive", price: 72000 }
];
// getting the research output information to put on the data tab
var outputs;
axios.get('http://localhost:8000/researchOutputs').then((response) => {
  console.log('----- RESPONSE DATA -----');
  outputs = response.data;
  console.log("---- OUTPUTS ----");
  console.log(outputs);
})


function ResearchOutputsPage() {
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


  const onQuickFilterChanged = () => {
    gridApi.setQuickFilter(document.getElementById('quickFilter').value);
  };

//   onCellMouseOver = (
//     event: CellMouseOverEvent
// ) => {void};

  return (


    <div>

      <h1 className={classes.text}>All Research Outputs</h1>

      <div style={{ margin: '10px 0' }}>
        {/* <button onClick={() => onBtnUpdate()}>
          Show CSV export content text
        </button> */}
        {/* <button onClick={() => onBtnExport()}>
          Download  CSV export file
        </button> */}
      </div>

      <div style={{ marginBottom: '5px' }}>
        <input
          type="text"
          onInput={() => onQuickFilterChanged()}
          id="quickFilter"
          placeholder="quick filter..."
        />

      </div>
      <center>


        <div className="ag-theme-alpine" style={{ height: 400, width: 1010 }}>
          <AgGridReact
            rowData={outputs}
            rowSelection={'single'}
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
      </center>
    </div>

  )
}

export default ResearchOutputsPage;

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// import ResearchOutputList from '../components/research/ResearchOutputList';

// function ResearchOutputsPage() {

//   const [outputs, setOutputs] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   return (
//     <div>
//       <div></div>

//       <div>
//         <h3>Research</h3>

//         <div>
//           <Link to='/new-output'>New Output</Link>
//         </div>

//         <div className={classes.wrapper}>
//           {/* <ResearchOutputList researchOutput={outputs} /> */}
//         </div>
//       </div>

//     </div>
//   );
// }
// export default ResearchOutputsPage;

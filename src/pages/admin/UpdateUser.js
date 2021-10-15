
import React, { useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import classes from './UpdateUser.module.css';

var users;
axios.get('http://localhost:8000/users').then((response) => {
  console.log('----- RESPONSE DATA -----');
  users = response.data;
  console.log("---- OUTPUTS ----");
  console.log(users);
})


export default function UpdateUser() {

  const [id, setID] = useState();

  const updateHandler = () => {
    alert('USER UDATED');
    axios.put(`http://localhost:8000/users/${id}`,
      {
        id: id
      }).then((response) => {
        console.log("Successfull Update");
      })
  };

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

  return (

    <div>
      <h1>UPDATE USER</h1>
      <p>Use the table to search for the id of the user that you
      <br/> would like to delete then enter it in the box on the right</p>
      <section>


        <div className="ag-theme-alpine" style={{ height: 360, width: 950 }}>
          <AgGridReact
            rowData={users}
            suppressExcelExport={true}
            popupParent={document.body}
            onGridReady={onGridReady}
          >

            <AgGridColumn field="id" sortable={true} filter={true}></AgGridColumn>
            <AgGridColumn field="firstname" sortable={true} filter={true}></AgGridColumn>
            <AgGridColumn field="surname" sortable={true} filter={true}></AgGridColumn>
            <AgGridColumn field="department_id" sortable={true} filter={true}></AgGridColumn>
            <AgGridColumn field="user_type" sortable={true} filter={true}></AgGridColumn>
            {/* <AgGridColumn field="userPassword" sortable={true} filter={true}></AgGridColumn> */}
            <AgGridColumn field="username" sortable={true} filter={true}></AgGridColumn>
          </AgGridReact>
        </div>

        <div className={classes.form}>
          <div>
            <label>ID of User to UPDATE</label>
          </div>
          <div>
            <input type="number" onChange={(e) => { setID(e.target.value); }} />
          </div>
          <button onClick={updateHandler}>UPDATE USER</button>
        </div>
      </section>
    </div>
  );
}
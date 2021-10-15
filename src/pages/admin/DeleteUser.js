
import React, { useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import classes from './DeleteUser.module.css';

var users;
axios.get('http://localhost:8000/users').then((response) => {
  console.log('----- RESPONSE DATA -----');
  users = response.data;
  console.log("---- OUTPUTS ----");
  console.log(users);
})

// axios.delete(`http://localhost:8000/users/${userData.id}`).then((response) => {
//   console.log('----- RESPONSE DATA -----');
//   users = response.data;
//   console.log("---- OUTPUTS ----");
//   console.log(users);
// })


export default function DeleteUser() {

  const [id, setID] = useState();

  const deleteHandler = () => {
    alert('USER DELETED');
    axios.delete(`http://localhost:8000/users/${id}`,
      {
        id: id
      }).then((response) => {
        console.log("Successfull DEletion");
      })
  };

  // axios.delete(`http://localhost:8000/users/${userData.id}`).then((response)=>{
  //       console.log(response.data);
  //   })


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
      <h1>DELETE USER</h1>
      <p>Use the table to search for the id of the user that you
      <br/> would like to delete then enter it in the box on the right</p>
      <section>


        <div style={{ margin: '5px 0' }}>
          {/* <button onClick={() => onBtnUpdate()}>
          Show CSV export content text
        </button> */}
          {/* <button onClick={() => onBtnExport()}>
          Download CSV export file
        </button> */}
        </div>

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
            <label>ID of User to Delete</label>
          </div>
          <div>
            <input type="number" onChange={(e) => { setID(e.target.value); }} />
          </div>
          <button onClick={deleteHandler}>DELETE USER</button>
        </div>
      </section>
    </div>
  );
}
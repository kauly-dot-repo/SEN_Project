import { useRef } from 'react';
import axios from 'axios';

import classes from './CreateUser.module.css';

function CreateUser() {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const depIdRef = useRef();
  const userTypeRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  function createHandler() {
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredDepId = depIdRef.current.value;
    const enteredType = userTypeRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredUsername = usernameRef.current.value;

    const userData = {
      firstname: enteredName,
      surname: enteredSurname,
      department_id: enteredDepId,
      user_type: enteredType,
      userPassword: enteredPassword,
      username: enteredUsername
    };

    axios.post("http://localhost:8000/users", userData).then((response) => {
      console.log(response.data);
    })



  }

  return (
    <div>

      <center><h1>CREATE USER</h1></center>
      <form onSubmit={createHandler} className={classes.form}>
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" ref={nameInputRef} />

        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" ref={surnameInputRef} />

        <label htmlFor="depID">Department ID</label>
        <input type="number" id="depID" ref={depIdRef} />

        <label htmlFor="surname">Username</label>
        <input type="text" id="surname" ref={usernameRef} />

        <label htmlFor="depID">Password</label>
        <input type="password" id="depID" ref={passwordRef} />

        <label htmlFor="type">User Role</label>
        <select id="type" ref={userTypeRef} >
          <option value="Manager">Manager</option>
          <option vlaue="Researcher">Researcher</option>
          <option value="System Administrator">System Administrator</option>
        </select>

        <div>
          <button onClick={createHandler}>Create New User</button>
        </div>

      </form>


    </div>
  );
}

export default CreateUser;

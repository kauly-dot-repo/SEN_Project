
import { useRef } from 'react';
import classes from './LoginForm.module.css';
// import axios from 'axios';
import { Redirect } from 'react-router';


export default function LoginForm() {

  const usernameRef = useRef();
  const userPasswordRef = useRef();



  function loginUser() {


    const enteredName = usernameRef.current.value;
    const enteredPassword = userPasswordRef.current.value;

    const userData = {
      username: enteredName,
      userPassword: enteredPassword
    };

    
      // if(enteredName === 'user4' && enteredPassword === '1234'){
      //   alert("HEY!!!");
      //   return <Redirect to='/system-admin' />
      // } 
    
    // var userDatas;

    // axios.get("http://localhost:8000/login", userData).then((response) => {
    //   userDatas = response.data;
    //   console.log("----RESPONSE: ")
    //   alert(response);
    // })
    // alert(userDatas);
  }

  return (
    <div className={classes.container}>

      <h1 className={classes.text}> Welcome to Nust Research Output Management System</h1>
      <form className={classes.form}>
        <div>
          <label htmlFor="username">Username</label>
          <input type='text' id='username' ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type='password' id='password' ref={userPasswordRef} />
        </div>
        <div>
          <p><a href='#'>Forgot your password</a></p>
        </div>

        <div>
          <button onClick={loginUser}>LOGIN</button>
        </div>

      </form>

    </div>
  );
}
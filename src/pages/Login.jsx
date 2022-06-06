import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

  const [loginCreds, setLoginCreds] = useState({})
  const { login } = useContext(AuthContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login()


  }



  return (
    <div>
      <form onSubmit={handleSubmit} action=""
      style={{
        display:"flex", 
        flexDirection:"column",
        margin:"auto",
        maxWidth:"200px",
        gap:"10px"}}
      >
        <input name="email" onChange={handleChange} data-cy="login-email" placeholder="Enter email" />
        <input name='password' onChange={handleChange} data-cy="login-password" placeholder="Enter password" />
        <button type='submit' data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

//export default Login;
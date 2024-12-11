import React, { useState } from 'react'
import './SignIn.css'
import Button from '../../common/Button'
import axios from 'axios';

export default function SignIn() {
  const [signInInfo, setSignInInfo] = useState({
    username: "",
    password: "",
  });
  const [errPassword, setErrPassword] = useState("");

  function handleClick() {
    setErrPassword("");

    // Validate none of the fields are left blank
    if(signInInfo.username === "" || signInInfo.password === "") {
      setErrPassword("Fields can't be blank.");
      return;
    }

    // Request authentication from the backend.
    axios.post("http://localhost:3001/users/sign-in", signInInfo)
    .then(response => {
      console.log(response.data.jwtToken);
      let jwt = response.data.jwtToken
      localStorage.setItem('jwt', jwt);
    })
    .catch(err => {
      setErrPassword(err.response.data.error);
    })
  }

  return (
    <>
    <div className="card">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        onChange={(e) => setSignInInfo({...signInInfo, username: e.target.value})}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        onChange={(e) => setSignInInfo({...signInInfo, password: e.target.value})}
      />
      <div className="line-height"></div>
      <div className="error-text line-height">{errPassword}</div>

      <Button text="Sign In" onClick={() => handleClick()} />
    </div>
    
      
    </>
    
  )
}

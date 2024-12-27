import React, { useState } from 'react'
import './SignIn.css'
import Button from '../../common/Button'

export default function SignIn() {
  const [signInInfo, setSignInInfo] = useState({
    username: "",
    password: "",
  });
  const [errPassword, setErrPassword] = useState("");

  function handleClick() {
    console.log("hey");
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

import React, { useState } from 'react'
import './SignUp.css'
import Button from '../../common/Button'

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    confirm_pw: ""
  });

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
        onChange={(e) => setSignUpInfo({...signUpInfo, username: e.target.value})}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        onChange={(e) => setSignUpInfo({...signUpInfo, password: e.target.value})}
      />

      <label htmlFor="confirm_pw">Retype Password</label>
      <input
        id="confirm_pw"
        type="text"
        onChange={(e) => setSignUpInfo({...signUpInfo, confirm_pw: e.target.value})}
      />

      <Button text="Continue" onClick={() => handleClick()} />
    </div>
    
      
    </>
    
  )
}

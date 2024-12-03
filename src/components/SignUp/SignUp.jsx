import React, { useState } from 'react'
import './SignUp.css'
import Button from '../../common/Button'

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirm_pw: ""
  });
  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  function handleClick() {
    console.log("hey");
  }

  function checkValidUsername(username) {
    // Fail if the string is empty
    if(username === "") {
      setErrUsername("Required");
      return -1;
    }
    setErrUsername("");
  }

  function checkValidEmail(email) {
    // Fail if the string is empty
    if(email === "") {
      setErrEmail("Required");
      return -1;
    }

    // Fail if the string has less or more than 1 @.
    let atCount = 0;
    for(let char of email) {
      if(char === "@") {
        atCount++
      }
    }
    if(atCount !== 1) {
      setErrEmail("Email must include one @");
      return -1;
    }

    // Fail if the string does not have text on both sides.
    let split_email = email.split("@");
    if(split_email[0] === "" || split_email[1] === "") {
      setErrEmail("Email must have text before and after the @");
      return -1;
    }

    // Fail if the right side of the string contains no period.
    if(!split_email[1].includes(".")) {
      setErrEmail("Email must have a top level domain (eg: .com)");
      return -1;
    }
    
    setErrEmail("");
  }

  function checkPasswordMatch() {
    if(signUpInfo.password === "" || signUpInfo.confirm_pw === "") {
      setErrPassword("");
      return -1;
    }
    if(signUpInfo.password !== signUpInfo.confirm_pw) {
      setErrPassword("Passwords must match")
      return -1;
    }
    setErrPassword("");
  }

  return (
    <>
    <div className="card">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        onChange={(e) => setSignUpInfo({...signUpInfo, username: e.target.value})}
        onBlur={(e) => checkValidUsername(e.target.value)}
      />
      <div className="error-text line-height">{errUsername}</div>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        onChange={(e) => setSignUpInfo({...signUpInfo, email: e.target.value})}
        onBlur={(e) => checkValidEmail(e.target.value)}
      />
      <div className="error-text line-height">{errEmail}</div>

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        onChange={(e) => setSignUpInfo({...signUpInfo, password: e.target.value})}
        onBlur={() => checkPasswordMatch()}
      />
      <div className="line-height"></div>
      <label htmlFor="confirm_pw">Retype Password</label>
      <input
        id="confirm_pw"
        type="password"
        onChange={(e) => setSignUpInfo({...signUpInfo, confirm_pw: e.target.value})}
        onBlur={() => checkPasswordMatch()}
      />
      <div className="error-text line-height">{errPassword}</div>

      <Button text="Continue" onClick={() => handleClick()} />
    </div>
    
      
    </>
    
  )
}

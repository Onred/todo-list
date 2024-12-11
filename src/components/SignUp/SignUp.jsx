import React, { useState } from 'react'
import './SignUp.css'
import Button from '../../common/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  const [errButton, setErrButton] = useState("");

  const navigate = useNavigate();

  function clearErrors() {
    setErrUsername("");
    setErrEmail("");
    setErrPassword("");
    setErrButton("");
  }

  function handleClick() {
    
    setErrButton("");

    console.log(!(checkValidUsername(signUpInfo.username) && checkValidEmail(signUpInfo.email) && checkPasswordMatch()))
    console.log(checkValidUsername(signUpInfo.username))
    console.log(checkValidEmail(signUpInfo.email))
    console.log(checkPasswordMatch())

    if( !(checkValidUsername(signUpInfo.username) && checkValidEmail(signUpInfo.email) && checkPasswordMatch()) ) {
      setErrButton("There are errors that you must fix.");
      return;
    }

    let payload = {
      username: signUpInfo.username,
      email: signUpInfo.email,
      password: signUpInfo.password
    }

    axios.post("http://localhost:3001/users/sign-up", payload)
    .then(response => {
      console.log(response.data);
      navigate("/login");
    })
    .catch(err => {
      setErrButton("A response error occured. Check the console for more information");
      console.log(err)
    })
  }

  function checkValidUsername(username) {
    // Fail if the string is empty
    if(username === "") {
      setErrUsername("Required");
      return false;
    }
    setErrUsername("");
    return true;
  }

  function checkValidEmail(email) {
    // Fail if the string is empty
    if(email === "") {
      setErrEmail("Required");
      return false;
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
      return false;
    }

    // Fail if the string does not have text on both sides.
    let split_email = email.split("@");
    if(split_email[0] === "" || split_email[1] === "") {
      setErrEmail("Email must have text before and after the @");
      return false;
    }

    // Fail if the right side of the string contains no period.
    if(!split_email[1].includes(".")) {
      setErrEmail("Email must have a top level domain (eg: .com)");
      return false;
    }
    
    setErrEmail("");
    return true;
  }

  function checkPasswordMatch() {
    if(signUpInfo.password === "" || signUpInfo.confirm_pw === "") {
      setErrPassword("");
      return false;
    }
    if(signUpInfo.password !== signUpInfo.confirm_pw) {
      setErrPassword("Passwords must match")
      return false;
    }
    setErrPassword("");
    return true;
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

      <div className="error-text line-height">{errButton}</div>
      <Button text="Continue" onClick={() => handleClick()} />
    </div>
    
      
    </>
    
  )
}

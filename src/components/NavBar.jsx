import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Contexts'


export default function NavBar() {
  const userData = useContext(AuthContext);

  return (
    <>
    <div className="flex-ends">
      <div className="navbar">
        <NavLink to={"/todo"}>Todo</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/signup"}>Sign Up</NavLink>
      </div>
      <div>{userData ? "Hello, " + userData.username : null}</div>
    </div>
    
    </>
  )
}

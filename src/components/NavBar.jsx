import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <div className="navbar">
      <NavLink to={"/todo"}>Todo</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>
      <NavLink to={"/signup"}>Sign Up</NavLink>
    </div>
    </>
  )
}

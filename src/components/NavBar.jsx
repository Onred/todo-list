import React from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Contexts'
import { Button } from 'react-bootstrap';


export default function NavBar() {
  const userData = useContext(AuthContext);

  function changeTheme() {
    let current_theme = document.documentElement.getAttribute("data-bs-theme")
    if(current_theme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light")
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark")
    }
  }

  return (
    <>
    <div className="flex-ends">
      <div className="navbar">
        <NavLink to={"/todo"}>Todo</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/signup"}>Sign Up</NavLink>
        <NavLink to={"/quiz"}>Quiz</NavLink>
        <Button onClick={() => changeTheme()}>Change Theme</Button>
      </div>
      <div>{userData ? "Hello, " + userData.username : null}</div>
    </div>
    </>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <>
    <div className="navbar">
      {props.pages[0].children.map(page => 
        <NavLink key={page.name} to={page.path}>
          {page.name}
        </NavLink>
      )}
    </div>
    </>
  )
}

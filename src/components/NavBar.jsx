import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  
  return (
    <div>
      {props.routes.map(route => 
        <NavLink key={route.name} to={route.path}>
          {route.name}
        </NavLink>
      )}
    </div>
  )
}

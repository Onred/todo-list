import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PageContext } from '../Contexts';

export default function NavBar() {
  let pages = useContext(PageContext);
  return (
    <>
    <div className="navbar">
      {pages.map(page => 
        <NavLink key={page.path} to={page.path}>
          {page.custom_display_text}
        </NavLink>
      )}
    </div>
    </>
  )
}

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  function isSignedIn() {
    // Logic and if statments and other checks to see if we are actually logged in.
    return true;
  }

  return (
    <>
      {isSignedIn() ? <Outlet/> : <Navigate to="/login" /> }
    </>
  )
}

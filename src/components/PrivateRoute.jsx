import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  function isSignedIn() {
    return true;
    // Logic and if statments and other checks to see if we are actually logged in.
<<<<<<< HEAD
    if(userData.id) {
      return true;
    } else {
      return false;
    }
    
=======
    return true;
>>>>>>> parent of 596270a (Auth Checking)
  }

  return (
    <>
      {isSignedIn() ? <Outlet/> : <Navigate to="/login" /> }
    </>
  )
}

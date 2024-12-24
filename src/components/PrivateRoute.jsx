import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts';

export default function PrivateRoute() {
  const userData = useContext(AuthContext);

  function isSignedIn() {
    return true;
    // Logic and if statments and other checks to see if we are actually logged in.
    if(userData) {
      return true;
    } else {
      return false;
    }
    
  }

  return (
    <>
      {isSignedIn() ? <Outlet/> : <Navigate to="/login" /> }
    </>
  )
}

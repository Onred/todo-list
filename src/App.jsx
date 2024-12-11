import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from './Contexts';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(app_mounted, [])

  function app_mounted() {
    // Find the jwt in localstorage if it exists
    let jwt = localStorage.getItem("jwt");

    // If we do have a jwt:
    if(jwt) {

      // decode it,
      let decoded_jwt = jwtDecode(jwt);

      // make sure it is not expired,
      if(decoded_jwt.exp > Date.now() / 1000) {

        // and then set our user data.
        setUserData(decoded_jwt);
      }
    }
  }
  
  return (
    <>
      <AuthContext.Provider value={userData}>
        <NavBar/>
        <Outlet/>
      </AuthContext.Provider>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
// import './App.css'
import './theme.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from './Contexts';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(app_mounted, [])

  function app_mounted() {
    // Find the jwt in localstorage if it exists
    let jwt = localStorage.getItem("jwt");

    // If we do have a jwt:
    if(jwt) {

      // decode it,
      let decoded_jwt = jwtDecode(jwt);
      console.log(decoded_jwt)

      // make sure it is not expired,
      if(decoded_jwt.exp > Date.now() / 1000) {

        // and then set our user data.
        setUserData(decoded_jwt);
      }
    }
  }
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div className="page-wrapper"> 
      <AuthContext.Provider value={userData}>
        <NavBar/>
        <Outlet/>
      </AuthContext.Provider>
      </div>
    </>
    
  )
}

export default App

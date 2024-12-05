import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from './Contexts';

function App() {
  const [theme, setTheme] = useState("light");
  
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <NavBar/>
        <Outlet/>
      </ThemeContext.Provider>
    </>
  )
}

export default App

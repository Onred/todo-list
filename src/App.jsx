import './App.css'
import Todo from './components/Todo/Todo'
import SignUp from './components/SignUp/SignUp'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App(props) {
  return (
    <>
      <NavBar pages={props.pages} />
      <Outlet/>
      {/* <Todo/> */}
      {/* <SignUp/> */}
    </>
  )
}

export default App

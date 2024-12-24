import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom'
import './index.css'
// import './App.css'
import Todo from './components/Todo/Todo.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Profile from './components/Profile.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import Button from './common/Button.jsx'
import { PageContext, AuthContext } from './Contexts.js';
import SignIn from './components/SignIn/SignIn.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Quiz from './components/Quiz.jsx'



// const pages = [
//   {
//     custom_display_text: "Todo",
//     path: 'todo',
//     element: <Todo/>
//   },
//   {
//     custom_display_text: "About",
//     path: 'about',
//     element: <About/>
//   },
//   {
//     custom_display_text: "Contact",
//     path: 'contact',
//     element: <Contact/>
//   },
//   {
//     custom_display_text: "Profile",
//     path: 'profile',
//     element: <Profile/>
//   },
//   {
//     custom_display_text: "Sign Up",
//     path: 'signup',
//     element: <SignUp/>
//   }
// ];

// const routes = [
//   {
//     path: '/',
//     element: <App/>,
//     errorElement: <ErrorPage/>,
//     children: pages
//   },
// ];

// const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route element={<PrivateRoute />}>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn/>}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)

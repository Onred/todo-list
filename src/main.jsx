import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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

const routes = [
  {
    path: '/',
    element: null,
    errorElement: <ErrorPage/>,
    children: [
      {
        name: "Todo",
        path: 'todo',
        element: <Todo/>
      },
      {
        name: "About",
        path: 'about',
        element: <About/>
      },
      {
        name: "Contact",
        path: 'contact',
        element: <Contact/>
      },
      {
        name: "Profile",
        path: 'profile',
        element: <Profile/>
      },
      {
        name: "Sign Up",
        path: 'signup',
        element: <SignUp/>
      },
    ]
  },
];

routes[0].element = <App pages={routes}/>

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

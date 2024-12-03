import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
import Todo from './components/Todo/Todo.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Profile from './components/Profile.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import NavBar from './components/NavBar.jsx'
// import App from './App.jsx'
const temp = [
  {
    name: "Home",
    path: '/',
    element: <NavBar />,
    errorElement: <ErrorPage/>
  },
  {
    name: "Todo",
    path: '/todo',
    element: <Todo/>
  },
  {
    name: "About",
    path: '/about',
    element: <About/>
  },
  {
    name: "Contact",
    path: '/contact',
    element: <Contact/>
  },
  {
    name: "Profile",
    path: '/profile',
    element: <Profile/>
  }
];
const routes = [
  {
    name: "Home",
    path: '/',
    element: <NavBar routes={temp} />,
    errorElement: <ErrorPage/>
  },
  {
    name: "Todo",
    path: '/todo',
    element: <Todo/>
  },
  {
    name: "About",
    path: '/about',
    element: <About/>
  },
  {
    name: "Contact",
    path: '/contact',
    element: <Contact/>
  },
  {
    name: "Profile",
    path: '/profile',
    element: <Profile/>
  }
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

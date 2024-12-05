import { createContext, StrictMode } from 'react'
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
import Button from './common/Button.jsx'
import { PageContext, AuthContext } from './Contexts.js';

const pages = [
  {
    custom_display_text: "Todo",
    path: 'todo',
    element: <Todo/>
  },
  {
    custom_display_text: "About",
    path: 'about',
    element: <About/>
  },
  {
    custom_display_text: "Contact",
    path: 'contact',
    element: <Contact/>
  },
  {
    custom_display_text: "Profile",
    path: 'profile',
    element: <Profile/>
  },
  {
    custom_display_text: "Sign Up",
    path: 'signup',
    element: <SignUp/>
  }
];

const routes = [
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: pages
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext.Provider value={null}>
      <PageContext.Provider value={pages}>
        <RouterProvider router={router} />
      </PageContext.Provider>
    </AuthContext.Provider>
  </StrictMode>,
)

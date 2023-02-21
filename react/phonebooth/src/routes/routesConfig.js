import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import { isAuth } from '../utils/localstorage'

export const ROUTES = createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
  },
  {
    path: '/login',
    element: <Login/>,
    // isProtected:true
    loader:()=>isAuth({isProtected:true})
  },
  {
    path: '/signup',
    element: <Signup/>,
    // isProtected:true
    loader:()=>isAuth({isProtected:true})
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    // isPrivate:true
    loader:isAuth
  }
])

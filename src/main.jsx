import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Authproviders from './providers/Authproviders.jsx'
import PrivateRouters from './routers/PrivateRouters.jsx'
import Order from './components/Order.jsx'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivateRouters><Order></Order></PrivateRouters>
      },
      {
        path: '/profile',
        element: <PrivateRouters><Profile></Profile></PrivateRouters>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router}></RouterProvider>
    </Authproviders>
  </React.StrictMode>,
)

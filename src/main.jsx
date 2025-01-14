import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import User from './components/User/User.jsx';
import Usedetails from './components/Usedetails/Usedetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:  '/about',
        element: <About></About>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
          path :'/Home',
          element:<Home></Home>
      },
      {
        path:'/User',
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:'/user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Usedetails></Usedetails>
      }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

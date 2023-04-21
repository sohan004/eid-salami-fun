import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Option from './Option.jsx'
import Home from './Home.jsx'
import Bkash from './Bkash.jsx'
import Cancle from './Cancle.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bkash',
        element: <Bkash>বিকাশ</Bkash>
      },
      {
        path: '/nogod',
        element: <Bkash>নগদ</Bkash>
      },
      {
        path: '/cancle',
        element: <Cancle></Cancle>
      },
      {
        path: '/option',
        element: <Option></Option>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

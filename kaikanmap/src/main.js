import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Equipe from './pages/equipe/index.js'



import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
   {
    path:"/",
    element: <App></App>,
   },
   {
    path:"/equipe",
    element: <Equipe></Equipe>,
   },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
          <RouterProvider router={router}/>
    </React.StrictMode>,
)
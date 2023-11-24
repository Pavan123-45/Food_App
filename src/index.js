import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Err from "./Error"
import Body from './Body';
import Menu from './Menu';
export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: < App/>,
      
       
      children:[
        {
            path:"/",
            element : <Body/>
        },
      {
          path: "/about",
          element: < About/>
        },
        {
          path: "/contact",
          element: < Contact/>
        },
        {
            path: "/menu",
            element: <Menu/>
          },
        ],
      errorElement : <Err/>,
     
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router ={appRouter} />);



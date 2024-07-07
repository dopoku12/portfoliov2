import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './stylesheet/index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';

import Projects from './pages/Projects';
import Resume from './components/Resume';
import Experience from './pages/Experience';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
          path: "/",
          element:<Projects />
        },
      {
        path: "/Experience",
        element: <Experience/>,
    },
        {
          path: "/Projects",
          element:<Projects />,
        },
      
      {
        path: "/Resume",
        element:  <Resume />,
      },
         
    ],
    }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
)


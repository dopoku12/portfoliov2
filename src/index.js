import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './stylesheet/index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';

import Projects from './components/Projects';
import Resume from './components/Resume';
import Experience from './components/Experience';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
      {
        path: "/Experience",
        element: <Experience/>,
    },
        {
          path: "/Projects",
          element: 
          <Projects />,
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


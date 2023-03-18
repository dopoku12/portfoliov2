import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './stylesheet/index.css';
import App from './App';
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/projects', element: <Projects /> },
            { path: 'resume', element: <Resume /> },
            { path: 'aboutMe', element: <AboutMe /> }
        ]
    }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
)


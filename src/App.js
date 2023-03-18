import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import { FaMoon, FaSun, FaGithub, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';

function App() {

  const faIcons = [
    {
      id: 0,
      name: 'Linkedin',
      iconName: FaLinkedin,
      pathName: "https://www.linkedin.com/in/david-opoku-7008721b7/"
    },
    {
      id: 1,
      name: 'Github',
      iconName: FaGithub,
      pathName: "https://github.com/dopoku12"
    },
    {
      id: 2,
      name: 'Email',
      iconName: FaRegEnvelope,
      pathName: "mailto:davidopoku30@gmail.com"
    },


    {
      id: 4,
      name: 'lightMode',
      iconName: FaSun,

    }
    ,
    {
      id: 5,
      name: 'darkMode',
      iconName: FaMoon,
    },
  ]

  return (
    <div className="App">
      <Home />
      <Outlet />
      {
        // <BrowserRouter>
        //   <Routes>
        //     <Route path="/" element={<Home />} />
        //   </Routes>

        //   <Routes>
        //     <Route path="/Resume" element={<Resume />} />
        //   </Routes>

        //   <Routes>
        //     <Route path="/Projects" element={<Projects />} />
        //   </Routes>


        //   <Routes>
        //     <Route path="/AboutMe" element={<AboutMe />} />
        //   </Routes>

        // </BrowserRouter>
      }
    </div>
  );
}

export default App;

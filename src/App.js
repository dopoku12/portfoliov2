import Home from "./pages/Home"
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
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
      <Nav />
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

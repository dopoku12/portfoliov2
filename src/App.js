import Home from "./components/Home"
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { FaMoon, FaSun, FaGithub, FaRegEnvelope, FaLinkedin, FaAngleDown } from 'react-icons/fa';

function App() {

  const faIcons = [
    {
      id: 0,
      name: 'Linkedin',
      iconName: FaLinkedin,
      pathName: "https://www.linkedin.com/in/david-opoku-7008721b7/",
      color: ' #0077b5'
    },
    {
      id: 1,
      name: 'Github',
      iconName: FaGithub,
      pathName: "https://github.com/dopoku12",
      color: '#000000'
    },

    {
      id: 2,
      name: 'Email',
      iconName: FaRegEnvelope,
      pathName: "mailto:davidopoku30@gmail.com",
      color: 'gray'
    },


    {
      id: 4,
      name: 'Light Mode',
      iconName: FaSun,

    }
    ,
    {
      id: 5,
      name: 'Dark Mode',
      iconName: FaMoon,

    },

  ]


  return (
    <div className="App">
      <Home />
      <Nav faIcons={faIcons} FaAngleDown={FaAngleDown} />
      <Outlet />

    </div>
  );
}

export default App;

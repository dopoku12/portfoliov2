import Home from "./components/Home"
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub,
  FaRegEnvelope, FaLinkedin,
  FaAngleDown, FaAngleUp,
  FaCode
} from 'react-icons/fa';

function App() {

  let num = 0;
  const faIcons = [
    {
      name: 'Linkedin',
      iconName: FaLinkedin,
      pathName: "https://www.linkedin.com/in/david-opoku-7008721b7/",
      color: ' #0077b5'
    },
    {
      name: 'Github',
      iconName: FaGithub,
      pathName: "https://github.com/dopoku12",
      color: '#000000'
    },

    {
      name: 'Email',
      iconName: FaRegEnvelope,
      pathName: "mailto:davidopoku30@gmail.com",
      color: 'gray'
    },


    {
      name: 'Light Mode',
      iconName: FaSun,

    }
    ,
    {
      name: 'Dark Mode',
      iconName: FaMoon,
    },

  ].map(i => { return { ...i, id: num++ } })


  return (
    <div className=" dark:bg-slate-800  h-full">
      <Home FaCode={FaCode} />
      <Nav faIcons={faIcons} FaAngleDown={FaAngleDown}
        FaAngleUp={FaAngleUp}
      />
      <main >

        <Outlet />
      </main>

    </div>
  );
}

export default App;

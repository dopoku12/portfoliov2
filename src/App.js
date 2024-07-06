import Theme from "./components/Theme";
import Home from "./components/Home";

import {
  FaGithub,
  FaRegEnvelope, FaLinkedin,
  FaAngleDown, FaCode
} from 'react-icons/fa';
import { TiAdjustContrast } from 'react-icons/ti'

import  {Link,Outlet}  from "react-router-dom";

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
    },

    {
      name: 'Email',
      iconName: FaRegEnvelope,
      pathName: "mailto:davidopoku30@gmail.com",
    }
  ].map(i => { return { ...i, id: num++ } })

  return (
    <div className=" dark:bg-slate-800 dark:text-white ">

    <nav>
    <Theme TiAdjustContrast={TiAdjustContrast} />
    <Home FaCode={FaCode} faIcons={faIcons}
    FaAngleDown={FaAngleDown} />
    <ul className="grid place-items-center">
    <li>
    <Link to={'/Projects'}>
    Projects
    </Link>
    </li>
    <li>
     <Link to={'/Resume'}>
     Skills
     </Link>
    </li>
    <li>
     <Link to={'/Experience'}>
     Experience
     </Link>
    </li>
    </ul>
   
    </nav>
   
    
      <main className="grid box place-items-center">
   <Outlet/>
      </main>
    </div>

  );
}

export default App;

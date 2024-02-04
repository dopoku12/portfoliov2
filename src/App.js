import Theme from "./components/Theme";
import Home from "./components/Home"
import Projects from "./components/Projects";
import Resume from "./components/Resume"
import {
  FaGithub,
  FaRegEnvelope, FaLinkedin,
  FaAngleDown, FaCode
} from 'react-icons/fa';
import { TiAdjustContrast } from 'react-icons/ti'
import Experience from "./components/Experience";

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
    <div className=" dark:bg-slate-800 dark:text-white 
    grid grid-cols-2
    ">
    <nav>
    <Theme TiAdjustContrast={TiAdjustContrast} />
    <Home FaCode={FaCode} faIcons={faIcons}
    FaAngleDown={FaAngleDown} />
    </nav>
      <main className="grid box place-items-center">
      <Experience/>
      <Projects FaAngleDown={FaAngleDown} />
        <Resume />
      </main>

    </div>

  );
}

export default App;

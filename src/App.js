import Nav from "./components/Nav";
import Home from "./components/Home"
import Projects from "./components/Projects";
import Resume from "./components/Resume"
import AboutMe from "./components/AboutMe"
import {
  FaMoon, FaSun, FaGithub,
  FaRegEnvelope, FaLinkedin,
  FaAngleDown, FaCode
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
      <Nav faIcons={faIcons} />
      <main className="grid place-items-center">
        <Home FaCode={FaCode} FaAngleDown={FaAngleDown} />
        <Projects FaAngleDown={FaAngleDown} />
        <Resume FaAngleDown={FaAngleDown} />
        <AboutMe FaAngleDown={FaAngleDown} />
        <section id="content">
        </section>
      </main>
    </div>
  );
}

export default App;

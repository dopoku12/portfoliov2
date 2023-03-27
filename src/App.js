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
      <Home FaCode={FaCode} />
      <main>
        <button className=" m-10 grid place-items-center">
          <a href='#content'>
            <FaAngleDown color='orange' size={30} />
          </a>
        </button>
        <section id="content" className="grid grid-cols-1 ">
          <Projects />
          <Resume />
          <AboutMe />
        </section>
      </main>
    </div>
  );
}

export default App;

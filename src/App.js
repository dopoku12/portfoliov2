import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from 'react';
import { FaInfo, FaGithub, FaRegEnvelope, FaLinkedin, FaRegIdBadge, FaHome } from 'react-icons/fa';

function App() {

  const [faIcons, setFaIcons] = useState([
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
      id: 3,
      name: 'Home',
      iconName: FaHome,
      pathName: "/"
    },
    {
      id: 4,
      name: 'Resume',
      iconName: FaRegIdBadge,
      pathName: "/Resume"
    },
    {
      id: 5,
      name: 'AboutMe',
      iconName: FaInfo,
      pathName: "/AboutMe"
    }
  ])

  function onMouseOver(id) {
    const change = faIcons.map(i => i.id === id ? { ...i, status: true } :
      { ...i, status: false }
    )
    setFaIcons(change)
  }
  function onMouseOut(id) {
    const change = faIcons.map(i => i.id === id ? { ...i, status: false } :
      { ...i, status: null }
    )
    setFaIcons(change)
  }


  const outSrc = faIcons.filter(i => (i.id < 3)).map(i => {
    return (
      <a key={i.id} href={i.pathName}>
        <li className="nav-li">
          <button className={i.name} onMouseOver={() => onMouseOver(i.id)}

            onMouseOut={() => onMouseOut(i.id)}>
            <p>
              {i.status && i.name}
              <i.iconName
                className='nav-icons'
                size={27} />
            </p>
          </button>
        </li>
      </a>
    )
  })

  const linkSrc = faIcons.filter(i => (i.id > 2))
    .map(i => {
      return (
        <Link to={i.pathName} key={i.id}>
          <li className="nav-li" >
            <button className={i.name} onMouseOver={() => onMouseOver(i.id)}
              onMouseOut={() => onMouseOut(i.id)}>
              <p>
                {i.status && i.name}
                <i.iconName className='nav-icons'
                  size={27} />
              </p>
            </button>
          </li>
        </Link>
      )
    })


  return (
    <div className="App">

      <BrowserRouter>

        <aside>
          <nav>
            <ul className='nav-ul'>
              {
                linkSrc
              }
              {
                outSrc
              }
            </ul>
          </nav>
        </aside>


        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/Resume" element={<Resume />} />
        </Routes>

        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>


        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

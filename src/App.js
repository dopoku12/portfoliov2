// import Nav from "./components/Nav";
import Projects from "./Projects";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import { useState } from 'react';
import { FaPaintBrush, FaCode, FaInfo, FaRegNewspaper } from 'react-icons/fa';
function App() {
  const [faIcons, setFaIcons] = useState([
    ///add behavior for click or hover
    { id: 0, name: 'projects', iconName: FaPaintBrush, },
    { id: 1, name: 'resume', iconName: FaRegNewspaper, },
    { id: 2, name: 'Code', iconName: FaCode, },
    { id: 3, name: 'aboutMe', iconName: FaInfo, }
  ].map(i => ({ ...i, status: false })
  )
  )

  function clickEvent(id) {
    const change = faIcons.map(i => i.id === id ? { ...i, status: true } : { ...i, status: false })
    setFaIcons(change)
    console.log(faIcons[0].status);
  }
  faIcons.map(i => console.log(Object.values(i)))



  const navicons = faIcons.map((i) => {
    return (
      <li key={i.id} >
        <button>
          <i.iconName onClick={() => clickEvent(i.id)} className='nav-icons' color='5489A8' size={20} />
          <p>{i.name}</p>
        </button>
      </li>
    )
  })

  return (
    <div className="App">
      <main>

        {
          <Projects />
        }
        {
          faIcons[1].status &&
          <Resume />
        }
        {
          faIcons[3].status &&
          <AboutMe />

        }
      </main>
      <footer>
        <nav>
          <ul className='nav-ul'>
            {
              navicons
            }

          </ul>
        </nav>

      </footer>
    </div>
  );
}

export default App;

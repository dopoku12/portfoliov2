import Projects from "./Projects";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Nav from "./components/Nav"
import { FaPaintBrush } from 'react-icons/fa'
function App() {


  return (
    <div className="App">





      <Nav />
      <main >
        <header className="intro">
          <h1 className='intro-h1'> Welcome, I am  David  <span className='last'>Opoku </span>
          </h1>
        </header>
        <p className="intro-pg">

          A Front-End web Developer/Designer currently based in Maryland,USA
          <span className="text-link"> hit me Up</span> to make some Magic
        </p>
        <footer>
          <FaPaintBrush color='#957efa' />
          <h1>View Projects</h1>
        </footer>
      </main>

      {
        //  <Projects />
        // <Resume />
        // <AboutMe />
      }
    </div>
  );
}

export default App;

import Nav from "./components/Nav";
import Projects from "./Projects";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
function App() {
  return (
    <div className="App">
      <main>
        {<Projects />}
        {<Resume />}
        {<AboutMe />}
      </main>
      <footer>
        {<Nav />}
      </footer>
    </div>
  );
}

export default App;

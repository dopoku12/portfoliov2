import Nav from "./components/Nav";
import Projects from "./Projects";
import Resume from "./Resume";
function App() {
  return (
    <div className="App">
      <main>
        <Projects />
        <Resume />
      </main>
      <footer>
        <Nav />
      </footer>
    </div>
  );
}

export default App;

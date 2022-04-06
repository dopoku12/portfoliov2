import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./Resume";
import Footer from "./components/Footer";
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

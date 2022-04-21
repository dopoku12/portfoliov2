import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Projects />
          </Route>
        </Routes>

        <Routes>
          <Route path="/">
            <Resume />
          </Route>
        </Routes>
        <Routes>
          <Route path="/">
            <AboutMe />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

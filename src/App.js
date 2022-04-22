import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
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

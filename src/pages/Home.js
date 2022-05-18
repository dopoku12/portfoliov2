import Nav from "../components/Nav"
import { FaRocket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <Nav />
            <main >
                <header className="intro">
                    <h2 className='intro-h2 animate__animated animate__zoomInDown'>
                        Welcome, I am
                    </h2>
                    <h1 className="name">
                        <span className='first'>David </span>

                        <span className='last'>Opoku</span>
                    </h1>
                </header>
                <p className="intro-pg">
                    A Front-End web Developer/Designer currently based in the Washington DC-Baltimore Area let's come together &
                    <span className="text-link">  Make Something Great</span>
                </p>
                <footer>
                    <Link to="/Projects">
                        <FaRocket className="projects-link" size={35} />
                        <h1 className="projects-link">View Projects</h1>
                    </Link>
                </footer>
            </main>
        </div>

    )
}

export default Home
import Nav from "../components/Nav"
import { FaPaintBrush } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <Nav />

            <main >
                <header className="intro">
                    <h1 className='intro-h1 animate__animated animate__zoomInDown'> Welcome, I am  David  <span className='last'>Opoku </span>
                    </h1>
                </header>
                <p className="intro-pg">

                    A Front-End web Developer/Designer currently based in Washington DC-Baltimore Area
                    <span className="text-link"> hit me Up</span> to make some Magic
                </p>
                <footer>
                    <Link to="/Projects">
                        <FaPaintBrush />
                        <h1>View Projects</h1>
                    </Link>
                </footer>
            </main>
        </div>

    )
}

export default Home
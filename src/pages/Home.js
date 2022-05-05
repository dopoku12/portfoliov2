import Nav from "../components/Nav"
import { FaPaintBrush, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from "react"
function Home() {
    const [modeHandler, setModeHandler] = useState(
        [{
            id: 0,
            name: 'Moon',
            iconName: FaMoon,
            status: true
        },
        {
            id: 1,
            name: 'Sun',
            iconName: FaSun,
            status: false
        }]
    )

    function changeMode(id) {
        modeHandler.map(i => i.id === id ? { ...i, status: true } : null)

    }

    const daynNight = modeHandler.map(i =>
        <button key={i.id} className={i.name}
            onClick={() => changeMode(i.id)}>
            <i.iconName size={25} />
        </button>
    )


    return (
        <div className="home">
            <Nav />



            <main >
                <div className="mode-container">
                    {
                        daynNight
                    }
                </div>
                <header className="intro">
                    <h1 className='intro-h1 animate__animated animate__zoomInDown'> Welcome, I am  David  <span className='last'>Opoku </span>
                    </h1>
                </header>

                <p className="intro-pg">
                    A Front-End web Developer/Designer currently based in the Washington DC-Baltimore Area let's come together &
                    <span className="text-link">  Make Something Great</span>
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

import { FaRocket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">

            <main >
                <header className="intro">
                    <h1 className='intro-h2 animate__animated animate__zoomInDown'>
                        Welcome, I am
                    </h1>
                    <h2 className="name">
                        <span className='first'>David </span>
                        <span className='last'>Opoku</span>
                    </h2>
                </header>

                <p className="intro-pg">
                    A Front-End web Developer/Designer currently based in the Washington DC-Baltimore Area let's come together &
                    <span className="text-link" datatype="">  Make Something Great</span>
                </p>


            </main>

            <span className="copyright"></span>
        </div>

    )
}

export default Home
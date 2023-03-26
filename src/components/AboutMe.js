
import { Link } from "react-router-dom"
function AboutMe() {
    return (
        <div className='aboutMe-container h-screen'>

            <section className='aboutMe-card card'>
                <header >
                    <h2>
                        <span className='header'>
                            AboutMe
                        </span>
                    </h2>
                </header>
                <article className='AboutMe-content'>
                    <p>
                        Hello My name is David Opoku ,

                        <Link to="/Projects">
                            <span className="aboutMe-projects-link">
                                I Design and Develop Websites </span>
                        </Link>
                        for those who want their vision or story expressed through a digital canvas.
                        I want to capture your ideas and create something that can perfectly encapsulate you and your brand,
                        I am motivated by the creative process and the challenges that are presented by innovation.
                        let's come together & Make Something Great.
                    </p>
                </article>
            </section>
        </div>
    )
}


export default AboutMe
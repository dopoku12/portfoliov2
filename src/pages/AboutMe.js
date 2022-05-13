import Nav from "../components/Nav"

function AboutMe() {
    return (
        <div className='card-container'>
            <Nav />
            <section className='card'>
                <header >
                    <h2 className='header'>AboutMe</h2>
                </header>
                <article className='AboutMe-content'>
                    <p>
                        Hello My name is David Opoku first of
                        thank you for taking the time to view my portfolio
                        I am Web Developer

                    </p>
                </article>
            </section>
        </div>
    )
}


export default AboutMe
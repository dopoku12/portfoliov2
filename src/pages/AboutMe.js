import Nav from "../components/Nav"

function AboutMe() {
    return (
        <div className='card-container'>
            <Nav />
            <section className='card'>
                <header id='header'>
                    <h2>AboutMe</h2>
                </header>
                <article className='AboutMe-content'>
                    <p>
                        Hello My name is David Opoku
                        thank you for taking the time to view my portfolio

                    </p>
                </article>
            </section>
        </div>
    )
}


export default AboutMe
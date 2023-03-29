import Education from './Education';

function AboutMe({ FaAngleDown }) {
    return (
        <div id='aboutMe' className='box bg-white'>

            <section className=''>
                <header >
                    <h1>
                        AboutMe
                    </h1>
                </header>
                <article >
                    <p>
                        Hello My name is David Opoku ,
                        I Design and Develop Websites
                        for those who want their vision or story expressed through a digital canvas.
                        I want to capture your ideas and create something that can perfectly encapsulate you and your brand,
                        I am motivated by the creative process and the challenges that are presented by innovation.
                        let's come together & Make Something Great.
                    </p>
                </article>
                <header>
                    <h2>Education</h2>
                </header>
                <Education />

            </section>
        </div>
    )
}


export default AboutMe
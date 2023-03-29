import Education from './Education';
import Skills from './Skills'

function Resume({ FaAngleDown }) {
    return (
        <div className='box '>

            <article>
                <section className='grid place-items-center'>

                    <header>
                        <h2>Education</h2>
                    </header>
                    <Education />

                    <header>
                        <h2>Skills</h2>
                    </header>
                    <Skills />
                </section>

            </article>
        </div>
    );
}

export default Resume;

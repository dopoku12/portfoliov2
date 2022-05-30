import Education from '../components/Education';
import Skills from '../components/Skills'

function Resume() {
    return (
        <div className='card-container'>

            <section className='card'>
                <header >
                    <h2 > <span className='header'>My Resume</span></h2>
                </header>

                <ul>
                    <li>
                        David Opoku
                    </li>
                    <li>
                        +1 240-522-6634
                    </li>
                    <li>
                        davidopoku30@gmail.com
                    </li>

                    <li>
                        Riverdale, MD
                    </li>
                </ul>

                <article className='resume-content'>
                    <header className='sub-header'>
                        <h2>Education</h2>
                    </header>
                    <Education />

                    <header className='sub-header'>
                        <h2>Highlighted Skills</h2>
                    </header>
                    <Skills />

                </article>
            </section>
        </div>
    );
}

export default Resume;

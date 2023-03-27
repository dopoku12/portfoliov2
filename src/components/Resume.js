import Education from './Education';
import Skills from './Skills'

function Resume() {
    return (
        <div className='grid grid-cols-1 h-screen'>

            <section className='card'>
                <header >
                    <h2 >
                        My Resume
                    </h2>
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

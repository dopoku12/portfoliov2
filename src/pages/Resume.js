import ResumeIcons from '../components/ResumeIcons';
import Education from '../components/Education';
import Skills from '../components/Skills'
function Resume() {
    return (
        <section id='resume-id' className='card' >
            <header id='header'>
                <h2>David Opoku</h2>
            </header>

            <ul>
                <li>
                    Riverdale, MD 20737
                </li>
                <li>
                    davidopoku30@gmail.com
                </li>

                <li>
                    +1 240-522-6634
                </li>
            </ul>

            <article className='resume'>
                <header className='sub-header'>
                    <h2>Education</h2>
                </header>
                <Education />

                <header className='sub-header'>
                    <h2>Highlighted Skills</h2>
                </header>
                <Skills />

                <header className='sub-header'>
                    <h2>Tech</h2>
                </header>
                <ResumeIcons />

            </article>
        </section>
    );
}

export default Resume;

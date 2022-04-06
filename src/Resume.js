import ResumeIcons from './components/ResumeIcons';
import Education from './components/Education';
function Resume() {
    return (
        <section className='card'>
            <header><h2>David Opoku</h2> </header>
            <article className='resume'>
                <h2>Education</h2>
                <Education />
                <h2>Tech</h2>
                <ResumeIcons />
            </article>
        </section>
    );
}

export default Resume;

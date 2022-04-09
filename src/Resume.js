import ResumeIcons from './components/ResumeIcons';
import Education from './components/Education';
function Resume() {
    return (
        <section className='card'>
            <header id='header'>
                <h2>David Opoku</h2>
            </header>
            <article className='resume'>
                <header className='sub-header'>
                    <h2>Education</h2>
                </header>
                <Education />
                <header className='sub-header'>
                    <h2>Tech</h2>
                </header>
                <ResumeIcons />
            </article>
        </section>
    );
}

export default Resume;

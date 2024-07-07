import Skills from './Skills'
import AboutMe from '../pages/AboutMe';
function Resume() {
    return (
        <div id='resume' className='box grid bg-white dark:bg-slate-800 '>

            <article>
                <section className='grid place-items-center'>
                    <Skills />
                    <AboutMe />
                </section>
            </article>
        </div>
    );
}

export default Resume;

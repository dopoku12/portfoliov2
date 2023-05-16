import Skills from './Skills'
import AboutMe from './AboutMe';
function Resume() {
    return (
        <div id='resume' className='box grid bg-white dark:bg-slate-800 '>

            <article>
                <section className='grid place-items-center'>

                    <header className='text-2xl m-5'>
                        <h2>Skills</h2>
                    </header>
                    <Skills />
                </section>
                <AboutMe />
            </article>
        </div>
    );
}

export default Resume;

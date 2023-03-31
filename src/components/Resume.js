import Skills from './Skills'
function Resume({ FaAngleDown }) {
    return (
        <div id='resume' className='box bg-white dark:bg-slate-800 grid place-items-center'>

            <article>
                <section className='grid place-items-center'>

                    <header className='text-2xl m-5'>
                        <h2>Skills</h2>
                    </header>
                    <Skills />
                </section>
            </article>
            <button className=" ">
                <a href='#edu'>
                    <FaAngleDown color='orange' size={30} />
                </a>
            </button>
        </div>
    );
}

export default Resume;

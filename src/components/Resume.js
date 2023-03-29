
import Skills from './Skills'

function Resume({ FaAngleDown }) {
    return (
        <div id='resume' className='box bg-white  grid place-items-center'>

            <article>
                <section className='grid place-items-center'>

                    <header>
                        <h2>Skills</h2>
                    </header>
                    <Skills />
                </section>
            </article>
            <button className=" ">
                <a href='#aboutMe'>
                    <FaAngleDown color='orange' size={30} />
                </a>
            </button>
        </div>
    );
}

export default Resume;

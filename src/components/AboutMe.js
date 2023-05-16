import { FaAngleUp } from 'react-icons/fa';
import Education from './Education';

function AboutMe() {
    return (
        <div className='box grid place-items-center 
         dark:bg-slate-800'>

            <section className=''>
                <header className='text-2xl m-5'>
                    <h2>Education</h2>
                </header>
                <Education />
                <header className='text-2xl m-5'>
                    <h1>
                        AboutMe
                    </h1>
                </header>
                <article >
                    <p>
                        Hello My name is David Opoku ,
                        I Design and Develop Websites
                        for those who want their vision or story expressed through a digital canvas.
                        I want to capture your ideas and create something that can perfectly encapsulate you and your brand,
                        I am motivated by the creative process and the challenges that are presented by innovation.
                        let's come together & Make Something Great.
                    </p>
                </article>
            </section>
            <button className=" ">
                <a href='#projects'>
                    <FaAngleUp color='orange' size={30} />
                </a>

            </button>
            <footer className=" grid place-items-center ">
                David Opoku ©copyright 2021
            </footer>
        </div>
    )
}


export default AboutMe
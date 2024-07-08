import Skills from '../components/Skills'
import AboutMe from './AboutMe';
import { useOutletContext } from 'react-router-dom';
function Resume() {
       const context = useOutletContext();
console.log(context)
    return (
        <div id='resume' className='box grid bg-white dark:bg-slate-800 '>

            <article>
                <section className='grid place-items-center'>
                    <Skills skillIcons ={context}/>
                    <AboutMe />
                </section>
            </article>
        </div>
    );
}

export default Resume;

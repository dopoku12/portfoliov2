import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'




function Projects() {

    const [projectLi, setProjectLi] = useState([
        { id: 1, imgName: '/projects/pig-game.png', projectName: 'Dice' },
        { id: 2, imgName: '/projects/guess-game.png', projectName: 'Take A Guess' },
        { id: 3, imgName: '/projects/country-search.png', projectName: 'CountrySearch' },
    ].map(i => ({ ...i, status: false })
    ))

    return (
        <section id='projects' className='card'>
            <header id='header'>
                <h2>Projects</h2>
            </header>
            <article className="project-content" >
                <ul>{
                    projectLi.map
                        (i =>
                            <li key={i.id}>
                                <header className='sub-header'>
                                    {i.projectName}
                                </header>
                                <img src={i.imgName} alt="project-img" className='imgs' />
                                <p>Description <FiChevronDown /></p>
                            </li>
                        )}
                </ul>
            </article>
        </section>
    )
}

export default Projects
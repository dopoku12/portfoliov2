import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

function Projects() {
    const [projectLi, setProjectLi] = useState([
        { id: 0, imgName: '/projects/pig-game.png', projectName: 'Dice', description: 'f' },
        { id: 1, imgName: '/projects/guess-game.png', projectName: 'Take A Guess', description: 'u' },
        { id: 2, imgName: '/projects/country-search.png', projectName: 'CountrySearch', description: '2' },
    ].map(i => ({ ...i, status: false })
    ))

    function clickChange(id) {
        const change = projectLi.map(i => i.id === id ? { ...i, status: true } : i)
        setProjectLi(change)
    }

    function clickReturn(id) {
        const reTurn = projectLi.map(i => i.id === id ? { ...i, status: false } : i)
        setProjectLi(reTurn)
    }

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
                                <img src={i.imgName} alt="project-img" className='imgs' />
                                <div className='img-overlay'>
                                    <header >
                                        {i.projectName}
                                    </header>
                                    {
                                        i.status === false ?
                                            <p> Description <FiChevronDown
                                                onClick={() => clickChange(i.id)} />
                                            </p> :
                                            <p>
                                                {i.description}
                                                <FiChevronUp
                                                    onClick={() => clickReturn(i.id)} />
                                            </p>
                                    }
                                </div>
                            </li>
                        )}
                </ul>
            </article>
        </section >
    )
}

export default Projects
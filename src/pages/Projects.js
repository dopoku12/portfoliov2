import { useState } from 'react'
import { FiChevronDown, FiChevronUp, FaCode } from 'react-icons/fi'
import Nav from "../components/Nav"

function Projects() {
    const [projectLi, setProjectLi] = useState([
        { id: 0, imgName: '/projects/pig-game.png', link: 'https://dopoku12.github.io/Dice-Game/', code: 'https://github.com/dopoku12/Dice-Game', projectName: 'Dice', description: 'f' },
        { id: 1, imgName: '/projects/guess-game.png', link: 'https://dopoku12.github.io/take-a-guess/', code: 'https://github.com/dopoku12/take-a-guess', projectName: 'Take A Guess', description: 'u' },
        { id: 2, imgName: '/projects/country-search.png', link: ' https://dopoku12.github.io/country-search/', code: 'https://github.com/dopoku12/country-search', projectName: 'CountrySearch', description: '2' },
    ].map(i => ({ ...i, status: false })
    ))

    function mouseOver(id) {
        const change = projectLi.map(i => i.id === id ? { ...i, status: true } : i)
        setProjectLi(change)
    }

    function mouseOut(id) {
        const reTurn = projectLi.map(i => i.id === id ? { ...i, status: false } : i)
        setProjectLi(reTurn)
    }

    return (
        <div className='card-container' >
            <Nav />

            <section className='card' >
                <header id='header'>
                    <h2>Projects</h2>
                </header>
                <article className="project-content" >
                    <ul>{
                        projectLi.map
                            (i =>
                                <li key={i.id} >
                                    <a href={i.link} >
                                    </a>
                                    <div className='img-container' >
                                        <img src={i.imgName} alt="project-img" className='imgs'
                                        // onMouseOver={() => mouseOver(i.id)}
                                        // onMouseOut={() => mouseOut(i.id)}
                                        />
                                        {
                                            // i.status &&
                                            <div className='img-overlay'>
                                                <header >
                                                    {i.projectName}
                                                </header>
                                                <div>
                                                    <p>
                                                        Description:
                                                    </p>
                                                </div>


                                            </div>
                                        }
                                    </div>
                                </li>
                            )}
                    </ul>
                </article>
            </section >
        </div>
    )
}

export default Projects
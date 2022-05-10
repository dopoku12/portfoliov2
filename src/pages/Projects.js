import { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import Nav from "../components/Nav"

function Projects() {
    const [projectLi, setProjectLi] = useState([
        {
            id: 0,
            imgName: '/projects/pig-game.png',
            link: 'https://dopoku12.github.io/Dice-Game/',
            code: 'https://github.com/dopoku12/Dice-Game',
            projectName: 'Dice',
            description: 'tis'
        },

        {
            id: 1,
            imgName: '/projects/guess-game.png',
            link: 'https://dopoku12.github.io/take-a-guess/',
            code: 'https://github.com/dopoku12/take-a-guess',
            projectName: 'Take A Guess',
            description: 'but'
        },

        {
            id: 2,
            imgName: '/projects/country-search.png',
            link: ' https://dopoku12.github.io/country-search/',
            code: 'https://github.com/dopoku12/country-search',
            projectName: 'Country-Search',
            description: 'A scratch'
        },
    ].map(i => ({ ...i, iconName: FaCode, status: false })

    ))



    const modalBox = projectLi.map(i => {

        return (
            i.status &&
            <div key={i.id} className='modal-backdrop' onClick={exitModal} >
                <div className='modalBox'>
                    <button className='close' onClick={exitModal}>
                        X
                    </button>
                    <p className='description'>
                        {i.description}
                    </p>
                </div>
            </div>
        )
    }

    )

    function displayModal(id) {
        const change = projectLi.map(i => i.id === id ? { ...i, status: true } : i)
        console.log('display:', projectLi[1].status);
        setProjectLi(change)
    }

    function exitModal() {
        const reTurn = projectLi.map(i => i.id && { ...i, status: false })
        setProjectLi(reTurn)
        console.log('exit:', projectLi[1].status);
    }

    const projects = projectLi.map
        (i =>
            <li key={i.id} >
                <div className='projects-card'>
                    <div className='img-container' >
                        <a href={i.link}>
                            <img src={i.imgName}
                                id={i.projectName}
                                alt="project-img"
                                className='imgs' />

                            <div className='img-overlay'>
                                <header >
                                    {i.projectName}
                                </header>
                            </div>
                        </a>
                    </div>

                    <button className='project-btn'
                        onClick={() => displayModal(i.id)} >
                        View Description
                    </button>
                    <button className='project-btn'>
                        <a className='code-link' href={i.code}>
                            <i.iconName size={20} color={'white'} />
                            View Code
                        </a>
                    </button>
                </div>
            </li>
        )

    return (
        <div className='project-body'>

            <Nav />
            <section className="project-content">
                <article >
                    <header>
                        <h1>
                            Projects
                        </h1>
                    </header>
                    <ul >
                        {projects}
                    </ul>
                </article>
            </section >
            {
                modalBox
            }

        </div>
    )
}

export default Projects
import { FaCode } from 'react-icons/fa'
import { Link } from "react-router-dom";
function Projects({ FaAngleDown }) {
    const projectLi = [

        {
            id: 0,
            imgName: '/projects/country-wiz.png',
            link: 'https://country-wiz.netlify.app/',
            code: 'https://github.com/dopoku12/countryWiz',
            projectName: 'country-wiz',
            description: ``,
            summary: `This project displays country data from an api.
             when you first open the site the users lat&long is collected using the built in javascript geolocation api,
             then using closures the user location is pulled by using the tom toms reverse gelocation api,
             then with react custom hooks the name of the country is then passed into another function which displays information about the users country
             this all happens upon first render using the react useEffect hook.
             In case the user dose not provide a lat&long they can always enter the name of a country in the search bar, 
             the value is then debounced to avoid constant rerendering after every key down then the value is filtered to 10 options the user can pick from `
        },
        {
            id: 1,
            imgName: '/projects/pig-game.png',
            link: 'https://dopoku12.github.io/Dice-Game/',
            code: 'https://github.com/dopoku12/Dice-Game',
            projectName: 'Dice',
            description: ``,
            summary: `Welcome to Dice, The goal of this Dice Game is to be the first player to hit 100!! In this game user roll's a Dice to accrue points. If the die lands on 1, the points they accumulated are set to 0. The user is able to hold if they feel their luck may be running out. At this point, player 2 takes a turn .`
        },

        {
            id: 2,
            imgName: '/projects/guess-game.png',
            link: 'https://dopoku12.github.io/take-a-guess/',
            code: 'https://github.com/dopoku12/take-a-guess',
            projectName: 'Take A Guess',
            description: ``,
            summary: 'In this Game you will have to guess the right number(between 1-20) to win ,if you guess wrong you lose points and a hint will be given if your score hits zero you lose.  '
        },

        {
            id: 3,
            imgName: '/projects/country-search.png',
            link: ' https://dopoku12.github.io/country-search/',
            code: 'https://github.com/dopoku12/country-search',
            projectName: 'Country-Search',
            description: ``,
            summary: 'A country search App'
        },
        {
            id: 5,
            imgName: '/projects/weather-wiz.png',
            link: 'https://weather-wiz.netlify.app/',
            code: 'https://github.com/dopoku12/weather',
            projectName: 'weather-wiz',
            description: ``,
            summary: 'Check the weather in your city as well as other cities'
        }
    ].map(i => ({ ...i, iconName: FaCode }));

    const projects = projectLi.map
        (i =>
            <li key={i.id} className=' items-center 
            bg-gray-50 rounded-lg shadow 
            sm:flex dark:bg-gray-800 dark:border-gray-700'  >
                <div className=' max-w-m rounded 
            grid grid-cols-2
                overflow-hidden'>

                    <div className='img-container' >
                        <a href={i.link}>
                            <img src={i.imgName} alt="project-img" />
                            <div className='img-overlay'>
                                <header >
                                    {i.projectName}
                                </header>
                            </div>
                        </a>
                    </div>
                    <p className='grid grid-row'>
                        {i.description}

                        view More...
                        <button>
                            <a className='code-link' href={i.code}>

                                View Code
                            </a>
                        </button>
                    </p>
                </div>
            </li >
        )

    return (
        <div className='box '>
            <section >
                <article  >
                    <header >
                        <h1 className='text-2xl m-5' >
                            Projects
                        </h1>
                    </header>
                    <ul className=' grid grid-cols-2 gap-4'>
                        {projects}
                    </ul>
                    <button className=" ">
                        <a href='#content'>
                            <FaAngleDown color='orange' size={30} />
                        </a>
                    </button>
                </article>
            </section >
        </div>
    )
}

export default Projects
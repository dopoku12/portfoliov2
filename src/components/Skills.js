import {
    SiBootstrap, SiReact, SiSass, SiGithub,
    SiTailwindcss, SiNodedotjs, SiJirasoftware,
    SiExpress, SiMongodb, SiJest, SiVite,
    SiMaterialui, SiChakraui, SiMicrosoftazure, SiJquery
} from 'react-icons/si'

function Skills() {
    const iconSkills =
        [{
            name: 'Mongodb',
            iconName: SiMongodb,
            fill: '#4E9B47',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'Express.js',
            iconName: SiExpress,
            fill: '#4E9B47 ',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'React.js',
            iconName: SiReact,
            fill: '#1de6f8',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'Node.js',
            iconName: SiNodedotjs,
            fill: '#4E9B47 ',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'Jest.js',
            iconName: SiJest,
            fill: 'purple',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'Vite.js',
            iconName: SiVite,
            fill: 'orange',
            stroke: 'white',
            strokeW: '1'
        },
        {
            name: 'Chakra ui',
            iconName: SiChakraui,
            fill: '#78cac3',
            stroke: '',
            strokeW: '0'
        },

        {
            name: 'Material ui',
            iconName: SiMaterialui,
            fill: '#3399FF',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'jQuery',
            iconName: SiJquery,
            fill: "#3399FF",
            stroke: '',
            strokeW: '0'
        },

        // {
        //     name: 'MySQL',
        //     iconName: SiMysql,
        //     fill: 'aqua',
        //     stroke: '',
        //     strokeW: '0'
        // },

        // {
        //     name: 'PHP',
        //     iconName: SiPhp,
        //     fill: '#cc6699',
        //     stroke: '',
        //     strokeW: '0'
        // },

        {
            name: 'Sass',
            iconName: SiSass,
            fill: '#cc6699',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'Bootstrap',
            iconName: SiBootstrap,
            fill: '#563d7c',
            stroke: '',
            strokeW: '0'
        },

        {
            name: 'Tailwind ',
            iconName: SiTailwindcss,
            fill: '#78cac3',
            stroke: '',
            strokeW: '0'
        },

        {
            name: 'Azure',
            iconName: SiMicrosoftazure,
            fill: '#008AD7',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'Jira ',
            iconName: SiJirasoftware,
            fill: '#0052CC',
            stroke: '',
            strokeW: '0'
        },
        {
            name: 'Github',
            iconName: SiGithub,
        },
        ]

    return (
        <>
            <header className='text-2xl m-5'>
                <h2>Skills</h2>
            </header>
            <ul className='grid grid-cols-4  m-0 gap-10 place-items-center'>
                {
                    iconSkills.map((obj, i) => (
                        <li key={i}>
                            {obj.name}
                            <obj.iconName size={30} fill={obj.fill} stroke={obj.stroke} stroke-width={obj.strokeW} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Skills
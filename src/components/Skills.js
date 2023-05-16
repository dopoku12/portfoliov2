import {
    SiBootstrap, SiReact, SiPhp, SiSass, SiGithub,
    SiTailwindcss, SiNodedotjs, SiJirasoftware,
    SiExpress, SiMongodb, SiMysql,
    SiMaterialui, SiChakraui,
} from 'react-icons/si'

function Skills() {
    let num = 0
    const iconSkills =
        [{
            name: 'Mongodb',
            iconName: SiMongodb,
            color: '4E9B47 ',
        },
        {
            name: 'Express.js',
            iconName: SiExpress,
            color: '4E9B47 ',
        },
        {
            name: 'React.js',
            iconName: SiReact,
            color: '1de6f8',
        },
        {
            name: 'Node.js',
            iconName: SiNodedotjs,
            color: '4E9B47 ',
        },
        {
            name: 'MySQL',
            iconName: SiMysql,
            color: 'skyblue',
        },

        {
            name: 'PHP',
            iconName: SiPhp,
            color: 'cc6699',
        },
        {
            name: 'Chakra ui',
            iconName: SiChakraui,
            color: '78cac3',
        },

        {
            name: 'Material ui',
            iconName: SiMaterialui,
            color: 'blue',
        },




        {
            name: 'Bootstrap',
            iconName: SiBootstrap,
            color: '563d7c',
        },

        {
            name: 'Sass',
            iconName: SiSass,
            color: 'cc6699',
        },

        {
            name: 'Tailwind ',
            iconName: SiTailwindcss,
            color: '78cac3',
        },


        {
            name: 'Jira ',
            iconName: SiJirasoftware,
            color: 'blue',
        },
        {
            name: 'Github',
            iconName: SiGithub,
        },
        ].map(i => ({ ...i, id: num++ }))


    const skillsLi = [
        { name: 'Agile ' },
        { name: '' },
        { name: '' },
        { name: ' ArcGIS' },
        { name: 'Unit Testing' },

        { name: 'Seo' },
        { name: '' },
    ].map(i => ({ ...i, id: num++ }))

    return (
        <>
            <header className='text-2xl m-5'>
                <h2>Skills</h2>
            </header>
            <ul className='grid grid-cols-4  m-0 gap-10 place-items-center '>

                {
                    iconSkills.map(i => (
                        <li key={i.id}>
                            {i.name}
                            <i.iconName size={30} color={i.color} />
                        </li>
                    ))
                }
                {
                    skillsLi.map(i => <li key={i.id}>
                        {i.name}</li>)
                }
            </ul>
        </>
    )
}

export default Skills
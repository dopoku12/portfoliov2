import {
    SiBootstrap, SiReact, SiPhp, SiSass, SiGithub,
    SiTailwindcss, SiNodedotjs, SiJirasoftware,
    SiExpress, SiMongodb, SiMysql,
    SiMaterialui, SiGit, SiChakraui,
} from 'react-icons/si'

function Skills() {
    let num = 0
    const iconSkills =
        [{
            name: 'PHP',
            iconName: SiPhp,
            color: 'cc6699',
        },
        {
            name: 'MySQL',
            iconName: SiMysql,
            color: 'skyblue',
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
            name: 'Express.js',
            iconName: SiExpress,
            color: '4E9B47 ',
        },
        {
            name: 'Mongodb',
            iconName: SiMongodb,
            color: '4E9B47 ',
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
            name: 'Github',
            iconName: SiGithub,
        },

        {
            name: 'Jira ',
            iconName: SiJirasoftware,
            color: 'blue',
        }].map(i => ({ ...i, id: num++ }))


    const skillsLi = [
        { name: 'Agile ' },
        { name: 'Kanban' },
        { name: 'Scrum' },
        { name: ' ArcGIS' },
        { name: 'Unit Testing' },

        { name: 'Seo' },
        { name: '' },
    ].map(i => ({ ...i, id: num++ }))

    return (
        <ul className='box grid grid-cols-4  m-0 gap-0 place-items-center '>
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
    )
}

export default Skills
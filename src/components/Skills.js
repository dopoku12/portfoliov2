import {
    SiBootstrap, SiReact, SiSass, SiGithub, SiTailwindcss, SiNodedotjs,
    SiJirasoftware
} from 'react-icons/si'

function Skills() {
    const iconSkills =
        [{
            id: 1,
            name: 'React.js',
            iconName: SiReact,
            color: '1de6f8',
        },
        {
            id: 2,
            name: 'Node.js',
            iconName: SiNodedotjs,
            color: '4E9B47 ',
        },
        {
            id: 3,
            name: 'Bootstrap',
            iconName: SiBootstrap,
            color: '563d7c',
        },
        {
            id: 4,
            name: 'Sass',
            iconName: SiSass,
            color: 'cc6699',
        },
        {
            id: 5,
            name: 'Github',
            iconName: SiGithub,
            color: '424242',
        },
        {
            id: 6,
            name: 'Tailwind ',
            iconName: SiTailwindcss,
            color: '78cac3',
        },

        {
            id: 7,
            name: 'Jira ',
            iconName: SiJirasoftware,
            color: 'blue',
        }]


    const skillsLi = [
        { id: 7, name: 'Agile Methodology' },
        { id: 8, name: ' Adaptability' },
        { id: 9, name: 'Unit Testing' },
        { id: 10, name: 'Object Oriented Programming/OOP' },
        { id: 11, name: 'Responsive Web Design' },
        { id: 12, name: 'Seo' },
        { id: 13, name: 'Color Theory' },
    ]

    return (
        <ul className='grid place-items-center gap-4 '>{
            iconSkills.map(i => (
                <li key={i.id}>
                    {i.name}
                    <i.iconName size={20} color={i.color} />
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
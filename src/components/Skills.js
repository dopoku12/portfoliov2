import {
    SiBootstrap, SiReact, SiSass, SiGithub,
    SiTailwindcss, SiNodedotjs, SiJirasoftware,
    SiMaterialui,
} from 'react-icons/si'

function Skills() {
    let num = 0
    const iconSkills =
        [{

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

            name: 'Material ui',
            iconName: SiMaterialui,
            color: 'blue',
        },
        {

            name: 'Github',
            iconName: SiGithub,
            color: '424242',
        },

        {

            name: 'Jira ',
            iconName: SiJirasoftware,
            color: 'blue',
        }].map(i => ({ ...i, id: num++ }))


    const skillsLi = [
        { name: 'Agile Methodology' },
        { name: ' ArcGIS' },
        { name: 'Unit Testing' },
        { name: 'Object Oriented Programming/OOP' },
        { name: 'Functional Programming' },
        { name: 'Responsive Web Design' },
        { name: 'Seo' },
        { name: 'Color Theory' },
    ].map(i => ({ ...i, id: num++ }))

    return (
        <ul className='grid grid-cols-4 place-items-center gap-4 '>{
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
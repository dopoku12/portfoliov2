import { SiBootstrap, SiReact, SiJavascript, SiSass, SiGithub, SiTailwindcss, SiLeaflet, SiNodedotjs } from 'react-icons/si'

const siResumeIcons = [
    { id: 1, name: 'JavaScript', iconName: SiJavascript, color: 'e8c012' },
    { id: 2, name: 'React.js', iconName: SiReact, color: '1de6f8' },
    { id: 3, name: 'Node.js', iconName: SiNodedotjs, color: '4E9B47 ' },
    { id: 4, name: 'Bootstrap', iconName: SiBootstrap, color: '563d7c' },
    { id: 5, name: 'Sass', iconName: SiSass, color: 'cc6699' },
    { id: 6, name: 'Github', iconName: SiGithub, color: '424242' },
    { id: 7, name: 'Tailwind ', iconName: SiTailwindcss, color: '78cac3' },
    { id: 8, name: 'Leaflet', iconName: SiLeaflet, color: '4E9B47 ' }
]

function ResumeIcons() {
    return (
        <ul className='resume-icon-ul' >
            {

                siResumeIcons.map((items) => {
                    return (
                        <li key={items.id} className='resume-icon'>
                            <items.iconName color={items.color} size={25} />
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default ResumeIcons
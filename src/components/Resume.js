import { SiBootstrap, SiReact, SiJavascript, SiSass, SiGithub, SiTailwindcss, SiLeaflet } from 'react-icons/si'
function Resume() {

    const siResumeIcons = [
        { id: 1, name: 'Bootstrap', iconName: SiBootstrap, color: '563d7c' },
        { id: 2, name: 'React.js', iconName: SiReact, color: '1de6f8' },
        { id: 3, name: 'JavaScript', iconName: SiJavascript, color: 'e8c012' },
        { id: 4, name: 'Sass', iconName: SiSass, color: 'cc6699' },
        { id: 5, name: 'Github', iconName: SiGithub, color: '424242' },
        { id: 6, name: 'Tailwind ', iconName: SiTailwindcss, color: '78cac3' },
        { id: 7, name: 'Leaflet', iconName: SiLeaflet, color: '4E9B47 ' }
    ]

    return (
        <main>
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
        </main>
    );
}

export default Resume;

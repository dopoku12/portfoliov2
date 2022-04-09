import { SiBootstrap, SiReact, SiJavascript, SiSass, SiGithub, SiTailwindcss, SiLeaflet, SiNodedotjs } from 'react-icons/si'
import { useState } from 'react'

function ResumeIcons() {

    const [iconLi, setIconLi] = useState([
        { id: 1, name: 'JavaScript', iconName: SiJavascript, color: 'e8c012', },
        { id: 2, name: 'React.js', iconName: SiReact, color: '1de6f8', },
        { id: 3, name: 'Node.js', iconName: SiNodedotjs, color: '4E9B47 ', },
        { id: 4, name: 'Bootstrap', iconName: SiBootstrap, color: '563d7c', },
        { id: 5, name: 'Sass', iconName: SiSass, color: 'cc6699', },
        { id: 6, name: 'Github', iconName: SiGithub, color: '424242', },
        { id: 7, name: 'Tailwind ', iconName: SiTailwindcss, color: '78cac3', },
        { id: 8, name: 'Leaflet', iconName: SiLeaflet, color: '4E9B47 ', }
    ].map(i => ({ ...i, status: false }))
    )

    //change state of status onMouseOver
    function hoverOver(id) {
        const statusChange = iconLi.map(i => i.id === id ? { ...i, status: true } : i)
        setIconLi(statusChange)
    };

    function hoverOut(id) {
        const statusChange = iconLi.map(i => i.id === id ? { ...i, status: false } : i)
        setIconLi(statusChange)
    };

    return (
        <div>
            <ul className='resume-icon-ul' >
                {
                    iconLi.map(i => (
                        <li key={i.id}>
                            <i.iconName color={i.color} size={25} onMouseOver={() => hoverOver(i.id)} onMouseOutCapture={() => hoverOut(i.id)} />
                            {
                                //if i.status===true display i.name
                                i.status &&
                                <div className='resume-icon-name'>
                                    {i.name}
                                </div>
                            }
                        </li>)
                    )
                }
            </ul>
        </div>
    )
}

export default ResumeIcons
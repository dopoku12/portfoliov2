import { SiBootstrap, SiReact, SiJavascript, SiSass, SiGithub, SiTailwindcss, SiLeaflet, SiNodedotjs } from 'react-icons/si'
import { useState } from 'react'

function ResumeIcons() {
    //     const [handler, setHandler] = useState(false)

    //     function hoverOver() {
    //         if (handler === false)
    //             setHandler(true)
    //     };

    //     function hoverOut() {
    //         if (handler)
    //             setHandler(false)
    //     };

    //     const icons = [
    //         { id: 1, name: 'JavaScript', iconName: SiJavascript, color: 'e8c012', },
    //         { id: 2, name: 'React.js', iconName: SiReact, color: '1de6f8', },
    //         { id: 3, name: 'Node.js', iconName: SiNodedotjs, color: '4E9B47 ', },
    //         { id: 4, name: 'Bootstrap', iconName: SiBootstrap, color: '563d7c', },
    //         { id: 5, name: 'Sass', iconName: SiSass, color: 'cc6699', },
    //         { id: 6, name: 'Github', iconName: SiGithub, color: '424242', },
    //         { id: 7, name: 'Tailwind ', iconName: SiTailwindcss, color: '78cac3', },
    //         { id: 8, name: 'Leaflet', iconName: SiLeaflet, color: '4E9B47 ', }
    //     ].map(i => ({ ...i, status: handler }))

    //     icons.map(i => (console.log('boolean:', i.status)))



    //     const mappedIcons = icons.map(
    //         i => {
    //             return (
    //                 <li key={i.id}>
    //                     <i.iconName color={i.color} onMouseOver={hoverOver} onMouseOut={hoverOut} size={25} />
    //                 </li>
    //             )
    //         });

    const [iconLi, setIconLi] = useState([
        { id: 1, name: 'JavaScript', iconName: SiJavascript, color: 'e8c012', },
        { id: 2, name: 'React.js', iconName: SiReact, color: '1de6f8', },
        { id: 3, name: 'Node.js', iconName: SiNodedotjs, color: '4E9B47 ', },
        { id: 4, name: 'Bootstrap', iconName: SiBootstrap, color: '563d7c', },
        { id: 5, name: 'Sass', iconName: SiSass, color: 'cc6699', },
        { id: 6, name: 'Github', iconName: SiGithub, color: '424242', },
        { id: 7, name: 'Tailwind ', iconName: SiTailwindcss, color: '78cac3', },
        { id: 8, name: 'Leaflet', iconName: SiLeaflet, color: '4E9B47 ', }].map(i => ({ ...i, status: false }))

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
                            <i.iconName color={i.color} size={25} onMouseOver={() => hoverOver(i.id)} onMouseOut={() => hoverOut(i.id)} />
                            {
                                //if i.status===true display i.name
                                i.status &&
                                <li className='resume-icon-name'>
                                    {i.name}
                                </li>
                            }
                        </li>)
                    )
                }

            </ul>

            {
                // handler &&
                // icons.map(i => (<div key={i.id}> <p className='icon-names'>{i.name}</p></div>))
            }
        </div>
    )
}

export default ResumeIcons
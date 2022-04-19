import { useState } from 'react';
import { FaInfo, FaGithub, FaRegEnvelope, FaLinkedin, FaRegIdBadge } from 'react-icons/fa';

function Nav() {
    const [faIcons, setFaIcons] = useState([
        ///add behavior for click or hover
        { id: 0, name: 'Resume', iconName: FaRegIdBadge, },
        { id: 1, name: 'Linkedin', iconName: FaLinkedin, },
        { id: 2, name: 'Github', iconName: FaGithub, },
        { id: 3, name: 'Email', iconName: FaRegEnvelope, },
        { id: 4, name: 'AboutMe', iconName: FaInfo, }
    ]
        // .map(i => ({ ...i, status: false })
        // )
    )

    function clickEvent(id) {
        const change = faIcons.map(i => i.id === id ? { ...i, status: true } :
            { ...i, status: false }
        )
        setFaIcons(change)
        console.log(faIcons[0].status);
    }
    faIcons.map(i => console.log(Object.values(i)))



    const navIcons = faIcons.map((i) => {
        return (
            <li key={i.id} >
                <button className={i.name}>
                    <p>
                        {i.status && i.name}
                        <i.iconName
                            className='nav-icons'
                            onMouseOver={() => clickEvent(i.id)}
                            onClick={() => clickEvent(i.id)}
                            size={20} />
                    </p>
                </button>

            </li >
        )
    })





    return (
        <aside>
            <nav>
                <ul className='nav-ul'>
                    {
                        navIcons
                    }
                </ul>
            </nav>
        </aside>
    );
}

export default Nav
import { useState } from 'react';
import { FaInfo, FaGithub, FaRegEnvelope, FaLinkedin, FaRegIdBadge } from 'react-icons/fa';

function Nav() {
    const [faIcons, setFaIcons] = useState([
        ///add behavior for click or hover
        { id: 0, name: 'resume', iconName: FaRegIdBadge, color: 'blacK', btnColor: '' },
        { id: 1, name: 'Linkedin', iconName: FaLinkedin, color: '7ecdfa', btnColor: '0077b5' },
        { id: 2, name: 'Github', iconName: FaGithub, color: '424242', btnColor: '000000' },
        { id: 3, name: 'Gmail', iconName: FaRegEnvelope, color: '82AFAA', btnColor: '82AFAA' },
        { id: 4, name: 'aboutMe', iconName: FaInfo, color: '#7ecdfa', btnColor: '' }
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
                <button background-color={i.btnColor}>
                    <p>
                        {i.status && i.name}
                        <i.iconName
                            className='nav-icons'
                            onMouseOver={() => clickEvent(i.id)}
                            onClick={() => clickEvent(i.id)}
                            color={i.color}
                            size={20} />
                    </p>
                </button>

            </li>
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
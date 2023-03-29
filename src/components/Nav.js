import { useState } from "react";

const Nav = ({ faIcons }) => {
    const [theme, setTheme] = useState('light')
    function themeHandler() {
        if (theme !== 'dark')
            document.documentElement.className = theme
        return setTheme('light')
    }
    return (
        <nav>
            <ul className="grid grid-cols-5">
                {faIcons.map(i => {
                    console.log(i);
                    return (
                        i.id < 4 ?
                            <li key={i.id} >
                                <a href={i.pathName}>
                                    <p >
                                        {i.name}
                                        <i.iconName size={30} color={i.color} />

                                    </p>
                                </a>
                            </li>
                            :
                            <li key={i.id} className="list-none">
                                <button>
                                    {i.name}
                                    <i.iconName size={30} color={i.color} />
                                </button>
                            </li>
                    )
                })
                }
            </ul>
        </nav>
    )
}

export default Nav;
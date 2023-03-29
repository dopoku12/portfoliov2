import { useState, useEffect } from "react";


const Nav = ({ faIcons, FaSun, FaMoon }) => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        theme === 'dark' ?
            document.documentElement.classList.add('dark')
            :
            document.documentElement.classList.remove('dark')

    }, [theme])

    function themeHandler() {
        setTheme(theme === 'dark' ? 'light' : 'dark')

    }
    return (
        <nav className="dark:bg-slate-800">
            <ul className="grid  grid-cols-5">
                {faIcons.map(i => {
                    console.log(i);
                    return (
                        <li key={i.id} >
                            <a href={i.pathName}>
                                <p >
                                    {i.name}
                                    <i.iconName size={30} color={i.color} />

                                </p>
                            </a>
                        </li>
                    )
                })
                }
                <li className="">
                    <button onClick={themeHandler}>

                        {
                            theme === 'dark' ?
                                <p className="">
                                    Light Mode
                                    <FaSun size={30} />
                                </p>
                                :
                                <p >
                                    Dark Mode
                                    <FaMoon size={30} />
                                </p>
                        }
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
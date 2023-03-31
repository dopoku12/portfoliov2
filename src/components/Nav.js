import { useState, useEffect } from "react";


const Nav = ({ FaSun, FaMoon }) => {
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
                <li className="">
                    <button onClick={themeHandler}>

                        {
                            theme === 'dark' ?
                                <FaSun size={30} />
                                :
                                <FaMoon size={30} />
                        }
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
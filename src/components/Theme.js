import { useState, useEffect } from "react";


const Theme = ({ TiAdjustContrast }) => {
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
            <ul className="grid grid-cols-5">
                <li>
                    <button onClick={themeHandler}>
                        <TiAdjustContrast size={35} />
                    </button>
                </li>
            </ul>
    )
}

export default Theme;
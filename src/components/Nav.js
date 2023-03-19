import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ faIcons, FaAngleDown }) => {
    console.log(faIcons);

    const [display, setDisplay] = useState('dark')
    return (
        <nav color="black">
            <ul className="flex flex-row 
           
            justify-between
            align-items">
                {
                    faIcons.map(i => {
                        console.log(i);
                        return (
                            i.id < 4 ?
                                <li className="list-none" key={i.id} >
                                    <a href={i.pathName}>
                                        <p >
                                            {i.name}
                                            <i.iconName size={30} color={i.color} />

                                        </p>
                                    </a>

                                </li>
                                :
                                <li className="list-none">
                                    <p >
                                        {i.name}
                                        <i.iconName size={30} color={i.color} />

                                    </p>
                                </li>
                        )

                    })
                }
            </ul>

            <Link to="/Projects">
                <footer className="projects-link-container">
                    <h1 className="projects-link">
                        <FaAngleDown />
                    </h1>
                </footer>
            </Link>

        </nav>
    )
}

export default Nav;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Projects from "./Projects";
const Nav = ({ faIcons, FaAngleDown, FaAngleUp }) => {
    console.log(faIcons);

    const [display, setDisplay] = useState('dark')
    const [angle, setAngle] = useState(true)
    function angleHandle() {
        setAngle(false)
    }
    return (
        <nav>
            <ul>
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
                                <p >
                                    {i.name}
                                    <i.iconName size={30} color={i.color} />
                                </p>
                            </li>
                    )
                })
                }
            </ul>
            {

                // <Link to="/Projects" onClick={() => angleHandle}>
                // </Link>
            }
            <footer className="m-12">
                <Popover>
                    <Popover.Button>
                        <FaAngleDown color='orange' size={30} />
                    </Popover.Button>

                    <Popover.Panel static>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Projects />
                        </Transition>
                    </Popover.Panel>

                </Popover>
            </footer>

        </nav>
    )
}

export default Nav;
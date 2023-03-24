import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Projects from "./Projects";
import Resume from "./Resume"
import AboutMe from "./AboutMe"
const Nav = ({ faIcons, FaAngleDown, }) => {
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

            <Popover className="pop m-12">
                <Popover.Button className='text-align'>
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

                        <Resume />

                        <AboutMe />
                    </Transition>
                </Popover.Panel>

            </Popover>


        </nav>
    )
}

export default Nav;
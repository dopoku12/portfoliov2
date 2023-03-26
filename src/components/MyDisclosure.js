import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import Projects from "./Projects";
import Resume from "./Resume"
import AboutMe from "./AboutMe"
const MyDisclosure = ({ FaAngleDown }) => {
    return (<Disclosure >
        <div className=" m-12 flex flex-row justify-center">
            <Disclosure.Button className=''>
                <FaAngleDown color='orange' size={30} />
            </Disclosure.Button>
        </div>

        <Disclosure.Panel static>

            <Transition
                enter="transition duration-500 ease-out"
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
        </Disclosure.Panel>

    </Disclosure>
    );
}

export default MyDisclosure;
import {Link} from "react-router-dom";
function Home({ FaCode, FaAngleDown, faIcons }) {
    return (

        <header className='box  bg-white dark:bg-slate-800 grid place-items-center'>

            <div id="home" className="grid place-items-center ">
                <h1 className='text-xl m-2 flex'>
                    <FaCode color='orange' size={20} />
                    Software/QA Engineer
                </h1>

                <p className="text-2xl typewriter text-center">
                    👋🏿  Hi I'm David, I turn dreams and visions into code.
                </p>
            </div >

            <ul className="grid grid-cols-3 gap-10 place-items-center">
                {
                    faIcons.map(i => {
                        return (
                            <li key={i.id} className=" grid
                            place-items-center rounded-full w-20 h-20 
                             hover:shadow-lg 
                           " >
                                <a href={i.pathName}>
                                    <p >
                                        <i.iconName size={30}
                                            color={i.color} />
                                        {i.name}
                                    </p>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            

        </header>

    )
}

export default Home
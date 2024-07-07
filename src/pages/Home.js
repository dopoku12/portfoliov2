
function Home({ FaCode, FaAngleDown, faIcons }) {
    return (

        <header className='box  bg-white dark:bg-slate-800 grid place-items-center'>

            <div id="home" className="grid place-items-center ">
                <h1 className='text-xl m-2 flex'>
                    <FaCode color='orange' size={20} />
                    Software/QA Engineer
                </h1>

                <p className="text-xl typewriter text-center">
                    👋🏿  Hi I'm David, I turn dreams and visions into code.
                </p>
            </div >

            <ul className="grid grid-cols-3 gap-10 place-items-center">
                {
                    faIcons.map(i => {
                        return (
                            <li key={i.id} className=" grid
                            place-items-center  w-20 h-20 " >
                                <a href={i.pathName} title= {i.name}>
                                        <i.iconName size={30} color={i.color} />
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
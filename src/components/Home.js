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
                            <li key={i.id} >
                                <a href={i.pathName}>
                                    <p >
                                        {i.name}
                                        <i.iconName size={30}
                                            color={i.color} />
                                    </p>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <button className=" ">
                <a href='#projects'>
                    <FaAngleDown color='orange' size={30} />
                </a>
            </button>
        </header>

    )
}

export default Home
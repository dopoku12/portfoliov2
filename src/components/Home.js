function Home({ FaCode, FaAngleDown }) {

    return (

        <header className='box bg-white dark:bg-slate-800 grid place-items-center'>

            <div className="grid place-items-center ">
                <h1 className='text-xl m-5 flex'>
                    <FaCode color='orange' size={20} />  David  <span>Opoku</span>
                </h1>

                <p className="text-4xl text-center p-6">
                    A Passionate Software & QA Engineer
                    let's come together & Make Something Great
                </p>
            </div >
            <button className=" ">
                <a href='#projects'>
                    <FaAngleDown color='orange' size={30} />
                </a>
            </button>
        </header>

    )
}

export default Home
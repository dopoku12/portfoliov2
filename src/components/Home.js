function Home({ FaCode }) {
    return (
        <div className="home flex flex-col items-center ">

            <header >
                <h1 className='text-xl m-5 flex'>
                    <FaCode color='orange' size={20} />  David  <span>Opoku</span>
                </h1>
            </header>

            <p className="text-4xl text-center p-6">
                A Passionate Software & QA Engineer
                let's come together & Make Something Great
            </p>
        </div >

    )
}

export default Home
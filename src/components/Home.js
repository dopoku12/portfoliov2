function Home({ FaCode, FaAngleDown }) {

    return (

        <header className='home '>

            <div className="flex flex-col items-center ">
                <h1 className='text-xl m-5 flex'>
                    <FaCode color='orange' size={20} />  David  <span>Opoku</span>
                </h1>

                <p className="text-4xl text-center p-6">
                    A Passionate Software & QA Engineer
                    let's come together & Make Something Great
                </p>
            </div >

        </header>

    )
}

export default Home
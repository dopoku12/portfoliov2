function Home({}) {
   return (
      <header className=" bg-white dark:bg-slate-800 grid place-items-center">
         <div id="home" className="grid place-items-center ">
            <h1 className="m-2 text-6xl font-extrabold">
               David <span className=" ">Opoku</span>
            </h1>
            <h1
               className="m-2 
            text-4xl 
            font-semibold 
            icon-shadow
            "
            >
               Software Engineer
            </h1>

            <p className="text-2xl font-thin typewriter">
               👋🏿 Hi I'm David, I turn dreams and visions into code.
            </p>
         </div>
      </header>
   );
}

export default Home;

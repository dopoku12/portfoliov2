import AboutMe from "./AboutMe";
function Resume() {
   return (
      <div id="resume" className="grid bg-white dark:bg-slate-800 ">
         <article>
            <section className="grid">
               <AboutMe />
            </section>
         </article>
      </div>
   );
}

export default Resume;

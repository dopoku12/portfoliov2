import Theme from "./components/Theme";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import icons from "./components/Icons";
import { TiAdjustContrast } from "react-icons/ti";

function App() {
   const contact = icons.contact.map((value, i) => (
      <li key={i} className=" grid place-items-center ">
         <a href={value.pathName}>
            <value.iconName size={30} className="" color={value.color} />
         </a>
      </li>
   ));

   return (
      <div
         className="dark:bg-slate-800 dark:text-white 
    grid grid-cols-2 gap-20"
      >
         <nav className="grid place-items-center">
            <div className="fixed top-0">
               <Theme TiAdjustContrast={TiAdjustContrast} />
               <Home />
               <ul className=" m-10 grid grid-cols-3 gap-10 place-items-center">
                  {contact}
               </ul>
            </div>
         </nav>

         <main className="grid grid-rows-2 gap-10">
            <Experience skillIcons={icons.skillIcons} />
            <Projects skillIcons={icons.skillIcons} />
            <Skills skillIcons={icons.skillIcons} />
         </main>
      </div>
   );
}

export default App;

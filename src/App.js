
import { TiAdjustContrast } from "react-icons/ti";
import icons from "./components/Icons";
import Home from "./pages/Home";
import Theme from "./components/Theme"
import  {Link,Outlet}  from "react-router-dom";
function App() {
   const contact = icons.contact.map((value, i) => (
      <li key={i} className=" grid place-items-center ">
         <a href={value.pathName}>
            <value.iconName size={30} className="" color={value.color} />
         </a>
      </li>
   ));

  return (
    <div className="dark:bg-slate-800 dark:text-white grid place-items-center items-center grid-cols-2">
    <nav className="grid place-items-center items-center">
   <div className="fixed top-0">
   <Theme TiAdjustContrast={TiAdjustContrast} />
   <Home />
       <ul className=" m-10 grid grid-cols-3 gap-10 place-items-center">
                  {contact}
               </ul>
   <ul className="grid place-items-center">
   <li>
   <Link to={'/Projects'}>
   Projects
   </Link>
   </li>
   <li>
   <Link to={'/Resume'}>
   Skills
   </Link>
   </li>
   <li>
   <Link to={'/Experience'}>
   Experience
   </Link>
   </li>
   </ul>
   
   </div>
   </nav>
   
    
      <main className="grid box place-items-center">
   <Outlet context={icons.skillIcons}/>
      </main>
    </div>

  );
}

export default App

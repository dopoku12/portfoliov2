function Skills({ skillIcons }) {
   return (
      <div>
         <header className="text-2xl m-5">
            <h2>Skills</h2>
         </header>
         <ul
            className=" grid grid-cols-4  gap-10 
         place-items-center"
         >
            {skillIcons.map((obj, i) => (
               <li key={i}>
                  {obj.name}
                  <obj.iconName
                     size={30}
                     fill={obj.fill}
                     stroke={obj.stroke}
                     stroke-width={obj.strokeW}
                  />
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Skills;

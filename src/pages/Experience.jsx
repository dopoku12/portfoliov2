import { useOutletContext } from 'react-router-dom';

function Experience({ skillIcons }) {
   const context = useOutletContext();
console.log(context)
   const jobs = [
      {
         site: "https://gocloudforce.com/",
         company: "Cloudforce",
         title: "Cloud Apprentice",
         detail:
            "Managed Azure-related support tickets using the Zoho Help Desk system, ensuring timely and effective responses.",
         tech: ["Azure", "Azuredevops", "Powerbi", "Zoho"],
      },
      {
         site: "",
         company: "Stealth Startup",
         title: "Software Engineer",
         detail:
            "- Developed a web application for an innovative startup in the education sector\n- Collaborated with a cross-functional team to design and implement new features and improvements\n- Utilized React.js and the Bootstrap framework to create responsive and user-friendly interfaces\n- Utilized Node.js, Express.js, MongoDB, and Jest to implement secure data handling practices\n- Participated in code reviews and performed testing to ensure high-quality software\n- Demonstrated strong problem-solving skills and adaptability in a fast-paced startup environment",
         tech: [
            "Mongodb",
            "Express.js",
            "React.js",
            "Node.js",
            "Jest.js",
            "Vite.js",
            "Bootstrap",
            "Git",
         ],
      },
   ];

   const techList = jobs.map((value, i) => (
      <li key={i}>
         <article>
            <header>
               <h1>
                  {value.company}
                  <a href={value.site}>...</a>
               </h1>
               <h2>{value.title}</h2>
            </header>
            <p>{value.detail}</p>
            {value.tech.map((arr, i) => {
               const stack = skillIcons.find((elm) => elm.name === arr);
               return (
                  <ul className="grid grid-cols-4 gap-5 place-items-center">
                     <li key={i}>
                        <stack.iconName color={stack.fill} />
                     </li>
                  </ul>
               );
            })}
         </article>
      </li>
   ));

   return <ul id="exp">{techList}</ul>;
}

export default Experience;

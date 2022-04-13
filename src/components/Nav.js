
import { useState } from 'react';
import { FaPaintBrush, FaCode, FaInfo, FaRegNewspaper } from 'react-icons/fa';

function Nav() {
  const [faIcons, setFaIcons] = useState([
    ///add behavior for click or hover
    { id: 1, name: 'projects', iconName: FaPaintBrush, },
    { id: 2, name: 'resume', iconName: FaRegNewspaper, },
    { id: 3, name: 'Code', iconName: FaCode, },
    { id: 4, name: 'aboutMe', iconName: FaInfo, }
  ].map(
    i => (
      { ...i, status: false }
    ))

  )

  return (
    <header>
      <nav>
        <ul className='nav-ul'>
          {
            faIcons.map((i) => {
              return (
                <li key={i.id} >
                  <button>
                    <i.iconName className='nav-icons' color='5489A8' size={20} />
                    <p>{i.name}</p>
                  </button>
                </li>
              )
            })
          }

        </ul>
      </nav>
    </header >
  );
}

export default Nav

import { FaHome, FaPaintBrush, FaCode, FaInfo, } from 'react-icons/fa';

function Header() {

  const faNavIcons = [
    ///add behavior for click or hover
    { id: 1, name: 'home', iconName: FaHome, },
    { id: 2, name: 'projects', iconName: FaPaintBrush, },
    { id: 3, name: 'resume', iconName: FaCode, },
    { id: 4, name: 'aboutMe', iconName: FaInfo, }

  ]


  return (
    <header>
      <nav>
        <ul>
          {

            faNavIcons.map((items) => {
              return (
                <li key={items.id}>
                  <button>
                    <items.iconName color='5489A8' size={20} />

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

export default Header
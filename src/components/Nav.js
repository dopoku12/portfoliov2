
import { FaPaintBrush, FaCode, FaInfo, } from 'react-icons/fa';

function Nav() {
  const faNavIcons = [
    ///add behavior for click or hover
    { id: 1, name: 'projects', iconName: FaPaintBrush, },
    { id: 2, name: 'resume', iconName: FaCode, },
    { id: 3, name: 'aboutMe', iconName: FaInfo, }
  ].map((i) => {
    return (
      { ...i, clickHandler: function () { } }
    )
  })

  return (
    <header>
      <nav>
        <ul className='nav-ul'>
          {

            faNavIcons.map((items) => {
              return (
                <li key={items.id} className='nav-icons'>
                  <button>
                    <items.iconName color='5489A8' size={20} />
                    <p>{items.name}</p>
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
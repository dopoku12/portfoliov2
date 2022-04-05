import { SiBootstrap, SiReact, SiJavascript, SiSass, SiGithub, SiTailwindcss, SiLeaflet } from 'react-icons/si'
function Resume() {

    const siResumeIcons = [
        { id: 1, iconName: SiBootstrap },

        { id: 2, iconName: SiReact },

        { id: 3, iconName: SiJavascript },

        { id: 4, iconName: SiSass },

        { id: 5, iconName: SiGithub },

        { id: 6, iconName: SiTailwindcss },

        { id: 7, iconName: SiLeaflet }
    ]

    return (
        <main>
            <ul>
                {

                    siResumeIcons.map((items) => {
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
        </main>
    );
}

export default Resume;

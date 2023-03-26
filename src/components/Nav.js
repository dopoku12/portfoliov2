const Nav = ({ faIcons }) => {
    return (
        <nav>
            <ul>
                {faIcons.map(i => {
                    console.log(i);
                    return (
                        i.id < 4 ?
                            <li key={i.id} >
                                <a href={i.pathName}>
                                    <p >
                                        {i.name}
                                        <i.iconName size={30} color={i.color} />

                                    </p>
                                </a>
                            </li>
                            :
                            <li key={i.id} className="list-none">
                                <p >
                                    {i.name}
                                    <i.iconName size={30} color={i.color} />
                                </p>
                            </li>
                    )
                })
                }
            </ul>
        </nav>
    )
}

export default Nav;
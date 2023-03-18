import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <li>
            <Link to="/Projects">
                <footer className="projects-link-container">
                    <h1 className="projects-link">View Projects</h1>
                </footer>
            </Link>
        </li>
    );
}

export default Nav;
import { Link } from "react-router-dom";
import "../styles/nav.css"

// Serves as a header for all pages 
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Myles Nichols</h1>
            <div className="links">
            <ul>
                <li><Link to="/React-Portfolio">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
            </div>
        </nav>
     );
}
export default Navbar;
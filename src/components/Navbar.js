import "../styles/Navbar.css";

export function Navbar(){
    return(
        <nav className="myNav">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Education</a></li>
                <li><a href=".box">Projects</a></li>
                <li><a href="">Skills</a></li>
            </ul>
        </nav>
    )
}
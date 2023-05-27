import "../../styles/Navbar.css";

export function Navbar(){
    return (
      <nav className="myNav">
        <ul>
          <li>
            <a href="#title">About</a>
          </li>
          <li>
            <a href="#projects-heading">Projects</a>
          </li>
          <li>
            <a href="#skillset-heading">Skills</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
    );
}
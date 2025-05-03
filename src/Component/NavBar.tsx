import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
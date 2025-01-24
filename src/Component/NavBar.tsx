import "../styles/NavBar.css";
const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="site-logo">
        <a href="#">I5URU</a>
      </div>
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
      <div className="empty">
        <a href="#">I5URU</a>
      </div>
    </nav>
  );
};

export default NavBar;

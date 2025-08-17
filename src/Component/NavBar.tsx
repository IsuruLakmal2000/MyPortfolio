import React from "react";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // 100px offset for navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-items">
          <li>
            <button onClick={() => handleSmoothScroll('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleSmoothScroll('about')}>About</button>
          </li>
          <li>
            <button onClick={() => handleSmoothScroll('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleSmoothScroll('contact')}>Contact</button>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
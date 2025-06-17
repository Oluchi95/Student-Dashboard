import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="dashboard-header">
      <h1>Student Dashboard</h1>
      <nav>
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#completed" onClick={toggleMenu}>Completed</a></li>
          <li><a href="#upcoming" onClick={toggleMenu}>Upcoming</a></li>
          <li><a href="#recommendations" onClick={toggleMenu}>Recommendations</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
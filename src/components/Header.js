import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="dashboard-header">
      <h1>Student Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#completed">Completed</a></li>
          <li><a href="#upcoming">Upcoming</a></li>
          <li><a href="#recommendations">Recommendations</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
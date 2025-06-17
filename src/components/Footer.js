import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <p>&copy; {new Date().getFullYear()} GemAcademy Mini Project. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
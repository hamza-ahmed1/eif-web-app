// src/components/HamburgerMenu.js
import React from 'react';
import './Navbar.css'; // Ensure you have a CSS file for styling

const HamburgerMenu = ({ onClick }) => {
  return (
    <button className="hamburger-menu" onClick={onClick}>
      <img src="/assets/Hamburger.svg" alt="Menu" className="hamburger-icon" />
    </button>
  );
};

export default HamburgerMenu;

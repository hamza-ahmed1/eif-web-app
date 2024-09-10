// src/components/Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu'; // Import the hamburger menu component
import './Navbar.css'; // Ensure you have a CSS file for styling
import SelectAdmission from './SelectAdmission';
import Affiliation from './Affiliation';
import AboutUs from './AboutUs';
import SelectLanguages from './AboutMIFPageComp/LanguageSec/SelectLanguage';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navbarRef = useRef(null); // Ref for the navbar

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowNavbar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        {/* <div className="logo">
          <img src='/assets/Logo/logo.png' alt="Logo" />
        </div> */}
        <div className="menu-icon">
          <HamburgerMenu onClick={handleShowNavbar} />
        </div>
        <div
          className={`nav-elements ${showNavbar ? 'active' : ''}`}
          ref={navbarRef}
        >
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar} end>Home</NavLink>
            </li>
            <li>
              <SelectAdmission />
            </li>
            <li>
              <Affiliation />
            </li>
            <li>
              <NavLink to="/scholarship-program" onClick={handleShowNavbar}>Scholarship Programs</NavLink>
            </li>
            <li>
             <AboutUs/>
            </li>
            <li>
              <NavLink to="/contact-us" onClick={handleShowNavbar}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/donate-now" onClick={handleShowNavbar}>Donate Us</NavLink>
            </li>
            <li>
             <SelectLanguages/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

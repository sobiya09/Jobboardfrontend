import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import './navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Job board</div>


      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars className="hamburger-icon" />
      </div>

      <ul
        ref={sidebarRef}
        className={`nav-links ${isOpen ? 'open' : ''}`}
      >
        <li className="close-icon" onClick={closeMenu}>
          <FaTimes />
        </li>
        <li><a href="/" onClick={closeMenu}>HOME</a></li>
        <li><a href="#about" onClick={closeMenu}>ABOUT US</a></li>
        <li><a href="/jobs" onClick={closeMenu}>JOB DETAILS</a></li>
        <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
        <li>
          <a href="#login" className="login-button" onClick={closeMenu}>Login</a>
        </li>
      </ul>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;

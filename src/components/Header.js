import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../components/navbar/navbar.css";

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

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">JOB BOARD</div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        {!isOpen ? (
          <FaBars className="hamburger-icon" />
        ) : (
          <FaTimes className="hamburger-icon" />
        )}
      </div>

      {/* Sidebar Menu */}
      <ul
        ref={sidebarRef}
        className={`nav-links ${isOpen ? "open" : ""}`}
      >
        <li>
          <a href="/" onClick={closeMenu}>
            HOME
          </a>
        </li>
        <li>
          <a href="/jobs" onClick={closeMenu}>
            JOB LISTS
          </a>
        </li>
      </ul>

      {/* Overlay when sidebar is open */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;

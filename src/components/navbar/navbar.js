import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top" style={{ backgroundColor: '#f9fafc' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home" style={{ fontSize: '24px', color: '#071952' }}>
          Job board
        </a>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                onClick={() => setIsOpen(false)}
                style={{ color: '#088394',
                  fontWeight: 500,
                  marginLeft: '10px',
                  marginRight: '10px'
                 }} 
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={() => setIsOpen(false)}
                style={{ color: '#088394',
                  fontWeight: 500,
                  marginLeft: '10px',
                  marginRight: '10px'
                 }} 
              >
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link bold"
                href="/jobs"
                onClick={() => setIsOpen(false)}
                style={{ color: '#088394', 
                  fontWeight: 500,
                  marginLeft: '10px',
                  marginRight: '10px' }} 
              >
                JOB DETAILS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={() => setIsOpen(false)}
                style={{ color: '#088394',
                  fontWeight: 500,
                  marginLeft: '10px',
                  marginRight: '20px'
                 }} 
              >
                CONTACT
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className="btn"
                style={{
                  backgroundColor: '#071950', 
                  color: '#fff',
                  borderRadius: '20px',
                }}
              >
                Login
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

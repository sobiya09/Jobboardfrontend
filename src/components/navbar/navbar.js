import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-md sticky-top shadow-sm"
      style={{
        backgroundColor: 'rgba(214, 214, 219, 0.54)',
        fontFamily: "'Poppins', sans-serif",
        padding: "12px 20px",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          style={{
            fontSize: "26px",
            color: "#071952",
            letterSpacing: "1px",
          }}
        >
          Job Board
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "20px",
          }}
        >
          <FaBars color="#071952" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-uppercase">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "#about" },
              { name: "Job Details", link: "/jobs" },
              { name: "Contact", link: "#contact" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link px-3"
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "#071952",
                    fontWeight: 600,
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                  onMouseLeave={(e) => (e.target.style.color = "#071952")}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

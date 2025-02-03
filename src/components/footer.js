import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="text-white py-4"
      style={{
        background: 'linear-gradient(45deg, #061953, #0c2a67)',
        fontFamily: 'Poppins, Arial, sans-serif',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="container text-center">
        <p className="mb-3" style={{ fontSize: '14px' }}>
          Empowering Careers, Connecting Opportunities. 
        </p>
        
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaLinkedin size={20} />
          </a>
        </div>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.86)' }} />
        
        <p className="mb-0 small">© {new Date().getFullYear()} 🚀 Job Board. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        .footer-link {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #00bcd4 !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;

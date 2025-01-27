import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer
      className="text-white py-4"
      style={{
        backgroundColor: '#061953', 
        fontFamily: 'Poppins, Arial, sans-serif',
      }}
    >
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <h2 className="h4 fw-bold">Job board</h2>
            <p className="mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
              Empowering Careers, Connecting Opportunities.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h4 className="h6 fw-semibold mb-2">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none small d-block mb-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none small d-block mb-1">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none small d-block mb-1">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-white text-decoration-none small d-block">
                  Job Details
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h4 className="h6 fw-semibold mb-2">Follow Us</h4>
            <div className="d-flex flex-column gap-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none small"
              >
                🌐 Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none small"
              >
                🌐 Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none small"
              >
                🌐 LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-top pt-3 text-center"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <p className="mb-0 small">
            © {new Date().getFullYear()} Job board. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

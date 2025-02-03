import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../../assets/about_us.jpg';

function AboutSection() {
  return (
    <section className="container my-5" id="about">
      <div className="row align-items-center">
        

        <div className="col-md-6">
  <h3 className="text-uppercase fw-bold text-primary mb-2" style={{ fontSize: '14px', letterSpacing: '1px' }}>
    About Us
  </h3>
  <h2 className="fw-bold mb-3 text-dark" style={{ fontSize: '32px', lineHeight: 1.3 }}>
    Empowering Careers, Unlocking Endless Opportunities
  </h2>
  <p className="text-muted mb-3" style={{ fontSize: '16px', lineHeight: 1.8 }}>
    At <strong>Job Board</strong>, we’re more than just a platform – we’re your partner in career success. 
    We bridge the gap between passionate professionals and leading employers, making job searches and hiring processes smoother than ever. 
    Whether you're looking to discover your dream job or seeking top-tier talent to elevate your team, we offer seamless solutions that foster growth, 
    unlock new career opportunities, and help businesses build exceptional teams for a bright future.
  </p>
  <button
    className="btn"
    style={{
      backgroundColor: 'rgba(8, 11, 54, 1)',
      color: '#fff',
      fontWeight: 600,
      padding: '12px 30px',
      borderRadius: '30px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
    }
  }
    onMouseOver={(e) => e.target.style.backgroundColor = '#d66d05'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
  >
    Explore More
  </button>
</div>

<div className="col-md-6 mb-4">
          <img
            src={aboutImage}
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutSection;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../../assets/about_us.jpg';

function AboutSection() {
  return (
    <section className="container my-5" id="about">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src={aboutImage}
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h3 className="text-uppercase fw-bold text-primary mb-2" style={{ fontSize: '14px' }}>
            About Us
          </h3>
          <h2 className="fw-bold mb-3 text-dark" style={{ fontSize: '32px' }}>
            Empowering Careers, Connecting Opportunities
          </h2>
          <p className="text-muted mb-3" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            At <strong>Job board</strong>, we bridge the gap between talented professionals and top employers.
            Our platform is dedicated to simplifying the hiring process, offering seamless experiences
            for both job seekers and companies. We believe in fostering growth, enabling people to find
            meaningful careers, and helping businesses build exceptional teams.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: '#f97316',
              color: '#fff',
              fontWeight: 500,
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

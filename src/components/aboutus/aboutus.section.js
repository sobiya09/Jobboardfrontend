import React from 'react';
import './aboutUs.css';
import aboutImage from '../../assets/about_us.jpg';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="image-container">
        <img src={aboutImage} alt="About Us" className="image w-100 rounded-3 object-fit-cover" />
      </div>

      <div className="content">
        <h3 className="sub-heading">
          ABOUT <span className="highlight">US</span>
        </h3>
        <h2 className="heading">
          Empowering Careers, Connecting Opportunities
        </h2>
        <p className="description">
          At <strong>Job board</strong>, we bridge the gap between talented professionals and top employers.
          Our platform is dedicated to simplifying the hiring process, offering seamless experiences 
          for both job seekers and companies. We believe in fostering growth, enabling people to find meaningful 
          careers, and helping businesses build exceptional teams.
        </p>
        <button className="button">Read More</button>
      </div>
    </section>
  );
}

export default AboutSection;

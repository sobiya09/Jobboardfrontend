import React from 'react';
import './HomeSection.css';
import gifAnimation from '../../assets/Job_search.gif';
import CarouselSection from './carousel.section';

function HomeSection() {
  return (
    <section className="home-section">
            <CarouselSection />

      {/* <div className="content">
        <h3 className="sub-heading">GET STARTED TODAY</h3>
        <h1 className="heading">
          Effortlessly Unleash Your <span className="highlight">Talents</span>
        </h1>
        <p className="description">
          Fill Positions in Hours with Free Search Options
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="gif-container">
        <img src={gifAnimation} alt="Animated Representation" className="gif" />
      </div> */}
    </section>
  );
}

export default HomeSection;

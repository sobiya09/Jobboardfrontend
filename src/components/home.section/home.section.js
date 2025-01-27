import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // If you installed via npm
import gifAnimation from '../../assets/Job_search.gif';
import CarouselSection from './carousel.section';

function HomeSection() {
  return (
    <section id="home" className="container-fluid p-0">
      <CarouselSection />

      {/* 
          If you want to show a "Get Started" text & GIF below or above the carousel,
          you can place the row/columns here.
      */}
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* <div className="col-md-6 mb-4">
            <h3 className="text-uppercase text-secondary fs-6 mb-2">
              Get Started Today
            </h3>
            <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3rem' }}>
              Effortlessly Unleash Your <span className="text-primary">Talents</span>
            </h1>
            <p className="text-muted mb-4">
              Fill Positions in Hours with Free Search Options
            </p>
            <button className="btn" style={{ backgroundColor: '#f97316', color: '#fff' }}>
              Get Started
            </button>
          </div> */}

          {/* Right Column - GIF */}
          {/* <div className="col-md-6">
            <img
              src={gifAnimation}
              alt="Animated Representation"
              className="img-fluid rounded"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

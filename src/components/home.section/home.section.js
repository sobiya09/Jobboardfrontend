import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // If you installed via npm
import gifAnimation from '../../assets/Job_search.gif';
import CarouselSection from './carousel.section';

function HomeSection() {
  return (
    <section id="home" className="container-fluid p-0">
      <CarouselSection />
      <div className="container py-5">
        <div className="row align-items-center">
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

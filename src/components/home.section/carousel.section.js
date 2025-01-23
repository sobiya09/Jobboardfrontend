import React, { useState } from "react";
import "./carousel.section.css";
import image1 from "../../assets/carousel-1.jpg";
import image2 from "../../assets/carousel-2.jpg";
import image3 from "../../assets/carousel-3.jpg";

const CarouselSection = () => {
  const slides = [
    {
      id: 1,
      image: image1,
      title: "Discover Your Dream Job",
      description: "We connect you with opportunities that match not only your skills and experience but also your ambitions and aspirations.",
      buttons: [{ label: "Get Started", link: "/search-job", class: "primary" }],
    },
    {
      id: 2,
      image: image2,
      title: "Explore thousands of opportunities",
      description: "Whether you're passionate about technology, healthcare, finance, or any other field, we have a vast array of jobs across industries waiting for you.",
      buttons: [{ label: "Get Started", link: "/post-job", class: "primary" }],
    },
    {
      id: 3,
      image: image3,
      title: "Online Job Portal",
      description: "We are there for you.",
      buttons: [{ label: "Get Started", link: "/get-started", class: "primary" }],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="carousel-section">
      <div className="carousel">
        <div
          className="carousel-slide"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
          }}
        >
          <div className="carousel-overlay">
            <div className="carousel-content">
              <h1 className="carousel-title">{slides[currentIndex].title}</h1>
              <p className="carousel-description">
                {slides[currentIndex].description}
              </p>
              <div className="carousel-buttons">
                {slides[currentIndex].buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    className={`carousel-button ${button.class}`}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-arrow prev" onClick={goToPrev}>
          ❮
        </button>
        <button className="carousel-arrow next" onClick={goToNext}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;

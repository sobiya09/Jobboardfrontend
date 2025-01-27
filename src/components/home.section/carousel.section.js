import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/carousel-1.jpg";
import image2 from "../../assets/carousel-2.jpg";
import image3 from "../../assets/carousel-3.jpg";

function CarouselSection() {
  const slides = [
    {
      id: 1,
      image: image1,
      title: "Explore thousands of Opportunities",
      description:
        "Whether you're passionate about technology, healthcare, finance, or any other field, we have a vast array of jobs across industries waiting for you.",
      button: { label: "Get Started", link: "/search-job" },
    },
    {
      id: 2,
      image: image2,
      title: "Discover Your Dream Job",
      description:
        "We connect you with opportunities that match not only your skills and experience but also your ambitions and aspirations.",
      button: { label: "Get Started", link: "/post-job" },
    },
    {
      id: 3,
      image: image3,
      title: "Online Job Portal",
      description: "We are there for you.",
      button: { label: "Get Started", link: "/get-started" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="carousel-section" className="container-fluid p-0">
      <div className="position-relative" style={{ minHeight: "100vh" }}>
        <div
          className="w-100 h-100"
          style={{
            backgroundImage: `url(${currentSlide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.69)" }}
          ></div>

          <div
            className="position-absolute top-50 start-0 translate-middle-y text-white p-5"
            style={{ maxWidth: "600px", marginLeft: "5%" }}
          >
            <h1 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
              {currentSlide.title}
            </h1>
            <p className="mb-4" style={{ fontSize: "1rem" }}>
              {currentSlide.description}
            </p>
            <a
              href={currentSlide.button.link}
              className="btn text-white"
              style={{
                backgroundColor: "#071950", 
                borderRadius: "5px",
              }}
            >
              {currentSlide.button.label}
            </a>
          </div>

          <button
            className="btn btn-light position-absolute"
            style={{ top: "50%", left: "1rem", transform: "translateY(-50%)" }}
            onClick={goToPrev}
          >
            ❮
          </button>
          <button
            className="btn btn-light position-absolute"
            style={{ top: "50%", right: "1rem", transform: "translateY(-50%)" }}
            onClick={goToNext}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;

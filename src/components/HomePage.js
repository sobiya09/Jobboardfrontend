import React from "react";
import HomeSection from "../components/home.section/home.section";
import AboutSection from "../components/aboutus/aboutus.section";
import ContactSection from "../components/contactus/contactus.section";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HomeSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

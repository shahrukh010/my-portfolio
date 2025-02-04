import React from "react";
import Footer from "./Footer"; // Make sure the path is correct
import About from "./About"; // Make sure the path is correct

const HomeSection = () => {
  return (
    <>
      <section id="home" className="home-section">
        <div className="home-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate developer who loves creating amazing web experiences.</p>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </section>

      {/* Footer Component */}
      <About></About>
      <Footer />
    </>
  );
};

export default HomeSection;

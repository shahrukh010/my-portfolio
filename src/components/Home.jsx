import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Footer from './Footer';            // Assuming Footer component

const HomeSection = () => {
  return (
    <>
      <section id="home" className="home-section">
        <div className="home-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate developer who loves creating amazing web experiences.</p>
          {/* Using React Router Link to navigate to the About page */}
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default HomeSection;

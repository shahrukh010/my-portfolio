import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/project">Project</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/shahrukh010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shahrukh-khan-04b518214"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:your-email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="copyright">© 2024 Shahrukh Khan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

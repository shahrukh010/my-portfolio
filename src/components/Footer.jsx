import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Navigation Links */}
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:your-email@example.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                {/* Copyright Notice */}
                <p className="copyright">
                    © 2023 Shahrukh Khan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
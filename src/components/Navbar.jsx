import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo (GitHub Icon + Name) */}
                <a
                    href="https://github.com/shahrukh010"
                    className="logo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                    <span className="website-name">Shahrukh Khan</span>
                </a>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <a href="#home">
                            <i className="fas fa-home"></i> Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <i className="fas fa-user"></i> About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <i className="fas fa-chart-bar"></i> Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <i className="fas fa-project-diagram"></i> Projects
                        </a>
                    </li>
                    <li>
                        <a href="#experience">
                            <i className="fas fa-briefcase"></i> Experience
                        </a>
                    </li>
                    <li className="dropdown">
                        <a href="#">
                            <i className="fas fa-bars"></i> More
                        </a>
                        <ul className="dropdown-content">
                            <li>
                                <a href="#certifications">
                                    <i className="fas fa-certificate"></i>{" "}
                                    Certifications
                                </a>
                            </li>
                            <li>
                                <a href="#blog">
                                    <i className="fas fa-blog"></i> Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/shahrukh010"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

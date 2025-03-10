import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo (GitHub Icon + Name) */}
                <a
                    href="https://www.linkedin.com/in/shahrukh-khan-04b518214"
                    className="logo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>

                    <span className="website-name">Shahrukh Khan</span>
                {/* Navigation Links (Use Link for React Router) */}
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills">
                            <i className="fas fa-chart-bar"></i> Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="/project">
                            <i className="fas fa-project-diagram"></i> Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience">
                            <i className="fas fa-briefcase"></i> Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                        <i className="fas fa-blog"></i> Blog
                        </Link>
                    </li>
                    {/* Dropdown Menu */}
                    <li className="dropdown">
                        <a href="#">
                            <i className="fas fa-bars"></i> More
                        </a>
                        <ul className="dropdown-content">
                            <li>
                                <a
                                    href="https://github.com/shahrukh010"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/shahrukh-khan-04b518214"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin"></i> Linkedin
                                </a>
                            </li>
                            <li>
                                <Link to="/certifications">
                                    <i className="fas fa-certificate"></i> Certifications
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog">
                                    <i className="fas fa-blog"></i> Blog
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

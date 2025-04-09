import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const SkillSection = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <section id="skill" className="skill-section">
                <div className="container">
                    <h2>My Skills</h2>
                    <div className="timeline">

                        {/* Java */}
                        <div className="timeline-item">
                            <div
                                className="timeline-icon"
                                style={{ background: "#b07219" }}
                            >
                                <i className="fab fa-java"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>Java</h3>
                                <p>
                                    <strong>Proficiency:</strong> Advanced
                                </p>
                                <p>
                                    Developed backend systems and algorithms using
                                    Java and Spring Boot.
                                </p>
                            </div>
                        </div>

                        {/* Python */}
                        <div className="timeline-item">
                            <div
                                className="timeline-icon"
                                style={{ background: "#3776ab" }}
                            >
                                <i className="fab fa-python"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>Python</h3>
                                <p>
                                    <strong>Proficiency:</strong> Intermediate
                                </p>
                                <p>
                                    Experience with data preprocessing, and visualization using Python libraries like NumPy, Pandas, Matplotlib."
                                </p>
                            </div>
                        </div>
                        {/* JavaScript */}
                        <div className="timeline-item">
                            <div
                                className="timeline-icon"
                                style={{ background: "#f7df1e" }}
                            >
                                <i className="fab fa-js"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>JavaScript</h3>
                                <p>
                                    <strong>Proficiency:</strong> Basic
                                </p>
                                <p>
                                    Built interactive web applications using
                                    JavaScript and frameworks like React.
                                </p>
                            </div>
                        </div>

                        {/* MySQL */}
                        <div className="timeline-item">
                            <div
                                className="timeline-icon"
                                style={{ background: "#00758f" }}
                            >
                                <i className="fas fa-database"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>MySQL</h3>
                                <p>
                                    <strong>Proficiency:</strong> Advanced
                                </p>
                                <p>
                                    Designed relational databases and optimized SQL
                                    queries for performance.
                                </p>
                            </div>
                        </div>

                        {/* Data Structures */}
                        <div className="timeline-item">
                            <div
                                className="timeline-icon"
                                style={{ background: "#4caf50" }}
                            >
                                <i className="fas fa-code-branch"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>Data Structures</h3>
                                <p>
                                    <strong>Proficiency:</strong> Expert
                                </p>
                                <p>
                                    Implemented efficient algorithms and optimized
                                    solutions for complex problems.
                                </p>
                            </div>
                        </div>

                        {/* Spring Boot */}
                        <div className="timeline-item">
                            <div
                                className="timeline-icon"
                                style={{ background: "#6db33f" }}
                            >
                                <i className="fab fa-spring"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>Spring Boot</h3>
                                <p>
                                    <strong>Proficiency:</strong> Intermediate
                                </p>
                                <p>
                                    Built scalable microservices and RESTful APIs
                                    using Spring Boot.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="view-more">
                        <button className="btn" onClick={() => navigate("/ViewSkills")}>
                            View All My Skills
                        </button>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default SkillSection;

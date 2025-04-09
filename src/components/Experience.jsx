import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

const ExperienceSection = () => {
    // Slider settings
    const settings = {
        dots: true, // Show dot indicators
        infinite: true, // Infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        arrows: true, // Show navigation arrows
        autoplay: true, // Automatically slide
        autoplaySpeed: 3000, // Autoplay interval in milliseconds
    };

    return (
        <div className="">
            <section id="experience" className="experience-section">
                <div className="container">
                    <h2>My Experience</h2>
                    <Slider {...settings}>
                        {/* Experience Entry 1 */}
                        <div className="experience-card">
                            <h3>Java Developer</h3>
                            <p>
                                <strong>Company:</strong> One Digital Entertainment
                            </p>
                            <p>
                                <strong>Duration:</strong> Sept 2023 - Persent 
                            </p>
                            <p>
                                Developed scalable web applications using React and
                                Node.js. Collaborated with cross-functional teams to
                                deliver high-quality solutions.
                            </p>
                        </div>

                        {/* Experience Entry 2 */}
                        <div className="experience-card">
                            <h3>Software Engineer</h3>
                            <p>
                                <strong>Company:</strong> Paperflite
                            </p>
                            <p>
                                <strong>Duration:</strong> Oct 2022 - Sept 2023
                            </p>
                            <p>
                                Built responsive user interfaces using HTML, CSS,
                                and JavaScript. Optimized website performance and
                                improved user experience.
                            </p>
                        </div>

                        {/* Experience Entry 3 */}
                        <div className="experience-card">
                            <h3>Associate Engineer</h3>
                            <p>
                                <strong>Company:</strong> Cognitivzen
                            </p>
                            <p>
                                <strong>Duration:</strong> March 2022 - Oct 2022
                            </p>
                            <p>
                                Assisted in developing internal tools and automating
                                workflows using Python and Bash scripting.
                            </p>
                        </div>
                    </Slider>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ExperienceSection;

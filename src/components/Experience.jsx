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
                            <h3>Software Developer</h3>
                            <p>
                                <strong>Company:</strong> Tech Corp
                            </p>
                            <p>
                                <strong>Duration:</strong> Jan 2020 - Dec 2022
                            </p>
                            <p>
                                Developed scalable web applications using React and
                                Node.js. Collaborated with cross-functional teams to
                                deliver high-quality solutions.
                            </p>
                        </div>

                        {/* Experience Entry 2 */}
                        <div className="experience-card">
                            <h3>Frontend Developer</h3>
                            <p>
                                <strong>Company:</strong> Web Solutions
                            </p>
                            <p>
                                <strong>Duration:</strong> Jun 2018 - Dec 2019
                            </p>
                            <p>
                                Built responsive user interfaces using HTML, CSS,
                                and JavaScript. Optimized website performance and
                                improved user experience.
                            </p>
                        </div>

                        {/* Experience Entry 3 */}
                        <div className="experience-card">
                            <h3>Intern</h3>
                            <p>
                                <strong>Company:</strong> Startup Labs
                            </p>
                            <p>
                                <strong>Duration:</strong> May 2017 - Aug 2017
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

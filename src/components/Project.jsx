import React from "react";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";
import Logo from '../assets/Logo.png';
import blog from "../assets/blog.png"
import image from "../assets/image.png";

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            name: "Blog REST API project",
            logo: blog,
            link: "https://github.com/shahrukh010/blog-restapi.git"
        },
        {
            id: 2,
            name: "E-Commerce App",
            logo: Logo,
            link: "https://github.com/shahrukh010/shopme_01.git"
        },
        {
            id: 3,
            name: "Engage Points",
            logo: image,
            link: "https://www.engagepoints.com"
        },
        {
            id: 4,
            name: "Merchgarage",
            logo: "https://www.merchgarage.com/assets/images/logo.svg",
            link: "https://www.merchgarage.com/"
        },
        {
            id: 5,
            name: "Cleverstory",
            logo: "https://www.paperflite.com/sites/default/files/inline-images/paperflite.png",
            link: "https://www.paperflite.com/cleverstory"
        }
    ];

    return (
        <div>
            <section id="projects" className="projects-section">
                <div className="container">
                    <h2>My Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={project.logo}
                                        alt={`${project.name} Logo`}
                                        className="project-logo"
                                    />
                                    {/* Conditionally render the GitHub icon */}
                                    {project.name !== 'Engage Points' && project.name !== 'Merchgarage' && project.name !== 'Cleverstory'&& <FaGithub />} 
                                    <h3>{project.name}</h3>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ProjectsSection;
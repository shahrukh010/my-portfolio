import React from "react";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        name: "Blog REST API Project",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3pChdXqdWy5AeCUpf_zbsH3x4VdtLA0RIA&s",
        link: "https://github.com/shahrukh010/blog-restapi.git",
        github: true
    },
    {
        id: 2,
        name: "E-Commerce App",
        logo: "https://img.freepik.com/premium-vector/shopping-logo-design-template_446318-130.jpg?w=1380",
        link: "https://github.com/shahrukh010/shopme_01.git",
        github: true
    },
    {
        id: 3,
        name: "Engage Points",
        logo: "https://img.icons8.com/color/96/000000/money-bag.png",
        link: "https://www.engagepoints.com",
        github: false
    },
    {
        id: 4,
        name: "Merchgarage",
        logo: "https://www.merchgarage.com/assets/images/logo.svg",
        link: "https://www.merchgarage.com/",
        github: false
    },
    {
        id: 5,
        name: "Cleverstory",
        logo: "https://www.paperflite.com/sites/default/files/inline-images/paperflite.png",
        link: "https://www.paperflite.com/cleverstory",
        github: false
    },
    {
        id:6,
        name:"Social Nation Now",
        logo:"https://media.licdn.com/dms/image/v2/C4E0BAQFh3inqhmvjwA/company-logo_200_200/company-logo_200_200/0/1630630259001?e=1749686400&v=beta&t=X21a0iMjpB05JSYJHaOC3hDALIQccl9JzIf5HcQbUN4",
        link:"https://www.socialnationnow.com/",
        github:false
    }
];

const ProjectsSection = () => {
    return (
        <div>
            <section id="projects" className="projects-section">
                <div className="container">
                    <h2 className="section-title">🚀 My Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="project-img-container">
                                        <img src={project.logo} alt={project.name} className="project-logo" />
                                    </div>
                                    <h3 className="project-name">{project.name}</h3>
                                    {project.github && <FaGithub className="github-icon" />}
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

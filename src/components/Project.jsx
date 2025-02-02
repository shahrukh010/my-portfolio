import React from "react";

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            name: "Portfolio Website",
            logo: "https://via.placeholder.com/150", // Replace with your actual logo URL
            link: "/project/portfolio", // Link to the detailed project page
        },
        {
            id: 2,
            name: "E-Commerce App",
            logo: "https://via.placeholder.com/150", // Replace with your actual logo URL
            link: "/project/ecommerce", // Link to the detailed project page
        },
        {
            id: 3,
            name: "Task Manager",
            logo: "https://via.placeholder.com/150", // Replace with your actual logo URL
            link: "/project/task-manager", // Link to the detailed project page
        },
        {
            id: 4,
            name: "Ecommerce Website",
            logo: "https://via.placeholder.com/150", // Replace with your actual logo URL
            link: "/project/portfolio", // Link to the detailed project page
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            className="project-card"
                        >
                            <img
                                src={project.logo}
                                alt={`${project.name} Logo`}
                                className="project-logo"
                            />
                            <h3>{project.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

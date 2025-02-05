import React, { useEffect } from "react";
import Footer from "./Footer";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="portfolio">
      {/* Header */}
      <header>
        <h1>🚀 Welcome to My Portfolio</h1>
        <p>
          Hi, I'm a <span className="highlight">Backend Software Developer</span> passionate about scalable systems and performance optimization.
        </p>
      </header>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>My Skills 💡</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={`${skill.icon} skill-icon`}></i>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h2>📩 Contact Me</h2>
          <p className="contact-intro">
            I'm open to collaborations, new opportunities, or just a chat. Feel free to reach out!
          </p>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />

    </div>
  );
};

// Skills Data (Array for easy customization)
const skills = [
  { icon: "fas fa-server", title: "Node.js & Express.js", description: "Building fast and scalable backend services." },
  { icon: "fab fa-python", title: "Python & Django", description: "Developing robust web applications." },
  { icon: "fas fa-database", title: "Database Management", description: "SQL, PostgreSQL & NoSQL databases." },
  { icon: "fas fa-code", title: "RESTful APIs", description: "Designing efficient API architectures." },
  { icon: "fas fa-project-diagram", title: "GraphQL", description: "Optimized querying for applications." },
  { icon: "fab fa-aws", title: "Cloud & DevOps", description: "Deploying with AWS, Docker, Kubernetes." },
  { icon: "fas fa-shield-alt", title: "Authentication & Security", description: "Secure authentication with JWT, OAuth." },
  { icon: "fas fa-cogs", title: "Microservices", description: "Architecting distributed systems." },
  { icon: "fas fa-bug", title: "Testing & Debugging", description: "Writing unit and integration tests." },
  { icon: "fas fa-sync-alt", title: "CI/CD Pipelines", description: "Automating workflows with GitHub Actions." },
];

export default Portfolio;

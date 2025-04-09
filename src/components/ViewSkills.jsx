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
  { icon: "fab fa-java", title: "Core Java", description: "Object-oriented programming and backend development using Java." },
  { icon: "fas fa-leaf", title: "Spring Boot", description: "Building scalable backend APIs and microservices with Spring Boot." },
  { icon: "fas fa-database", title: "Database Management", description: "SQL, Oracle12C & NoSQL databases." },
  { icon: "fas fa-code", title: "RESTful APIs", description: "Designing efficient API architectures." },
  { icon: "fab fa-aws", title: "Cloud & DevOps", description: "Worked with various AWS services for cloud deployment and management." },
  { icon: "fas fa-shield-alt", title: "Authentication & Security", description: "Secure authentication with JWT, OAuth." },
  { icon: "fas fa-bug", title: "Testing & Debugging", description: "Writing unit and integration tests." },
  { icon: "fas fa-sync-alt", title: "CI/CD Pipelines", description: "Automating workflows with GitHub Actions." },
  { icon: "fab fa-python", title: "Python", description: "Used in data science and machine learning projects." },
  {
  icon: "fab fa-python",
  title: "Python Libraries",
  description: "Proficient in NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn for building data-driven applications."
},
{
  icon: "fas fa-chart-line", // 📈
  title: "Data Science",
  description: "Exploratory data analysis, statistical modeling, and data storytelling using Python."
},
{
  icon: "fas fa-database", // 💾
  title: "Data Analysis",
  description: "Data wrangling, aggregation, and visualization with Pandas, NumPy, and Matplotlib."
},
];

export default Portfolio;

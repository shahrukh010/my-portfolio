import React from "react";
import './Contact.css'


const Contact = () => {
  return (
    <section className="contact-container">
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
  );
};

export default Contact;

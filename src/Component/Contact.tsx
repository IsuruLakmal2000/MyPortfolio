import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const finalSubject = subject || "Portfolio Inquiry";
    const body = `Name: ${name}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:isurulakmalid13@gmail.com?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      id="contact"
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <div className="contact-container">
        <motion.div className="contact-header" variants={fadeInVariants}>
          <h1>Let's Connect!</h1>
          <p>Feel free to reach out for collaborations, opportunities, or just a friendly chat.</p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={fadeInVariants}>
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p>isurulakmalid13@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h3>Whatsapp</h3>
                  <p>+94 78 55 22 049</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Location</h3>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form" variants={fadeInVariants}>
            <h2>Send a Message</h2>
            <form onSubmit={handleEmailSubmit}>
              <input name="name" type="text" placeholder="Your Name" required />
              <input name="subject" type="text" placeholder="Subject" required />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
              ></textarea>
              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div className="contact-social" variants={fadeInVariants}>
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/isuru-lakmal-your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="social-icon" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

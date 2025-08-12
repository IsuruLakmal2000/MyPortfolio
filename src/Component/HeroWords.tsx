import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroWords.css";
import {
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";

const HeroWords: React.FC = () => {
  // Variants for fade-in animation
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="hero">
        <motion.div
          className="hero-word"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <motion.div className="first-row" variants={fadeInVariants}>
            <span className="big-text">SOFTWARE</span>
            <div className="location">
              <span className="small-text">Based on</span>
              <span className="small-text">Colombo</span>
            </div>
          </motion.div>
          <motion.div className="second-row" variants={fadeInVariants}>
            <span className="big-text">ENGINEER</span>
          </motion.div>
          <motion.div className="third-row" variants={fadeInVariants}>
            <div className="connect">
              <FaLinkedin className="connect-icon" />
              <span className="small-text">Let's Connect</span>
            </div>
            <span className="big-text" style={{ color: "#f8fc01" }}>
              FULL STACK
            </span>
          </motion.div>
          <motion.div className="fourth-row" variants={fadeInVariants}>
            <span className="big-text">GAME DEVELOPER</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="social-links"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <motion.div className="linkedin" variants={fadeInVariants}>
            <a href="https://www.linkedin.com/your-profile-url" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon small-icon" />
            </a>
          </motion.div>
          <motion.div className="github" variants={fadeInVariants}>
            <FaGithub className="icon small-icon" />
          </motion.div>
          <motion.div className="instagram" variants={fadeInVariants}>
            <FaInstagramSquare className="icon small-icon" />
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="gradient">
        <div className="container"></div>
      </div> */}
    </>
  );
};

export default HeroWords;
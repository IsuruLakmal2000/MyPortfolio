import React from "react";
import { motion } from "framer-motion";
import "../styles/WorkExp.css";
import isa from "../assets/isa-logo.png";

const WorkExp: React.FC = () => {
  // Variants for animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="workExp-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="content-wrapper"
      >
        <motion.h1 variants={fadeInVariants}>Work Experience</motion.h1>
        <motion.div className="company-detail" variants={fadeInVariants}>
          <div className="logo">
            <img src={isa} alt="ISA Logo" />
          </div>
          <div className="details">
            <motion.div variants={fadeInVariants}>
              <h2>Software Engineer - Intern</h2>
            </motion.div>
            <motion.div className="place" variants={fadeInVariants}>
              <span>at Information System Associates (ISA)</span>
            </motion.div>
            <motion.div className="time" variants={fadeInVariants}>
              <span>2023 September - 2024 March</span>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <span className="bg">
                - Information Systems Associates (ISA) is a leading IT <br />
                provider in the aviation industry, specializing in innovative{" "}
                <br />
                software solutions for airlines, airports, and the travel sector.
              </span>
              <span className="sm">
                Information Systems Associates (ISA) is a leading IT provider in
                the aviation industry, specializing in innovative software
                solutions for airlines, airports, and the travel sector.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkExp;
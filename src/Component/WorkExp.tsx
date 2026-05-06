import React from "react";
import { motion } from "framer-motion";
import "../styles/WorkExp.css";
import circularx from "../assets/circularx.webp";
import isa from "../assets/isa-logo.png";

const WorkExp: React.FC = () => {
  // Variants for animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const experiences = [
    {
      role: "Software Engineer - Intern",
      company: "Information System Associates (ISA)",
      time: "2023 September - 2024 March",
      descriptionDesktop: (
        <>
          - Information Systems Associates (ISA) is a leading IT <br />
          provider in the aviation industry, specializing in innovative <br />
          software solutions for airlines, airports, and the travel sector.
        </>
      ),
      descriptionMobile:
        "Information Systems Associates (ISA) is a leading IT provider in the aviation industry, specializing in innovative software solutions for airlines, airports, and the travel sector.",
      logo: isa,
      logoAlt: "ISA Logo",
    },
    {
      role: "CEO, Founder",
      company: "CircularX",
      descriptionDesktop: (
        <>- CircularX is a mobile app development company run entirely by me.</>
      ),
      descriptionMobile:
        "CircularX is a mobile app development company run entirely by me.",
      logo: circularx,
      logoAlt: "CircularX Logo",
    },
    {
      role: "Co-Founder",
      company: "Worthsoftwares",
      descriptionDesktop: (
        <>
          - Worthsoftwares is a software and IT solutions company focused on
          delivering business-ready systems.
        </>
      ),
      descriptionMobile:
        "Worthsoftwares is a software and IT solutions company focused on delivering business-ready systems.",
      logo: circularx,
      logoAlt: "CircularX Logo",
    },
  ];

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
        <div className="company-list">
          {experiences.map((experience) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              className="company-detail"
              variants={fadeInVariants}
            >
              {experience.logo ? (
                <div className="logo">
                  <img src={experience.logo} alt={experience.logoAlt} />
                </div>
              ) : null}
              <div className="details">
                <motion.div variants={fadeInVariants}>
                  <h2>{experience.role}</h2>
                </motion.div>
                <motion.div className="place" variants={fadeInVariants}>
                  <span>at {experience.company}</span>
                </motion.div>
                {experience.time ? (
                  <motion.div className="time" variants={fadeInVariants}>
                    <span>{experience.time}</span>
                  </motion.div>
                ) : null}
                <motion.div variants={fadeInVariants}>
                  <span className="bg">{experience.descriptionDesktop}</span>
                  <span className="sm">{experience.descriptionMobile}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExp;
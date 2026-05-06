import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../styles/Biography/Biography.css";
import "../styles/Biography/BiographyMobile.css";
import {
  DiCode,
  DiAndroid,
  DiDatabase,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiTerminal,
  DiUnitySmall,
  DiVisualstudio,
} from "react-icons/di";
import isuruImage from "../assets/isuru.jpeg";

const Biography: React.FC = () => {
  const icons = [
    <DiCode />,
    <DiAndroid />,
    <DiDatabase />,
    <DiHtml5 />,
    <DiJavascript1 />,
    <DiNodejs />,
    <DiReact />,
    <DiTerminal />,
    <DiUnitySmall />,
    <DiVisualstudio />,
  ];

  // Define custom positions for each icon
  const customPositions = [
    { top: "10%", left: "15%" },
    { top: "13%", left: "50%" },
    { top: "30%", left: "80%" },
    { top: "40%", left: "15%" },
    { top: "50%", left: "85%" },
    { top: "60%", left: "10%" },
    { top: "80%", left: "40%" },
    { top: "80%", left: "70%" },
    { top: "90%", left: "30%" },
    { top: "5%", left: "75%" },
  ];

  // Variants for fade-in animation
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Intersection observer for fade-in effect
  const { ref: infoTextRef, inView: infoTextInView } = useInView({ triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });

  return (
    <div className="biography-section">
      {/* Main content */}
      <motion.div
        className="info-text"
        ref={infoTextRef}
        initial="hidden"
        animate={infoTextInView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <h1>
          "Committed to learning, adapting, and delivering
          <span className="span-text"> results.</span> "
        </h1>
      </motion.div>
      <motion.div
        className="my-self"
        initial="hidden"
        animate={infoTextInView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <p>
          I am a driven and self-motivated professional with a strong ability to
          tackle challenges independently or collaboratively. Committed to
          continuous learning and staying at the forefront of emerging
          technologies, I bring value through innovative solutions and a passion
          for excellence. Ready to contribute to organizational success with a
          proactive and results-oriented mindset
        </p>
      </motion.div>

      <motion.div
        className="about-section"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <div className="about-image">
          <img src={isuruImage} alt="Isuru portrait" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I am Isuru, a software developer focused on building reliable web and
            mobile experiences. I enjoy turning ideas into clean, maintainable
            products that are easy to use.
          </p>
          <p>
            If you want to improve your business with IT solutions, I can help
            you automate workflows, integrate data, and ship customer-facing
            features that increase engagement. My focus is measurable results:
            faster operations, better customer experience, and scalable systems.
          </p>
        </div>
      </motion.div>

      <div className="icon-container">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="custom-icon"
            style={customPositions[index]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            {Icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Biography;
// src/Component/Biography.tsx
import React from "react";
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
import { FaJava, FaAws } from "react-icons/fa";
import { IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeScss } from "react-icons/bs";
import { SiFlutter, SiDart, SiJira, SiPhp } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { RiAngularjsFill } from "react-icons/ri";

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

  return (
    <div className="biography-section">
      {/* Main content */}
      <div className="info-text">
        <h1>
          "Committed to learning, adapting, and delivering
          <span className="span-text"> results.</span> "
        </h1>
      </div>
      <div className="my-self">
        <p>
          I am a driven and self-motivated professional with a strong ability to
          tackle challenges independently or collaboratively. Committed to
          continuous learning and staying at the forefront of emerging
          technologies, I bring value through innovative solutions and a passion
          for excellence. Ready to contribute to organizational success with a
          proactive and results-oriented mindset
        </p>
      </div>

      <div className="tech-stack">
        <div>
          <h1>Technologies</h1>
        </div>

        <div className="tech-icon-container">
          <div className="card">
            <FaJava className="tech-icons" />
            <span className="subtitle">Java</span>
          </div>
          <div className="card">
            <DiDatabase className="tech-icons" />
            <span className="subtitle">MySql</span>
          </div>
          <div className="card">
            <DiUnitySmall className="tech-icons" />
            <span className="subtitle">Unity</span>
          </div>
          <div className="card">
            <DiReact className="tech-icons" />
            <span className="subtitle">React</span>
          </div>
          <div className="card">
            <DiNodejs className="tech-icons" />
            <span className="subtitle">NodeJs</span>
          </div>
          <div className="card">
            <DiHtml5 className="tech-icons" />
            <span className="subtitle">HTML</span>
          </div>
          <div className="card">
            <SiFlutter className="tech-icons" />
            <span className="subtitle">Flutter</span>
          </div>
          <div className="card">
            <IoLogoCss3 className="tech-icons" />
            <span className="subtitle">CSS</span>
          </div>
          <div className="card">
            <BsFiletypeScss className="tech-icons" />
            <span className="subtitle">SCSS</span>
          </div>
          <div className="card">
            <IoLogoFirebase className="tech-icons" />
            <span className="subtitle">Firebase</span>
          </div>
          <div className="card">
            <BiLogoSpringBoot className="tech-icons" />
            <span className="subtitle">Springboot</span>
          </div>
          <div className="card">
            <FaAws className="tech-icons" />
            <span className="subtitle">AWS</span>
          </div>
          <div className="card">
            <SiDart className="tech-icons" />
            <span className="subtitle">Dart</span>
          </div>
          <div className="card">
            <DiJavascript1 className="tech-icons" />
            <span className="subtitle">Javascript</span>
          </div>
          <div className="card">
            <SiJira className="tech-icons" />
            <span className="subtitle">Jira</span>
          </div>
          <div className="card">
            <FaGitAlt className="tech-icons" />
            <span className="subtitle">Git</span>
          </div>
          <div className="card">
            <RiAngularjsFill className="tech-icons" />
            <span className="subtitle">Angular</span>
          </div>
          <div className="card">
            <SiPhp className="tech-icons" />
            <span className="subtitle">Flutter</span>
          </div>
          <div className="card">
            <IoLogoCss3 className="tech-icons" />
            <span className="subtitle">CSS</span>
          </div>
        </div>
        <div className="tech-icon-container"></div>
      </div>

      <div className="icon-container">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="custom-icon"
            style={customPositions[index]}
          >
            {Icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biography;

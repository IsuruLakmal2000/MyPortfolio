// src/Component/Biography.tsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
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
          <div className="tech-icon-wrapper">
            <div className="card item1">
              <FaJava className="tech-icons" />
              <span className="subtitle">Java</span>
            </div>
            <div className="card item2">
              <DiDatabase className="tech-icons" />
              <span className="subtitle">MySql</span>
            </div>
            <div className="card item3">
              <DiUnitySmall className="tech-icons" />
              <span className="subtitle">Unity</span>
            </div>
            <div className="card item4">
              <DiReact className="tech-icons" />
              <span className="subtitle">React</span>
            </div>
            <div className="card item5">
              <DiNodejs className="tech-icons" />
              <span className="subtitle">NodeJs</span>
            </div>
            <div className="card item6">
              <DiHtml5 className="tech-icons" />
              <span className="subtitle">HTML</span>
            </div>
            <div className="card item7">
              <SiFlutter className="tech-icons" />
              <span className="subtitle">Flutter</span>
            </div>
            <div className="card item8">
              <IoLogoCss3 className="tech-icons" />
              <span className="subtitle">CSS</span>
            </div>
            <div className="card item9">
              <BsFiletypeScss className="tech-icons" />
              <span className="subtitle">SCSS</span>
            </div>
            <div className="card item10">
              <IoLogoFirebase className="tech-icons" />
              <span className="subtitle">Firebase</span>
            </div>
            <div className="card item11">
              <BiLogoSpringBoot className="tech-icons" />
              <span className="subtitle">Springboot</span>
            </div>
            <div className="card item12">
              <FaAws className="tech-icons" />
              <span className="subtitle">AWS</span>
            </div>
            <div className="card item13">
              <SiDart className="tech-icons" />
              <span className="subtitle">Dart</span>
            </div>
            <div className="card item14">
              <DiJavascript1 className="tech-icons" />
              <span className="subtitle">Javascript</span>
            </div>
            <div className="card item15">
              <SiJira className="tech-icons" />
              <span className="subtitle">Jira</span>
            </div>
            <div className="card item16">
              <FaGitAlt className="tech-icons" />
              <span className="subtitle">Git</span>
            </div>
            <div className="card item17">
              <RiAngularjsFill className="tech-icons" />
              <span className="subtitle">Angular</span>
            </div>
            <div className="card item18">
              <SiPhp className="tech-icons" />
              <span className="subtitle">Flutter</span>
            </div>
            {/* <div className="card item18">
            <IoLogoCss3 className="tech-icons" />
            <span className="subtitle">CSS</span>
          </div> */}
          </div>
        </div>
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

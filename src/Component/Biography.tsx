// src/Component/Biography.tsx
import React from "react";
import "../styles/Biography.css";
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
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h1>
      </div>
      <div className="my-self">
        <p>
          I'm a 17 year-old passionate fullstack web developer dedicated to
          turning ideas into creative solutions. I specialize in creating
          seamless and intuitive user experiences. I'm involved in every step of
          the process: from discovery and design to development, testing, and
          deployment. I focus on delivering high-quality, scalable results that
          drive positive user experiences.
        </p>
      </div>

      {/* Custom positioned icons */}
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

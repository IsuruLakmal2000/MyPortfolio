import React, { useEffect } from "react";
import "../styles/WorkExp.css";
import isa from "../assets/isa-logo.png";

const WorkExp: React.FC = () => {
  return (
    <div className="workExp-section">
      <h1>Work Experience</h1>
      <div className="company-detail">
        <div className="logo">
          <img src={isa} alt="" />
        </div>
        <div className="details">
          <div>
            <h2>Software Engineer - Intern</h2>
          </div>
          <div className="place">
            <span>at Information System Associates (ISA)</span>
          </div>
          <div className="time">
            <span>2023 September - 2024 March</span>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;

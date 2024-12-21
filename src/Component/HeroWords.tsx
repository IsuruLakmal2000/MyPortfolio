import React from "react";
import "../styles/HeroWords.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
  FaGooglePlay,
} from "react-icons/fa";

const HeroWords: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-word">
        <div className="first-row">
          <span className="big-text">SOFTWARE</span>
          <div className="location">
            <span className="small-text">Based on</span>
            <span className="small-text">Colombo</span>
          </div>
        </div>
        <div className="second-row">
          <span className="big-text">ENGINEER</span>
        </div>
        <div className="third-row">
          <div className="connect">
            <FaLinkedin className="connect-icon" />
            <span className="small-text">Let's Connect</span>
          </div>
          <span className="big-text">FULL STACK</span>
        </div>
        <div className="fourth-row">
          <span className="big-text">GAME DEVELOPER</span>
        </div>
      </div>
      <div className="social-links">
        <div className="linkedin">
          <FaLinkedin className="icon" />
        </div>
        <div className="github">
          <FaGithub className="icon" />
        </div>
        <div className="twitter">
          <FaTwitter className="icon" />
        </div>
        <div className="instagram">
          <FaInstagramSquare className="icon" />
        </div>
        <div className="googleplay">
          <FaGooglePlay className="icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroWords;

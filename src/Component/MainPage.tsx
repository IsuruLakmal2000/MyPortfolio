// src/Component/NavBar.tsx
import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroWords";
import Biorgraphy from "./Biography";
import Projects from "./Projects";
import WorkExperience from "./WorkExp";
import "../styles/MainPage.css";

const MainPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="main-page">
        <HeroSection />
      </div>
      <div className="about-me">
        <Biorgraphy />
      </div>
      <div>
        <WorkExperience />
      </div>
      <div>
        <Projects />
      </div>
    </>
  );
};

export default MainPage;

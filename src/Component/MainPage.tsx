// src/Component/NavBar.tsx
import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroWords";
import Biorgraphy from "./Biography";
import Projects from "./Projects";
import WorkExperience from "./WorkExp";
import Contact from "./Contact";
import CursorEffect from "./CursorEffect";
import "../styles/MainPage.css";

const MainPage: React.FC = () => {
  return (
    <>
      <CursorEffect />
      <NavBar />
      <div id="home" className="main-page">
        <HeroSection />
      </div>
      <div id="about" className="about-me">
        <Biorgraphy />
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Contact />
    </>
  );
};

export default MainPage;

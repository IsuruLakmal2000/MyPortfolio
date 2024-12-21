// src/Component/NavBar.tsx
import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroWords";
import Biorgraphy from "./Biography";
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
    </>
  );
};

export default MainPage;

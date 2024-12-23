// MovieSlider.tsx
import React, { useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/Projects.css"; // Import your custom CSS for the component

const projectDetails = [
  {
    title: "Organic Quest",
    subtitle: "A gamified mobile application for A/L students",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundColor: "rgb(206, 17, 17)",
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl22jLqT6E6AsoW4PJDKFNGsm4mjfHT8rjkmm7Zlcqu1csnZSuFMORva2JRwrIevYMals&usqp=CAU')",
  },
  {
    title: "Project Two",
    subtitle: "Subtitle for project two",
    description:
      "This is a description for project two. It explains the main idea.",
    backgroundColor: "rgb(0, 140, 255)",
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LJRDk65vWVnWnAytPJcuHGM-KTpD5MtecA&s')", // Background color for this project
  },
  {
    title: "Project Three",
    subtitle: "Subtitle for project three",
    description:
      "This is a description for project three. It explains the main idea.",
    backgroundColor: "rgb(10, 184, 111)",
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBHV3dVi8QkL2AdktJyqrbYfAq6zDeUKVh5q1kUwMvroM3lFtV6nG6ToVkmObOukavqU&usqp=CAU')",
  },
  {
    title: "Project Four",
    subtitle: "Subtitle for project four",
    description:
      "This is a description for project four. It explains the main idea.",
    backgroundColor: "rgb(211, 122, 7)",
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQdIoBX_1Nba2yohYwGxkg587Vo68fvsz2MTe66KmFR88U9KTBh1YS8XtCKkH95ciZDM&usqp=CAU')",
  },
  // Add more projects as needed...
];
const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(projectDetails[0]);

  const handleSlideChange = (swiper: any) => {
    // Update the current project details based on the active slide
    setCurrentProject(projectDetails[swiper.activeIndex]);
  };
  return (
    <>
      <div className="project-section">
        <div
          className="overlay"
          style={{ backgroundColor: currentProject.backgroundColor }}
        ></div>{" "}
        {/* Overlay */}
        <div className="title">
          <h1>Feast Your Eyes on What I've Cooked!</h1>
        </div>
        <div className="double-side">
          <div className="left-side">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              onSlideChange={handleSlideChange}
              className="mySwiper"
            >
              {projectDetails.map((_, index) => (
                <SwiperSlide key={index}>{`Slide ${index + 1}`}</SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="right-side">
            <div className="about-project">
              <div className="title">
                <h1>{currentProject.title}</h1>
              </div>
              <div className="subtitle">
                <span>{currentProject.subtitle}</span>
              </div>
              <div className="description">{currentProject.description}</div>
              <div className="additional-details">
                {/* //buttons or something */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

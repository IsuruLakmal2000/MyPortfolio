import React, { useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/Projects.css";

import blade from "../assets/projects/blade.jpg";
import countdown from "../assets/projects/countdown.jpg";
import departure from "../assets/projects/departure.jpg";
import legacy from "../assets/projects/legacy defenders.jpg";
import onlinecheck from "../assets/projects/online checking.jpg";
import organic from "../assets/projects/organic-quest.png";
import osindi from "../assets/projects/osindi.jpg";
import water from "../assets/projects/water.jpg";
const projectDetails = [
  {
    title: "Organic Quest",
    subtitle:
      "A gamified mobile application for A/L students (Individual Project)",
    description:
      "Organic Quest is an engaging and interactive educational game designed to test and enhance knowledge of organic chemistry. Players identify molecules and reactions through various levels, while earning rewards, unlocking achievements, and competing on leaderboards. The game’s gamified structure makes complex topics accessible, turning learning into a fun and motivating experience. Ideal for students and professionals alike, Organic Quest offers an innovative approach to mastering organic chemistry concepts. With its focus on progress tracking and skill development, this game provides a dynamic and enjoyable way to deepen understanding and engage with the subject matter effectively.  ",
    // backgroundColor: "rgb(206, 17, 17)",
    technology: " Unity, C#, NodeJs, Firebase Realtime database,Cloud function",
    backgroundImage: organic,
  },
  {
    title: "Online Checking System",
    subtitle: "Contribute this project as a Trainee Software Engineer at ISA",
    description:
      "Contributed to a team to enhance and implement new features on an existing online checking system, resolving issues and improving functionality. Worked on both front-end and back-end tasks, ensuring seamless integration of updates and maintaining system reliability through testing and optimization.",
    // backgroundColor: "rgb(0, 140, 255)",
    technology:
      " Java, Springboot, Angular js, Javascript, Apache velocity, Ant Design, HTML ,CSS",
    backgroundImage: onlinecheck,
  },
  {
    title: "Departure Control System",
    subtitle: "Contribute this project as a Trainee Software Engineer at ISA",
    description:
      "Developed and enhanced user interface components and resolved various bugs and issues,improving system usability and user experience.",
    backgroundColor: "rgb(10, 184, 111)",
    technology: " Java, Springboot, Java Swing",
    backgroundImage: departure,
  },
  {
    title: "Countdown Dream",
    subtitle:
      "Track Time, Stay on Schedule - Time Countdown App (Individual Project)",
    description:
      "Developed a Time Countdown app designed to help users efficiently track and manage time for various tasks or events. The app features customizable timers, notifications, and an intuitive interface for easy setup and monitoring. Focused on delivering a simple yet effective solution for time management.",
    backgroundColor: "rgb(211, 122, 7)",
    technology: " Flutter ,Firebase realtime database",
    backgroundImage: countdown,
  },
  {
    title: "Blade",
    subtitle: "Saloon Finding and Managing Mobile App (Individual Project)",
    description:
      " Developed a mobile application bridging salon owners and customers, enabling salon owners to showcase profiles, manage services, set pricing, handle bookings, and highlight promotions to boost visibility. For customers, the app offers features to locate nearby salons, view detailed profiles with services and pricing, schedule appointments, and submit post-service reviews, creating a seamless and efficient salon experience.",
    backgroundColor: "rgb(211, 122, 7)",
    technology: " Flutter, NodeJs, MYSQL, AWS, Heroku",
    backgroundImage: blade,
  },
  {
    title: "Osindi Pharmacy",
    subtitle: "Web Application for Osindi pharmacy (Collabarative project)",
    description:
      " Collaborated with a team to design the user interface for a fully functional web application that facilitates order management, supplier management, and inventory management forSandamini Pharmacy.",
    backgroundColor: "rgb(211, 122, 7)",
    technology: " React , Shadcn, And design, CSS",
    backgroundImage: osindi,
  },
  {
    title: "Water Tracker",
    subtitle: "Stay hydrated, stay healthy. (Individual Project)",
    description:
      " Developed an intuitive mobile app to help users track daily water intake, featuring personalized hydration goals, reminders, and progress visualizations to encourage healthier hydration habits and improve overall well-being.",
    backgroundColor: "rgb(211, 122, 7)",
    technology: " Flutter, SQLite",
    backgroundImage: water,
  },
  // Add more projects as needed...
];
const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(projectDetails[0]);

  const handleSlideChange = (swiper: any) => {
    setCurrentProject(projectDetails[swiper.activeIndex]);
  };

  return (
    <>
      <div className="project-section">
        <div
          className="overlay"
          style={{ backgroundImage: `url(${currentProject.backgroundImage})` }}
        ></div>{" "}
        {/* Overlay with background image */}
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
              {projectDetails.map((project, index) => (
                <SwiperSlide key={index}></SwiperSlide>
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
              <div className="description">
                <span>{currentProject.description}</span>
              </div>
              <div className="technology">
                <span>Technologies used: {currentProject.technology}</span>
              </div>
              <div className="additional-details">
                {/* Additional buttons or features can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

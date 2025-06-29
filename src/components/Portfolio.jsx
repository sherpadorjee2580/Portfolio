import Navbar from "./Navbar";
import HomeInfo from "./HomeInfo";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Experience from "./Experience";
import Sidebar from "./Sidebar";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState, useRef, useEffect } from "react";
import "../Portfolio.css";
import { FaAngleUp } from "react-icons/fa6";

const Portfolio = () => {
  const [sidebar, SetSidebar] = useState(-600);
  const [borderRadius, SetBorderRadius] = useState("100%");
  const [isOpen, SetIsOpen] = useState(null);

  const aboutMeRef = useRef(null);
  const experiencerRef = useRef(null);
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const showSidebar = () => {
    SetSidebar(0);
    SetBorderRadius(0);
    SetIsOpen(true);
  };
  const hideSidebar = () => {
    SetSidebar(-600);
    SetBorderRadius("50%");
    SetIsOpen(false);
  };

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    hideSidebar();
  };

  const scrollToExperience = () => {
    experiencerRef.current?.scrollIntoView({ behavior: "smooth" });
    hideSidebar();
  };

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
    hideSidebar();
  };

  const scrollToSkill = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
    hideSidebar();
  };

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
    hideSidebar();
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    hideSidebar();
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     if (sidebar === 0) {
  //       hideSidebar();
  //     }
  //   });
  //   window.removeEventListener("click", hideSidebar);
  // }, [sidebar]);

  return (
    <div className="portfolio">
      <div className="arrow">
        <FaAngleUp onClick={scrollTop} className="icon" />
      </div>
      <Sidebar
        borderRadius={borderRadius}
        sidebar={sidebar}
        scroll={{
          scrollToAboutMe,
          scrollToExperience,
          scrollToHome,
          scrollToSkill,
          scrollToProject,
          scrollToContact,
        }}
      />
      <Navbar
        showSidebar={showSidebar}
        hideSidebar={hideSidebar}
        isOpen={isOpen}
      />
      <HomeInfo ref={homeRef} />
      <Aboutme ref={aboutMeRef} />
      <Skills ref={skillRef} />
      <Experience ref={experiencerRef} />
      <Project ref={projectRef} />
      {/* <Articles /> */}
      <Contact ref={contactRef} />
      <Footer/>
    </div>
  );
};

export default Portfolio;

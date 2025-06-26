import React from "react";
import { SiGmail } from "react-icons/si";

import "../style/Sidebar.css";

const Sidebar = ({ sidebar, borderRadius, scroll }) => {
  const social = [
    { name: "Github", link: "https://github.com/sherpadorjee2580" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/dorjee-sherpa-ds2580/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/dorji.lama.sherpa.2025.com",
    },
  ];

  const menu = [
    "Home",
    "About Me",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <div
      style={{
        right: sidebar,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      }}
      className="sidebarContainer"
    >
      <div className="wrapper">
        <div className="sidebar-content">
          <div className="social">
            <div className="title">
              <p>Social</p>
            </div>
            <ul className="websites">
              {social.map((social, idx) => (
                <li key={idx}>
                  <a href={social.link} target="_blank">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu">
            <div className="title">
              <p>Menu</p>
            </div>
            <ul className="websites">
              {menu.map((menu, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    if (menu === "About Me") scroll.scrollToAboutMe();
                    else if (menu === "Experience") scroll.scrollToExperience();
                    else if (menu === "Home") scroll.scrollToHome();
                    else if (menu === "Skills") scroll.scrollToSkill();
                    else if (menu === "Projects") scroll.scrollToProject();
                    else if (menu === "Contact") scroll.scrollToContact();
                  }}
                >
                  <a>{menu}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <p>Get in touch</p>
          <div className="gmail">
            <div className="iconContainer">
              <SiGmail className="icon" />
            </div>
            <span>sherpadorjee2580@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

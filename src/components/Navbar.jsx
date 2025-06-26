import React from "react";
import "../style/Navbar.css";
import { useState } from "react";
import { IoReorderTwoOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ showSidebar, hideSidebar }) => {
  const [isOpen, SetIsOpen] = useState(null);

  const changeOpen = () => {
    SetIsOpen((prev) => !prev);
    showSidebar();
  };
  const changeClose = () => {
    SetIsOpen((prev) => !prev);
    hideSidebar();
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      document.querySelector(".navLeft").style.transform = `translateY(${0}px)`;
    } else {
      document.querySelector(
        ".navLeft"
      ).style.transform = `translateY(${-120}px)`;
    }
  });

  return (
    <nav>
      <div className="navLeft">
        <img
          src="logo.webp"
          alt="img"
          width={80}
        />
      
      </div>
      <div className="navRight">
        {isOpen ? (
          <RxCross2 onClick={changeClose} className="line" id="close" />
        ) : (
          <IoReorderTwoOutline
            id="open"
            onClick={changeOpen}
            className="line"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

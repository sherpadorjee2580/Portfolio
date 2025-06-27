import React, { forwardRef, useEffect } from "react";
import "../style/Project.css";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = forwardRef((props, ref) => {
  const projectRef = useRef();

  const project = [
    {
      projectName: "SCHOOL Website",
      tool1: "html",
      tool2: "CSS",
      tool3: "REACT",
      image: "schoolwebsite.webp",
    },
    {
      projectName: "JIRI Website",
      tool1: "html",
      tool2: "CSS",
      tool3: "REACT",
      image: "jiriImage.webp",
    },
    {
      projectName: "HAMRO Website",
      tool1: "html",
      tool2: "CSS",
      tool3: "REACT",
      image: "schoolwebsite.webp",
    },
  ];
  const [hoveredImg, setHoveredImg] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  });

  return (
    <div ref={ref} className="project">
      <div className="project-wrap">
        <motion.h4
          className="project-title"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          Projects
        </motion.h4>
        <div className="project-container">
          {project.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false }}
              ref={projectRef}
              key={idx}
              className="project-col"
              onMouseEnter={() => {
                if (!isMobile) {
                  setHoveredImg(idx);
                  setHovered(true);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setHoveredImg(null);
                  setHovered(false);
                }
              }}
            >
              {(hoveredImg === idx || isMobile) && (
                <AnimatePresence>
                  <motion.img
                    initial={{ opacity: 0, y: -250 }}
                    animate={{ opacity: 1, y: -100 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false }}
                    className="project-img"
                    src={item.image}
                    alt="jiri-website"
                    width={300}
                  />
                </AnimatePresence>
              )}
              <p className="project-col-title">{item.projectName}</p>
              <div className="tools-used">
                <span className="tools">{item.tool1}</span>
                <span className="circle"></span>
                <span className="tools">{item.tool2}</span>
                <span className="circle"></span>
                <span className="tools">{item.tool3}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Project;

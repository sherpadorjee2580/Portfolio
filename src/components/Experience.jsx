import React, { forwardRef } from "react";
import "../style/Experience.css";
import { GiStarSattelites } from "react-icons/gi";
import { motion } from "motion/react";

const Experience = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="experienceContainer">
      <div className="experience-wrapper">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="experience-titleContainer"
        >
          <GiStarSattelites className="star" />
          <h4 className="experience-title">My Experience </h4>
        </motion.div>
        <div className="experience">
          <motion.div
            className="parijat"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <div className="imageContainer">
              <img
                src="parijatlogo.webp"
                alt="parijatLogo"
                className="img-fluid"
              />
            </div>
            <p className="company">Parijat InfoTech</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: false }}
            className="position"
          >
            FrontEnd Trainee
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="duration"
          >
            Jan 2025 - Present
          </motion.p>
        </div>
      </div>
    </div>
  );
});

export default Experience;

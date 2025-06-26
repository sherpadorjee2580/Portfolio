import React, { forwardRef } from "react";
import "../style/Aboutme.css";
import { motion } from "motion/react";

const Aboutme = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="aboutMe">
      <div className="aboutMe-container">
        <div className="aboutMe-left">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="greeting"
          >
            Hi, I'm <span>Dorji</span>
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="aboutMe-right"
        >
          <p className="first-desc">
            I'm a frontend web developer dedicated to turning ideas into
            creative solutions. I specialize in creating seamless and intuitive
            user experiences.
          </p>
          <p className="second-desc">
            My approach focuses on creating scalable, high-performing solutions
            tailored to both user needs and business objectives. By prioritizing
            performance, accessibility, and responsiveness, I strive to deliver
            experiences that not only engage users but also drive tangible
            results.
          </p>
        </motion.div>
      </div>
    </div>
  );
});

export default Aboutme;

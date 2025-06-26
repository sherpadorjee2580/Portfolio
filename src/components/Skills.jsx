import React, { forwardRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import "../style/Skills.css";
import { motion } from "motion/react";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="skills">
      <div className="skillsContainer">
        <motion.div
          className="skill-title"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p>Skills</p>
        </motion.div>
        <div className="content">
          <div className="content-left">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              FrontEnd
            </motion.p>
          </div>
          <div className="content-right">
            <div className="row">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
                id="html"
                className="col"
              >
                <FaHtml5 className="icon" />
                <p>HTML</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                id="css"
                className="col"
              >
                <FaCss3Alt className="icon" />
                <p>CSS</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                id="sass"
                className="col"
              >
                <FaSass className="icon" />
                <p>SASS</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
                id="tailwind"
                className="col"
              >
                <RiTailwindCssFill className="icon" />
                <p>Tailwind</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
                id="javascript"
                className="col"
              >
                <IoLogoJavascript className="icon" />
                <p>JavaScript</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
                id="react"
                className="col"
              >
                <FaReact className="icon" />
                <p>React</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;

import React, { forwardRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import "../style/HomeInfo.css";
import { useState, useEffect } from "react";

const HomeInfo = forwardRef((props, ref) => {
  const name = "Dorji Sherpa";
  const letters = name.split("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevkey) => prevkey + 1);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div ref={ref} className="mainContainer">
      <div className="mainWrapper">
        <div className="containerLeft">
          <motion.p
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="greeting"
          >
            Hello,it's Me
          </motion.p>

          <div key={key} className="name">
            {letters.map((item, index) => (
              <motion.span
                key={index}
                className="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: false }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          <motion.span
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="shortInfo"
          >
            Frontend Fresher
          </motion.span>

          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="longInfo"
          >
            I’m a passionate frontend developer with a strong foundation in
            HTML, CSS, JavaScript, and React. As a fresher, I’ve built several
            responsive and user-friendly web projects that reflect my commitment
            to clean code and modern design. Eager to grow and contribute to
            real-world applications.
          </motion.p>

          <motion.div
            className="socialMedia"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <a
              href="https://www.facebook.com/dorji.lama.sherpa.2025"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/dorjilamasherpa/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/dorjee-sherpa-ds2580/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/DorjiSherpa2580" target="_blank">
              <FaXTwitter />
            </a>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: false }}
            className="downloadCV"
          >
            <a href="/DorjiSherpa__CV.docx" download="DorjiSherpa__CV.docx">
              Download CV
            </a>
          </motion.button>
        </div>
        <div className="containerRight">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
            className="imgContainer"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              src="ChatGPT_Image_May_15__2025__12_10_53_PM-removebg-preview.png"
              className="img-fluid"
              alt="my image"
              width={250}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default HomeInfo;

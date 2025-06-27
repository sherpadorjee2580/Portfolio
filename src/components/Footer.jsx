import React from "react";
import "../style/Footer.css";
import { easeIn, easeInOut, motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <motion.p
          className="footer-haveProject"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          Have a project in mind ?
        </motion.p>
        <motion.p
          className="gmail"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          sherpadorjee2580@gmail.com
        </motion.p>
        <motion.p
          className="design"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          Design & built by Dorji Sherpa
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

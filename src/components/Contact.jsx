import React, { forwardRef } from "react";
import "../style/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
  const [isloading, setIsloading] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsloading(true);

    setTimeout(() => {
      setIsloading(false);
      formRef.current.reset();
    }, 3000);

    emailjs
      .sendForm(
        "service_7spy8jf",
        "template_2aff7ma",
        formRef.current,
        "sYGqIcAiOOpB6WD8a"
      )
      .then(
        (result) => {
          console.log("success", result.text);
        },
        (error) => {
          console.error("Unsuccess", error.text);
        }
      );
  };

  return (
    <div ref={ref} className="contactUs">
      <div className="contactUs-container">
        <div className="contactUs-title">
          <motion.p
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: false }}
          >
            Contact Us
          </motion.p>
        </div>
        <div className="contactUs-formContainer">
          <form ref={formRef} onSubmit={sendEmail}>
            <motion.input
              name="name"
              type="text"
              placeholder="Name"
              required
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: false }}
            />
            <motion.input
              name="email"
              type="email"
              placeholder="Email"
              required
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false }}
            />
            <motion.textarea
              name="message"
              type="text"
              placeholder="Message"
              required
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: false }}
            />
            <motion.button
              className="submit"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: false }}
            >
              {" "}
              {isloading ? <div className="loader"></div> : "submit"}
            </motion.button>
          </form>
          <div className="contactUs-socialmedia">
            <p className="contact-title">Get In Touch</p>
            <div className="social-container">
              <FaFacebook className="contact-icon" />
              <p className="link">sherpadorjee2580@gmail.com</p>
            </div>
            <div className="social-container">
              <FaInstagram className="contact-icon" />
              <p className="link">https://www.instagram.com/dorjilamasherpa/</p>
            </div>
            <div className="social-container">
              <FaLinkedin className="contact-icon" />
              <p className="link">
                https://www.linkedin.com/in/dorjee-sherpa-ds2580/
              </p>
            </div>
            <div className="social-container">
              <FaTwitterSquare className="contact-icon" />
              <p className="link">https://x.com/DorjiSherpa2580</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;

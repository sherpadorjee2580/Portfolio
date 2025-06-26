import React, { useState, useEffect } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { motion } from "framer-motion";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [goUp, setGoUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setGoUp(true);
    }, 3000);
    setTimeout(() => {
      setVisible(true);
    }, 3500);
  });

  useEffect(()=>{
    
  })
  return (
    <div className="app">
      {visible ? (
        <Portfolio />
      ) : (
        <div className={`welcome ${goUp ? "slide-up" : ""}`}>
          <div className="container">
            <div className="texts">
              <motion.p
                className="welcomeMsg"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false }}
              >
                Welcome To My
              </motion.p>
              <div className="txt">
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                >
                  portfolio
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: false }}
                >
                  Website
                </motion.span>
              </div>
            </div>
            <motion.button
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="wel-btn"
            >
              Swagat Xa Hajur Lai
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

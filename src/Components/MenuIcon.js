import React from "react";

//ADDITIONALS
import { motion } from "framer-motion";

export default function MenuIcon({ toggle }) {
  const { menuOpen, setMenuOpen } = toggle;

  const toggleTop = {
    initial: { d: "M0 1L25 1" },
    animate: { d: "M1 17L26 1" },
  };
  const toggleBottom = {
    initial: { d: "M0 17L25 17" },
    animate: { d: "M1 1L26 17" },
  };
  const toggleMiddle = {
    initial: { opacity: 1, transition: { delay: 0.2 } },
    animate: { opacity: 0, transition: { duration: 0.2 } },
  };
  return (
    <div
      className="menu-section"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      <motion.svg
        width="34"
        height="18"
        viewBox="0 0 34 18"
        fill="none"
        initial="initial"
        animate={menuOpen ? "animate" : "initial"}
        exit="initial"
      >
        <g id="Simplified Menu">
          <motion.path
            id="Bottom"
            variants={toggleBottom}
            exit="initial"
            stroke="#6E6E6E"
            stroke-width="2"
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
          />
          <motion.path
            id="Middle"
            d="M0 9L25 9"
            variants={toggleMiddle}
            stroke="#6E6E6E"
            stroke-width="2"
          />
          <motion.path
            id="Top"
            variants={toggleTop}
            exit="initial"
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
            stroke="#6E6E6E"
            stroke-width="2"
          />
        </g>
      </motion.svg>
    </div>
  );
}

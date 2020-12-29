import React from "react";

import { motion } from "framer-motion";

export default function AdvancedIcon({ advanced }) {
  const variants = {
    parent: {
      initial: { opacity: 1 },
      animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
    },
    child: {
      initial: { x: 0 },
      animate: { x: 3, transition: { yoyo: Infinity, duration: 1.4 } },
    },
  };
  return (
    <div className="level-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="9"
        fill="none"
        viewBox="0 0 12 9"
      >
        <motion.g
          id="Advanced"
          fill="#6E6E6E"
          initial="initial"
          animate="animate"
          variants={variants.parent}
        >
          <motion.path
            id="Right"
            d="M8.753 9l-.61-.491L11.035 4.5 8.143.491 8.753 0 12 4.5 8.753 9z"
            variants={variants.child}
          ></motion.path>
          <motion.path
            id="Middle"
            d="M4.896 9l-.61-.491L7.178 4.5 4.286.491 4.896 0l3.247 4.5L4.896 9z"
            variants={variants.child}
          ></motion.path>
          {advanced && (
            <motion.path
              id="Left"
              d="M1.04 9l-.611-.491L3.32 4.5.429.491 1.039 0l3.247 4.5L1.039 9z"
              variants={variants.child}
            ></motion.path>
          )}
        </motion.g>
      </svg>
    </div>
  );
}

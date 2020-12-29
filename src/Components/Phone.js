import React from "react";
import { motion } from "framer-motion";

export default function Phone() {
  const variants = {
    initial: {
      rotate: -90,
      opacity: 0,
    },
    animate: {
      rotate: 0,
      opacity: [0, 0.5, 0.7, 1, 1, 1, 0],
    },
  };
  return (
    <motion.svg
      width="10%"
      height="50%"
      fill="none"
      viewBox="0 0 93 200"
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        repeat: Infinity,
        duration: 2,
        delay: 1,
        ease: "easeInOut",
      }}
    >
      <g id="Phone" stroke="#6E6E6E">
        <rect
          id="Device"
          width="91.143"
          height="199"
          x="0.5"
          y="0.5"
          rx="14.5"
        ></rect>
        <path id="Bottom" d="M28 193.5L64 193.5"></path>
        <path
          id="Top"
          fill="#6E6E6E"
          d="M21.519.5H70.48A6.5 6.5 0 0164 6.5H28a6.5 6.5 0 01-6.481-6z"
        ></path>
      </g>
    </motion.svg>
  );
}

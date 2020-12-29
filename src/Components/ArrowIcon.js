import React from "react";
import { motion } from "framer-motion";

export default function ArrowIcon({ direction }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      fill="none"
      viewBox="0 0 4 9"
    >
      <motion.path
        id="Arrow"
        fill="#6E6E6E"
        d="M1.04 9l-.611-.491L3.32 4.5.429.491 1.039 0l3.247 4.5L1.039 9z"
        initial={{
          x: direction !== "up" ? 0 : 0,
          y: direction === "up" ? 0 : 0,
          rotateY: direction === "left" ? 180 : 0,
          rotateZ: direction === "up" ? -90 : 0,
        }}
        animate={{
          x: direction !== "up" ? 4 : 0,
          y: direction === "up" ? -2 : 0,
          rotateY: direction === "left" ? 180 : 0,
          rotateZ: direction === "up" ? -90 : 0,
        }}
        transition={{ yoyo: Infinity, duration: 2 }}
      ></motion.path>
    </svg>
  );
}

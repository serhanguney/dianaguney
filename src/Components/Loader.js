import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const loaderColors = ["#6E6E6E", "#FFD1AE", "#6E6E6E"];
  return (
    <motion.div
      className="page-loader"
      initial={{ opacity: 1 }}
      // animate={load && { opacity: 0, transition: { duration: 0.1 } }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
      exit={{ opacity: 0 }}
    >
      <>
        <p>Please wait until the images are loaded</p>
        <motion.div>
          {loaderColors.map((color, n) => (
            <motion.div
              key={n}
              style={{
                display: "inline-block",
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                backgroundColor: color,
                margin: "5px",
              }}
              initial={{ y: 0 }}
              animate={{
                y: [0, 7, 0],
                transition: {
                  loop: Infinity,
                  duration: 0.8,
                  delay: n * 0.3,
                },
              }}
              exit={{ opacity: 0 }}
            ></motion.div>
          ))}
        </motion.div>
      </>
    </motion.div>
  );
}

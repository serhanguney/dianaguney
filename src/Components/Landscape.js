import React from "react";

import { motion } from "framer-motion";
import Phone from "./Phone";

export default function Landscape() {
  //classes

  const icon = {
    boxShadow: "4px 4px 16px rgba(0,0,0,0.3)",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="landscape"
    >
      <div className="landscape-text">
        <h1>Move to Portrait Mode please</h1>
        <p>
          This is a portrait-only website. I'd kindly like to ask you to use my
          website in portrait mode please.
        </p>
        <h2>Thank you :)</h2>
      </div>
      <Phone />
    </motion.div>
  );
}

import React, { useState } from "react";

//ADDITIONAOLS
import { motion } from "framer-motion";

export default function MenuTitle({ title, tranSwipe }) {
  const [length, setLength] = useState(title);
  const parent = {
    initial: { y: 0, transition: { staggerChildren: 0.008 } },
    animate: { y: 0, transition: { staggerChildren: 0.008 } },
  };

  const children = {
    initial: { y: 30, transition: tranSwipe(0.4) },
    animate: { y: 0, transition: tranSwipe(1) },
  };
  return (
    <motion.div
      className="title-container"
      initial="initial"
      animate="animate"
      exit="initial"
      variants={parent}
    >
      {length.map((letter, index) => (
        <motion.span key={index} variants={children}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

import React from "react";
import Circle from "../../Components/Desktop/Circle";
import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";
import { skills } from "../Skills";
import { motion } from "framer-motion";
export default function SkillsDesktop({ tranSwipe }) {
  const variantParent = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };
  const variantChild = {
    initial: { y: "100%" },
    animate: (i) => ({
      y: "0%",
      transition: { delay: i * 0.2, ...tranSwipe(1) },
    }),
    exit: (i) => ({ y: -100, transition: { delay: i * 0.2, ...tranSwipe(1) } }),
  };
  return (
    <div className="skills">
      <NavbarDesktop tranSwipe={tranSwipe} />
      <div className="skills-content">
        <motion.div
          className="text-content"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variantParent}
        >
          <span className="animation-container">
            <motion.h1 custom={0} variants={variantChild}>
              My Skills
            </motion.h1>
          </span>
          <span className="animation-container">
            <motion.p custom={1} variants={variantChild}>
              I am a passionate designer with love for story telling through
              architecture and cinema. My background is in Architecture and
              design
            </motion.p>
          </span>
          <span className="animation-container">
            <motion.p custom={2} variants={variantChild}>
              I have a major interest for film and set design. Combining digital
              media and physcial modeling I love to come up with new designs,
              scenes and stories to tell.
            </motion.p>
          </span>
          <span className="animation-container">
            <motion.p custom={3} variants={variantChild}>
              I am Skilled in{" "}
              <span>
                3D design {`&`} modelling, 2D illustrations and sketching and
                editing with Adobe CS6.
              </span>{" "}
              <br></br>I have a record of working with model making, graphical
              and technical presentations, conceptual design and art, sketches
              and drawings.
            </motion.p>
          </span>
        </motion.div>
        <motion.div
          className="visual-content"
          initial={{ scale: 0.7, opacity: 0, x: 200, y: -50 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
            transition: tranSwipe(1),
          }}
          exit={{
            scale: 0.4,
            opacity: 0,
            x: 1000,
            y: -50,
            transition: tranSwipe(2),
          }}
        >
          <Circle skills={skills} />
        </motion.div>
      </div>
    </div>
  );
}

import React from "react";

import NavbarDesktop from "../Components/Desktop/NavbarDesktop";
import { projects } from "../Projects/Projects";

import { motion, useAnimation } from "framer-motion";

export default function HomeDesktop({ transition }) {
  const { tranSwipe, tranSmooth } = transition;
  const hover = useAnimation();

  return (
    <div className="home-page">
      <div className="navbar-container">
        <NavbarDesktop tranSmooth={tranSmooth} tranSwipe={tranSwipe} />
      </div>
      <div className="content">
        <div className="text-column">
          <div className="text-container">
            <h1>
              Archituecture <br></br>
              {"&"} Illustrations
            </h1>
            <h2>
              I am a passionate designer with love for story telling through
              architecture and cinema.
            </h2>
            <p>
              My background is in Architecture and design and I have a major
              interest for film and set design. Combining digital media and
              physcial modeling I love to come up with new designs, scenes and
              stories to tell.I Have a record of working with model making,
              graphical and technical presentations, conceptual design and art,
              sketches and drawings.
            </p>
          </div>
          <motion.div className="button-container">
            <motion.div
              className="button"
              whileHover={() =>
                hover.start({ x: 0, y: 0, rotateZ: 0, scale: 1 })
              }
              onHoverEnd={() =>
                hover.start({
                  x: -2,
                  y: 3,
                  rotateZ: -3,
                  scale: 1.05,
                })
              }
            >
              <button>
                <span>MY PORTFOLIO</span>
              </button>
            </motion.div>
            <motion.div
              className="shadow"
              initial={{
                x: -2,
                y: 3,
                rotateZ: -3,
                scale: 1.05,
              }}
              animate={hover}
            ></motion.div>
          </motion.div>
        </div>
        <div className="visual-column">
          <div className="circle-container">
            <motion.div
              className="circle-1"
              animate={{
                rotate: 360,
              }}
              transition={{
                loop: Infinity,
                duration: 20,
                ease: "linear",
              }}
            ></motion.div>
            <div className="circle-2">
              <div className="circle-2-interior">
                {projects[0].photos.map(
                  (photo, index) =>
                    index < 9 && (
                      <motion.div
                        className="image-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 * index }}
                      >
                        <img src={photo} alt={index} />
                      </motion.div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";
import Circle from "../../Components/Desktop/Circle";
import { projects } from "../../Projects/Projects";

import { motion, useAnimation } from "framer-motion";

export default function HomeDesktop({ transition }) {
  const { tranSwipe, tranSmooth } = transition;
  const hover = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () =>
      setTimeout(() => setIsLoaded(true), [1000])
    );
    return () => {
      window.removeEventListener("load", () =>
        setTimeout(() => setIsLoaded(true), [1000])
      );
    };
  }, []);
  return (
    <>
      {isLoaded && (
        <motion.div
          className="home-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
                  physcial modeling I love to come up with new designs, scenes
                  and stories to tell.I Have a record of working with model
                  making, graphical and technical presentations, conceptual
                  design and art, sketches and drawings.
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
                  <Link to={{ pathname: "/projects", state: false }}>
                    <button>
                      <span>MY PORTFOLIO</span>
                    </button>
                  </Link>
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
              <Circle projects={projects} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

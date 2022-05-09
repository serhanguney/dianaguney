import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";
import Circle from "../../Components/Desktop/Circle";

import {AnimatePresence, motion, useAnimation} from "framer-motion";
import Loader from "../../Components/Loader";
import {getAllAssets, getAllEntriesByType, getFormattedImages} from "../../utils/cms";

export default function HomeDesktop({ transition }) {
  const { tranSwipe, tranSmooth } = transition;
  const hover = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});

  useEffect(() => {
    async function getFeaturedProject(){
      const entries = await getAllEntriesByType('dianaGuneyProject' , {'fields.featured': true});
      let featuredProject = entries.items[0].fields;
      const assets = await getAllAssets();
      const images = getFormattedImages(featuredProject.projectIndex,assets);
      featuredProject = {...featuredProject , images}
      setProject(featuredProject);
    }
    getFeaturedProject();
    document.fonts.ready.then(()=> setIsLoaded(true))
  }, []);
  const text = [
    "My background is in architecture and design and I have a major interest for film and set design.",
    "Combining digital media and physcial modeling I love to come up with new designs, scenes and stories",
    "to tell. I Have a record of working with model making, graphical and technical presentations,",
    "conceptual design and art, sketches and drawings.",
  ];
  const variantParent = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };
  const variantChild = {
    initial: { y: "-100%" },
    animate: (i) => ({
      y: "0%",
      transition: { delay: i * 0.02, ...tranSwipe(1) },
    }),
    exit: { y: "-100%", transition: tranSwipe(1) },
  };

  useEffect(() => {
    isLoaded && setTimeout(
      () =>
        hover.start({
          opacity: 1,
          x: -2,
          y: 3,
          rotateZ: -3,
          scale: 1.05,
          transition: { duration: 0.5 },
        }),
      1000
    );
  }, [isLoaded]);
  return (
    <>
      {isLoaded ? (
        <div className="home-page">
          <div className="navbar-container">
            <NavbarDesktop tranSmooth={tranSmooth} tranSwipe={tranSwipe} />
          </div>
          <motion.div
            className="content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variantParent}
            transition={{ duration: 1 }}
          >
            <div className="text-column">
              <div className="text-container">
                <div className="animation-container">
                  <motion.h1 variants={variantChild}>
                    Architecture <br></br>
                  </motion.h1>
                </div>
                <div className="animation-container">
                  <motion.h1 custom={0} variants={variantChild}>
                    {"&"} Illustrations
                  </motion.h1>
                </div>
                <div className="animation-container">
                  <motion.h3 custom={1} variants={variantChild}>
                    I am a passionate designer with love for story telling
                    through architecture and cinema.
                  </motion.h3>
                </div>
                {text.map((item, index) => (
                  <div key={index} className="animation-container">
                    <motion.p custom={index} variants={variantChild}>
                      {item}
                    </motion.p>
                  </div>
                ))}
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
                  initial={{
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.2, ...tranSwipe(1) },
                  }}
                  exit={{ scale: 0.4, opacity: 0 }}
                >
                  <Link to={{ pathname: "/architecture", state: false }}>
                    <button>
                      <span>MY PORTFOLIO</span>
                    </button>
                  </Link>
                </motion.div>
                <motion.div
                  className="shadow"
                  initial={{
                    x: 0,
                    y: 0,
                    rotateZ: 0,
                    scale: 1,
                    opacity: 0,
                  }}
                  exit={{ opacity: 0 }}
                  animate={hover}
                />
              </motion.div>
            </div>
            <motion.div
              className="visual-column"
              initial={{ x: 200, scale: 0.7, opacity: 0, y: -50 }}
              animate={{
                x: 0,
                scale: 1,
                opacity: 1,
                y: 0,
                transition: tranSwipe(1),
              }}
              exit={{
                x: 1000,
                scale: 0.4,
                opacity: 0,
                y: -50,
                transition: { delay: 0.2, ...tranSwipe(2) },
              }}
            >
              {project.images && <Circle project={project}/>}
            </motion.div>
          </motion.div>
        </div>
      ): <AnimatePresence><Loader /></AnimatePresence>}
    </>
  );
}

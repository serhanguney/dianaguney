import React, { useEffect, useState, useRef } from "react";
import Slider from "../../Components/Desktop/Slider";
import { projects } from "../../Projects/Projects";
import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsDesktop({ transition }) {
  //load is required for page loading animations
  const [load, setLoad] = useState(false);
  const { tranSwipe } = transition;

  //windowBlocks is for determining the available types of sliders.
  const windowBlocks = [
    { size: 800, width: `${100 / 4}%`, count: 4 },
    { size: 1100, width: `${100 / 5}%`, count: 5 },
    { size: 3000, width: `${100 / 6}%`, count: 6 },
  ];

  //block is for selecting the current slider type from the available types.
  const [block, setBlock] = useState({});

  useEffect(() => {
    //set the block type on load
    if (window.innerWidth > 1100) {
      setBlock({
        size: window.innerWidth,
        width: `${100 / 6}%`,
        count: 6,
      });
    } else if (window.innerWidth < 1100 && window.innerWidth > 800) {
      setBlock({
        size: window.innerWidth,
        width: `${100 / 5}%`,
        count: 5,
      });
    } else if (window.innerWidth < 800) {
      setBlock({
        size: window.innerWidth,
        width: `${100 / 4}%`,
        count: 4,
      });
    }
    //setting the block type on resize
    window.addEventListener("resize", () => {
      const filteredBlock = [];
      windowBlocks.map((item) => {
        if (window.innerWidth < item.size) {
          filteredBlock.push(item);
        }
      });
      //   use reduce to select the smallest in filteredBlock
      const smallest = filteredBlock.reduce(
        (min, item) => (min.size < item.size ? min : item),
        filteredBlock[0]
      );
      setBlock(smallest);
    });
    return () => {
      window.removeEventListener("resize", () => {
        const filteredBlock = [];
        windowBlocks.map((item) => {
          if (window.innerWidth < item.size) {
            filteredBlock.push(item);
          }
        });
        //   use reduce to select the smallest in filteredBlock
        const smallest = filteredBlock.reduce(
          (min, item) => (min.size < item.size ? min : item),
          filteredBlock[0]
        );
        setBlock(smallest);
      });
    };
  }, []);

  //imgRef is required to hold until the images are loaded
  const projectRef = useRef(0);
  const loaderColors = ["#6E6E6E", "#FFD1AE", "#6E6E6E"];

  function handleImageLoad() {
    setLoad(handleLoading);
  }
  function handleLoading() {
    const arr = projectRef.current.querySelectorAll("img");
    for (const img of arr) {
      if (!img.complete) {
        return false;
      }
      return true;
    }
  }
  return (
    <div className="projects" onLoad={handleImageLoad} ref={projectRef}>
      <NavbarDesktop tranSwipe={tranSwipe} />
      <AnimatePresence>
        {!load && (
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
        )}
      </AnimatePresence>
      {projects.map((project, index) => (
        <Slider
          key={index}
          project={project}
          tranSwipe={tranSwipe}
          block={block}
          load={load}
        />
      ))}
    </div>
  );
}

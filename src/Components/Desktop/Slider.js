import React, { useEffect, useState, useRef } from "react";

import ArrowUp from "../ArrowUp";
import ArrowDown from "../ArrowDown";
import Modal from "./Modal";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  animate,
  useTransform,
} from "framer-motion";
import { clamp } from "lodash-es";

export default function Slider({ tranSwipe, project, block }) {
  const [sliderCount, setSliderCount] = useState([]);
  const [modal, setModal] = useState({ active: false, element: null });

  //load is required to hold on until DOM is loaded
  const [load, setLoad] = useState(false);

  //progress to prevent intervening animate() in progress
  const [progress, setProgress] = useState(false);

  const slide = useMotionValue(0);

  //paragraph animations
  const paragraph = useMotionValue(0);
  const pDown = useTransform(paragraph, [0, 100], ["100%", "0%"]);
  //slideLimit and maskIndex is required to set limits to user swipes
  const slideLimit = useRef(0);
  const maskIndex = useRef(0);

  //fallback is required to tell the user the direction of slider arrows with animations
  const fallback = useRef(0);

  //width is required to get the slider mask width
  const width = useRef(0);

  useEffect(() => {
    setLoad(true);
    if (block.count) {
      //set the image block thresholds for how many slider-masks we'll have
      const division = project.photos.reduce((thresholds, photo, index) => {
        if ((index / block.count) % 1 === 0) {
          thresholds.push(index);
        }
        return thresholds;
      }, []);

      setSliderCount(division);
    }
  }, [block]);

  useEffect(() => {
    //set width of slider mask
    if (load && sliderCount.length > 0) {
      const target = document.getElementById(`${project.title}-slider`);
      const children = Array.from(target.querySelectorAll(".slider-mask"));
      slideLimit.current = children.length;
      width.current =
        children[0].getBoundingClientRect().width - window.innerWidth * 0.05;
    } else {
      return;
    }
  }, [load, sliderCount]);

  useEffect(() => {
    const target = document.querySelector("html");
    if (modal.active) {
      target.classList.add("no-scroll");
    } else {
      target.classList.remove("no-scroll");
    }
  }, [modal]);
  function slideAway(direction) {
    //animate the slider mask slidings within set limitations
    //using maskIndex I set the limits for the user's swipe actions
    maskIndex.current = clamp(
      -1,
      maskIndex.current - direction,
      slideLimit.current
    );

    if (maskIndex.current < 0) {
      //this is for when you reach zero limit where there is nothing to show
      animate(slide, [slide.current, slide.current + 10, slide.current], {
        duration: 0.3,
      });
      maskIndex.current = 0;
    } else if (
      maskIndex.current > -1 &&
      maskIndex.current < slideLimit.current
    ) {
      setProgress(true);
      //delta is the difference we set later on in winkAnimate with fallback

      animate(slide, slide.current + width.current * direction, tranSwipe(0.8));
    } else if (maskIndex.current === slideLimit.current) {
      animate(slide, [slide.current, slide.current - 10, slide.current], {
        duration: 0.3,
      });
      maskIndex.current = slideLimit.current - 1;
    }
  }
  return (
    <>
      {load && (
        <motion.div
          className="project-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: tranSwipe(0.8) }}
          exit={{ opacity: 0, transition: { delay: 1 } }}
        >
          <AnimatePresence>
            {modal.active && (
              <Modal modalObject={{ modal, setModal }} tranSwipe={tranSwipe} />
            )}
          </AnimatePresence>
          <motion.div
            className="button-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, ...tranSwipe(1) } }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
          >
            <ArrowUp />
            <button onClick={() => animate(paragraph, 100, tranSwipe(1))}>
              Read more
            </button>
          </motion.div>
          <motion.div
            className="paragraph-container"
            initial={{ y: window.innerHeight }}
            style={{ y: pDown }}
          >
            <div className="button-container">
              <ArrowDown />
              <button onClick={() => animate(paragraph, 0, tranSwipe(1))}>
                Read less
              </button>
            </div>
            <h2>Description</h2>
            <p>{project.paragraph}</p>
          </motion.div>

          <div className="text-container">
            <div className="introduction">
              <span>
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{
                    y: "0%",
                    transition: { delay: 1.2, ...tranSwipe(1) },
                  }}
                  exit={{
                    y: "-100%",
                    transition: { delay: 0.2, ...tranSwipe(0.8) },
                  }}
                >
                  {project.title}
                </motion.h2>
              </span>
              <span>
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{
                    y: "0%",
                    transition: { delay: 1.4, ...tranSwipe(1) },
                  }}
                  exit={{ y: "-100%", transition: tranSwipe(0.8) }}
                >
                  {project.text}
                </motion.p>
              </span>
            </div>
          </div>
          <motion.div
            className="slider-container"
            id={`${project.title}-slider`}
            initial={{ y: "10%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: 1,
              transition: { delay: 1.6, ...tranSwipe(1) },
            }}
            exit={{
              y: "-10%",
              opacity: 0,
              transition: { delay: 0.2, ...tranSwipe(1) },
            }}
          >
            {sliderCount.length > 1 && (
              <>
                <a onClick={() => slideAway(1)}>{`<`}</a>
                <a onClick={() => slideAway(-1)}>{`>`}</a>
              </>
            )}
            {sliderCount.map((slider, i) => (
              <motion.div key={i} className="slider-mask" style={{ x: slide }}>
                {project.photos.map(
                  (photo, index) =>
                    index < block.count + slider &&
                    index > slider - 1 && (
                      <div
                        key={index}
                        className="card"
                        style={{ width: block.width }}
                        onClick={() =>
                          setModal({
                            active: true,
                            element: project,
                            index: index,
                          })
                        }
                      >
                        <motion.div
                          className="slider-image-container"
                          custom={index}
                          whileHover={{
                            scale: 1.1,
                            zIndex: 5,
                          }}
                        >
                          <img
                            className="slider-image"
                            effect="blur"
                            src={photo}
                            alt={index}
                          />
                        </motion.div>
                      </div>
                    )
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

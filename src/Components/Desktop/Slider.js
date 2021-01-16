import React, { useEffect, useState, useRef } from "react";

import Modal from "./Modal";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  animate,
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

  //slideLimit and maskIndex is required to set limits to user swipes
  const slideLimit = useRef(0);
  const maskIndex = useRef(0);

  //fallback is required to tell the user the direction of slider arrows with animations
  const fallback = useRef(0);

  //width is required to get the slider mask width
  const width = useRef(0);

  useEffect(() => {
    window.addEventListener("load", function select() {
      setLoad(true);
    });

    if (block.count) {
      //set the image block thresholds for how many slider-masks we'll have
      const division = project.photos.reduce((thresholds, photo, index) => {
        if ((index / block.count) % 1 === 0) {
          thresholds.push(index);
        }
        return thresholds;
      }, []);
      // console.log("divide by", [division, project.photos.length]);

      setSliderCount(division);
    }
    return () => {
      window.removeEventListener("load", function select() {
        setLoad(true);
      });
    };
  }, [block]);

  useEffect(() => {
    //set width of slider mask
    if (load) {
      const target = document.getElementById(`${project.title}-slider`);
      const children = Array.from(target.querySelectorAll(".slider-mask"));
      slideLimit.current = children.length;
      width.current =
        children[0].getBoundingClientRect().width - window.innerWidth * 0.05;
      // console.log("padding", window.innerWidth * 0.05);
    }
  }, [load]);

  // useEffect(() => slide.onChange((value) => console.log(value)), [slide]);

  function slideAway(direction) {
    //animate the slider mask slidings within set limitations
    //using maskIndex I set the limits for the user's swipe actions
    maskIndex.current = clamp(
      -1,
      maskIndex.current - direction,
      slideLimit.current
    );
    // console.log("maskindex,slidelimit", maskIndex.current, slideLimit.current);

    if (maskIndex.current < 0) {
      //this is for when you reach zero limit where there is nothing to show
      animate(slide, [slide.current, slide.current + 10, slide.current], {
        duration: 0.3,
      });
      maskIndex.current = 0;
      // console.log("you're at zero", [maskIndex.current, direction]);
    } else if (
      maskIndex.current > -1 &&
      maskIndex.current < slideLimit.current
    ) {
      setProgress(true);
      // console.log("slideaway", [slide.current, fallback.current]);
      // console.log("slideaway", [maskIndex.current, slideLimit.current]);
      // console.log("slide,width,direction", [
      //   slide.current,
      //   width.current,
      //   direction,
      // ]);

      //delta is the difference we set later on in winkAnimate with fallback
      const delta = direction > 0 ? -50 : 50;
      animate(
        slide,
        slide.current + delta + width.current * direction,
        tranSwipe(0.8)
      );
    } else if (maskIndex.current === slideLimit.current) {
      animate(slide, [slide.current, slide.current - 10, slide.current], {
        duration: 0.3,
      });
      maskIndex.current = slideLimit.current - 1;
      // console.log("you're at limit", maskIndex);
    }
  }

  //winkAnimate is to tell the user that he reached the swipe limit
  function winkAnimate(direction, enter) {
    //based on direction and hover state of user I set the appropriate direction for the fallback animation
    //I needed fallback reference here to save the initial slide.current so I can come back to it
    if (!progress) {
      if (direction < 0) {
        if (enter > 0) {
          //fallback is required here to enable comeback to previous slide.current state
          fallback.current = slide.current;
          animate(slide, fallback.current - 50, {
            type: "spring",
            stiffness: 250,
            damping: 20,
          });
        } else {
          // console.log(fallback.current);
          animate(slide, fallback.current, {
            type: "spring",
            stiffness: 250,
            damping: 20,
          });
        }
      } else {
        if (enter > 0) {
          fallback.current = slide.current;
          // console.log("mouseenter", fallback.current);
          animate(slide, fallback.current + 50, {
            type: "spring",
            stiffness: 250,
            damping: 20,
          });
        } else {
          // console.log("mouseleave", fallback.current);
          animate(slide, fallback.current, {
            type: "spring",
            stiffness: 250,
            damping: 20,
          });
        }
      }
    }
  }
  return (
    <>
      {load && (
        <div className="project-container">
          <AnimatePresence exitBeforeEnter>
            {modal.active && (
              <Modal
                modalObject={{ modal, setModal }}
                tranSwipe={tranSwipe}
              ></Modal>
            )}
          </AnimatePresence>
          <div className="text-container">
            <h1>{project.title}</h1>
            <p>{project.text}</p>
          </div>
          <div className="slider-container" id={`${project.title}-slider`}>
            {sliderCount.length > 1 && (
              <>
                <a
                  onClick={() => slideAway(-1)}
                  onMouseEnter={() => winkAnimate(-1, 1)}
                  onMouseLeave={() => {
                    winkAnimate(-1, -1);
                    setProgress(false);
                  }}
                >{`<`}</a>
                <a
                  onClick={() => slideAway(1)}
                  onMouseEnter={() => winkAnimate(1, 1)}
                  onMouseLeave={() => {
                    winkAnimate(1, -1);
                    setProgress(false);
                  }}
                >{`>`}</a>
              </>
            )}
            {sliderCount.map((slider, i) => (
              <motion.div key={i} className="slider-mask" style={{ x: slide }}>
                {project.photos.map(
                  (photo, index) =>
                    index < block.count && (
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
                            src={photo}
                            alt={index}
                          />
                        </motion.div>
                      </div>
                    )
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

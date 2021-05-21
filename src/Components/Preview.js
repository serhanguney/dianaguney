import React, { useRef, useEffect } from "react";
import ArrowUp from "./ArrowUp";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ArrowDown from "./ArrowDown";
// import SwipeIcon from "../SVGs/SwipeIcon.svg";

//ADDITIONALS
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function Preview({
  state,
  index,
  tranSwipe,
  toggle,
  toggleHide,
  scroll,
}) {
  //STATES
  const refContainer = useRef(null);
  const refSlider = useRef(null);
  const { element, elements, setElements } = state;
  const { preview, setPreview } = toggle;
  const { hide, cycleHide } = toggleHide;

  //ANIMATIONS

  //t is used to animate towards preview mode
  const t = useMotionValue(0);

  const height = useTransform(
    t,
    [0, 500],
    [window.innerWidth < 425 ? 420 : 480, window.innerHeight]
  );
  const sliderHeight = useTransform(t, [0, 500], ["70%", "59%"]);
  const enlargeWidth = useTransform(t, [0, 500], ["70%", "125%"]);
  const fadeOut = useTransform(t, [0, 500], [1, 0]);
  const slideOut = useTransform(t, [0, 500], [0, 30]);
  const slideUp = useTransform(t, [0, 500], [0, -100]);
  const tDelay = useMotionValue(0);
  const delaySlideIn = useTransform(tDelay, [0, 500], [25, 0]);
  const delayFadeIn = useTransform(tDelay, [0, 500], [0, 1]);

  //d animates the description part in preview
  const d = useMotionValue(0);

  const dExpand = useTransform(d, [0, 500], [0, -350]);
  const dFadeIn = useTransform(d, [0, 500], [0, 1]);
  const dFadeOut = useTransform(d, [0, 500], [1, 0]);
  const dSlide = useTransform(d, [0, 500], ["0%", "-100%"]);

  //HANDLER FUNCTIONS

  function handleOpen(index) {
    //set navbar z-index
    const navbar = document.querySelector(".navbar-container");
    navbar.classList.add("behind");
    //Element activation is required to handle animations of the page.
    //Whichever element is active thats what we'll animate.
    const array = elements.map((el, i) => {
      if (index === i) {
        if (el.active) {
          return { ...el, active: false };
        } else {
          return { ...el, active: true };
        }
      } else {
        return { ...el, active: false };
      }
    });

    setElements(array);

    //preview is required for the page elements outisde element.map(); like navbar.
    //We can't send the element.active information simply because these elements are outside the map loop.
    setPreview(true);
    cycleHide();
  }

  function handleClose() {
    if (preview) {
      const array = elements.map((el) => {
        if (el.active) {
          return { ...el, active: false };
        } else;
        return el;
      });

      cycleHide();
      setElements(array);
      setPreview(false);
    }
    setTimeout(() => {
      const navbar = document.querySelector(".navbar-container");
      navbar.classList.remove("behind");
    }, 1500);
  }
  //trigger animation and handlescroll in preview

  useEffect(() => {
    if (!element.active) {
      animate(t, 0, { delay: 0.5, ...tranSwipe(0.8) });
      animate(tDelay, 0, tranSwipe(0.8));
    } else {
      handleScroll();
    }
  }, [element]);

  function handleScroll() {
    const unsubscribe = scroll.onChange((value) => {
      window.scrollTo({
        top: value,
      });
    });

    //when pressed see more handles the scroll so that the element is in the middle of the screen
    //triggers the rest of the animations.
    if (refContainer.current) {
      if (element.active) {
        let container = refContainer.current.getBoundingClientRect();
        const total = container.top + window.scrollY - window.innerHeight / 6;
        console.log(
          scroll.current,
          total,
          container.top,
          window.scrollY,
          window.innerHeight / 6
        );
        animate(scroll, total, {
          ...tranSwipe(1.2),
          onComplete: () => {
            animateElement();
            unsubscribe();
          },
        });
      }
    }
  }
  function animateElement() {
    animate(t, 500, tranSwipe(0.8));
    animate(tDelay, 500, {
      delay: 0.5,
      ...tranSwipe(0.8),
    });
  }

  return (
    <motion.div
      ref={refContainer}
      id={element.id}
      key={index}
      className="project-container"
      animate={!element.active && hide}
      style={{ height, marginTop: slideUp }}
      layout
    >
      <motion.div
        className="preview-background"
        animate={
          element.active
            ? { opacity: 1, transition: tranSwipe(0.8) }
            : { opacity: 0, transition: { delay: 0.5, ...tranSwipe(0.8) } }
        }
      ></motion.div>
      <motion.div className="text-container">
        <h2>{element.title}</h2>
        <p>{element.text}</p>
      </motion.div>
      <motion.div className="button-section">
        <motion.div
          className="button-container"
          style={{ x: slideOut, opacity: fadeOut }}
        >
          <motion.button
            onClick={() => {
              handleOpen(index);
            }}
            className="primary-button"
          >
            <span>See more</span>
          </motion.button>
          <ArrowRight />
        </motion.div>
        <motion.div
          className={
            element.active ? "button-container" : "button-container freeze"
          }
          style={{ x: delaySlideIn, opacity: delayFadeIn }}
        >
          <ArrowLeft />
          <motion.button
            onClick={() => {
              handleClose(index);
            }}
            className="primary-button"
          >
            <span>Go back</span>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        key={index}
        className="project-slider"
        style={{ height: sliderHeight }}
        layout
      >
        <motion.div
          ref={refSlider}
          className="slider-container"
          transition={tranSwipe(0.8)}
          layout
        >
          {element.photos.map((photo, i) => (
            <motion.div
              key={i}
              className="image-container"
              transition={tranSwipe(0.8)}
              style={{ width: enlargeWidth }}
              layout
            >
              <div className="image-layout">
                <motion.img
                  src={photo}
                  alt={i}
                  transition={tranSwipe(0.8)}
                  layout
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="description-background"
        style={{ opacity: dFadeIn }}
      ></motion.div>
      <AnimatePresence>
        {element.active && (
          <motion.div
            className="project-description"
            initial={{ x: 30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 1.5, ...tranSwipe(0.8) },
            }}
            exit={{ x: 30, opacity: 0, height: 0, transition: tranSwipe(0.6) }}
            style={{ y: dExpand }}
            layout
          >
            <motion.div
              className="description-overlay"
              style={{ opacity: dFadeOut }}
            ></motion.div>
            <div className="description-title">
              <h3>Description</h3>
              <div className="info-container">
                <motion.div
                  className="button-container"
                  style={{ x: dSlide, opacity: dFadeOut }}
                >
                  <button
                    className="primary-button"
                    onClick={() => {
                      d.current === 0
                        ? animate(d, 500, { ...tranSwipe(0.6) })
                        : animate(d, 0, { ...tranSwipe(0.6) });
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>Press for more</span>
                  </button>
                  <ArrowUp />
                </motion.div>
                <motion.div
                  className="button-container"
                  style={{ x: dSlide, opacity: dFadeIn }}
                >
                  <button
                    className="primary-button"
                    onClick={() => {
                      d.current === 0
                        ? animate(d, 500, { ...tranSwipe(0.6) })
                        : animate(d, 0, { ...tranSwipe(0.6) });
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>Press for less</span>
                  </button>
                  <ArrowDown />
                </motion.div>
              </div>
            </div>
            <div className="description">
              <p>{element.paragraph}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

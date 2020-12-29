import React, { useState, useEffect } from "react";

//icons
import swipeIcon from "../SVGs/SwipeIcon.svg";
import tapIcon from "../SVGs/TapIcon.svg";

//ADDITIONALS

import { motion } from "framer-motion";

export default function InfoIcon({ tranSwipe }) {
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);

  //VARIANTS
  const info = {
    in: {
      height: 0,
      transition: { delay: 0.4, ...tranSwipe(0.8) },
    },
    out: {
      height: "100%",
      transition: {
        delayChildren: 0.4,

        ...tranSwipe(0.8),
      },
    },
  };
  const counterVariants = {
    in: {
      opacity: 0,
      y: 20,
      transition: tranSwipe(0.6),
    },
    out: {
      opacity: 1,
      y: 0,
      transition: tranSwipe(0.8),
    },
  };
  const childrenVariants = {
    in: (i) => ({
      opacity: 0,
      x: i * 20,
      transition: tranSwipe(0.6),
    }),
    out: {
      opacity: 1,
      x: 0,
      transition: tranSwipe(0.8),
    },
  };

  //Create a countdown for information helper
  useEffect(() => {
    if (!active) return;
    const timer =
      counter > 0 &&
      setTimeout(() => {
        setCounter((counter) => counter - 1);
      }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  function handleClick() {
    setActive(true);
    setCounter(5);
    setTimeout(() => {
      setActive(false);
    }, 5000);
  }
  return (
    <motion.div className="info-icon">
      <motion.div
        className="info-help-section"
        initial="in"
        animate={active ? "out" : "in"}
        variants={info}
      >
        <motion.span className="counter" variants={counterVariants}>
          {counter}
        </motion.span>
        <motion.div
          custom={1}
          variants={childrenVariants}
          className="swipe-info"
        >
          <img src={swipeIcon} alt="Swipe" className="icon" />
          <p>Swipe to browser</p>
        </motion.div>
        <motion.div
          custom={-1}
          variants={childrenVariants}
          className="tap-info"
        >
          <p>Tap and hold to enlarge</p>
          <img src={tapIcon} alt="Tap" className="icon" />
        </motion.div>
      </motion.div>
      <motion.svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        style={{ overflow: "visible" }}
        initial={{ y: 70 }}
        animate={{ y: 0 }}
        transition={tranSwipe(1)}
        exit={{ y: 70 }}
        fill="none"
        onClick={handleClick}
      >
        <path
          d="M17.4247 12.9604H16.9841V23.0273H17.4247V12.9604Z"
          fill="#6E6E6E"
        />
        <path
          d="M17.1728 0C7.97491 0 0.484375 7.63036 0.484375 17C0.484375 26.3696 7.97491 34 17.1728 34C26.3708 34 33.8613 26.3696 33.8613 17C33.8613 7.63036 26.3708 0 17.1728 0ZM17.1728 33.6634C8.14014 33.6634 0.81484 26.2013 0.81484 17C0.81484 7.79868 8.14014 0.336634 17.1728 0.336634C26.2056 0.336634 33.5309 7.79868 33.5309 17C33.5309 26.2013 26.2056 33.6634 17.1728 33.6634Z"
          fill="#6E6E6E"
        />
        <motion.path
          initial={{ scale: 1, opacity: 0 }}
          animate={
            active
              ? { scale: 1, opacity: 0 }
              : { scale: 1.5, opacity: [0, 1, 0.5, 0] }
          }
          transition={{ loop: active ? 1 : Infinity, duration: 2 }}
          d="M17.1728 0C7.97491 0 0.484375 7.63036 0.484375 17C0.484375 26.3696 7.97491 34 17.1728 34C26.3708 34 33.8613 26.3696 33.8613 17C33.8613 7.63036 26.3708 0 17.1728 0ZM17.1728 33.6634C8.14014 33.6634 0.81484 26.2013 0.81484 17C0.81484 7.79868 8.14014 0.336634 17.1728 0.336634C26.2056 0.336634 33.5309 7.79868 33.5309 17C33.5309 26.2013 26.2056 33.6634 17.1728 33.6634Z"
          fill="#6E6E6E"
        />
        <path
          d="M17.4247 8.72446H16.9841V10.4557H17.4247V8.72446Z"
          fill="#6E6E6E"
        />
      </motion.svg>
    </motion.div>
  );
}

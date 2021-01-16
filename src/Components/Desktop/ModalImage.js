import React, { useRef, useEffect } from "react";

import { motion, useMotionValue, animate } from "framer-motion";
export default function ModalImage({ i, photo, slideIndex, tranSwipe }) {
  const imageVariants = {
    initial: { opacity: 0, rotateY: 20 },
    animate: {
      opacity: 1,
      rotateY: 0,
      transition: { ...tranSwipe(1), delay: 0.4 },
    },
    exit: { opacity: 0, rotateY: 20 },
  };
  const width = useRef(0);
  const x = useMotionValue(i * width.current);
  const s = useMotionValue(1);

  useEffect(() => {
    const target = document.querySelector(".modal-slider");
    width.current = target.getBoundingClientRect().width;
  }, []);
  useEffect(() => {
    animate(x, width.current * (i - slideIndex), tranSwipe(0.8));
    animate(s, i === slideIndex ? 1 : 0.8, tranSwipe(0.8));
  }, [slideIndex]);
  return (
    <motion.div
      className="image-container"
      variants={imageVariants}
      style={{ x: x, scale: s, opacity: i === slideIndex ? 1 : 0.6 }}
    >
      <img src={photo} />
    </motion.div>
  );
}

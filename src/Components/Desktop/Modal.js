import React, { useEffect, useRef, useState } from "react";
import ModalImage from "./ModalImage";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import clamp from "lodash-es/clamp";

export default function Modal({ modalObject, tranSwipe }) {
  const { modal, setModal } = modalObject;
  // useEffect(() => modal.element && console.log("modal", modal), [modal]);
  const direction = useRef(0);
  //VARIANTS
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const bgVariants = {
    initial: { opacity: 0, transition: { delay: 0.4 } },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.4 } },
  };
  const imageContainer = {
    initial: { opacity: 1, transition: { staggerChildren: 1 } },
    animate: { opacity: 1, transition: { staggerChildren: 1 } },
  };
  //SLIDER

  const [slideIndex, setSlideIndex] = useState(modal.index && modal.index);

  // useEffect(() => console.log("parent", slideIndex), []);

  return (
    <motion.div
      className="modal"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div
        className="background"
        variants={bgVariants}
        exit="exit"
      ></motion.div>
      <div className="content-container">
        <div className="visual-content">
          <motion.div
            className="modal-slider"
            initial="initial"
            animate="animate"
            variants={imageContainer}
            inherit={false}
          >
            {modal.element.photos.map((item, index) => (
              <ModalImage
                key={index}
                i={index}
                slideIndex={slideIndex}
                modal={modal}
                photo={item}
                tranSwipe={tranSwipe}
                direction={direction}
              />
            ))}
          </motion.div>
        </div>
        <div className="function-container">
          <motion.a
            onClick={() => {
              setSlideIndex(
                clamp(slideIndex + 1, 0, modal.element.photos.length - 1)
              );
              direction.current = -1;
            }}
          >{`<`}</motion.a>
          <motion.a
            onClick={() => {
              setSlideIndex(
                clamp(slideIndex - 1, 0, modal.element.photos.length - 1)
              );
              direction.current = 1;
            }}
          >{`>`}</motion.a>
          <button onClick={() => setModal({ active: false, element: null })}>
            x
          </button>
        </div>
      </div>
    </motion.div>
  );
}

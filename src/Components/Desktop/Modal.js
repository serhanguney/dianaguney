import React, { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ modalObject, tranSwipe }) {
  const { modal, setModal } = modalObject;
  useEffect(() => modal.element && console.log("modal", modal), [modal]);
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const imageVariants = {
    initial: { opacity: 0, rotateY: 20 },
    animate: {
      opacity: 1,
      rotateY: 0,
      transition: { ...tranSwipe(1), delay: 0.4 },
    },
    exit: { opacity: 0, rotateY: 20 },
  };
  const bgVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.4 } },
  };
  return (
    <AnimatePresence>
      {modal.active && (
        <motion.div
          className="modal"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={containerVariants}
        >
          <motion.div className="background" variants={bgVariants}></motion.div>
          <div className="content-container">
            <div className="visual-content">
              <button
                onClick={() => setModal({ active: false, element: null })}
              >
                X
              </button>
              <div className="slider">
                <motion.div
                  className="image-container"
                  variants={imageVariants}
                >
                  <img src={modal.element.photos[modal.index]} />
                </motion.div>
              </div>
            </div>
            <div className="text-content"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ modalObject }) {
  const { modal, setModal } = modalObject;
  useEffect(() => modal.element && console.log(modal.element.photos[0]), [
    modal,
  ]);
  return (
    <AnimatePresence>
      {modal.active && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button onClick={() => setModal({ active: false, element: null })}>
            Close
          </button>
          <img src={modal.element.photos[modal.index]} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

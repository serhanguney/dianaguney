import React, { useEffect } from "react";
//PAGES
import Navbar from "../Components/Navbar";

//ADDITIONALS
import { motion, useAnimation } from "framer-motion";

export default function Contact({ toggle, transition }) {
  const { menuOpen, setMenuOpen } = toggle;
  const { tranSwipe, tranSmooth } = transition;

  //PAGE-IN ANIMATION
  const c = useAnimation();
  useEffect(() => {
    async function pageInAnimation() {
      await c.start({ x: window.innerWidth, transition: tranSwipe(1) });
      await c.start({ width: 0, transition: { duration: 0.1 } });
      await c.start({ x: 0, transition: { duration: 0.1 } });
    }
    pageInAnimation();
  }, []);
  return (
    <div className="contact-page">
      <motion.div
        className="page-transition-element"
        initial={{ width: "100%" }}
        animate={c}
        exit={{ width: "100%", transition: tranSwipe(1) }}
        transition={tranSwipe(1)}
      ></motion.div>
      <Navbar
        toggle={{ menuOpen, setMenuOpen }}
        tranSwipe={tranSwipe}
        tranSmooth={tranSmooth}
      />
      <motion.div className="contact-content">
        <p>
          Thank you for taking the time to browse through what I’ve been doing.
          You can reach me using the contact information below.
        </p>
      </motion.div>
    </div>
  );
}

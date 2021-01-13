import React, { useEffect } from "react";
//PAGES
import Navbar from "../Components/Navbar";

//IMAGES
import pageCover from "../Images/paperTubes/ContactCover.jpg";
import email from "../Icons/contactIcon.svg";
import phone from "../Icons/phoneIcon.svg";
import signature from "../SVGs/Signature.svg";
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
        <div className="info-container">
          <div className="text-aligner">
            <p>
              Thank you for taking the time to browse through what I’ve been
              doing. You can reach me using the contact information below.
            </p>
          </div>
          <div className="signature">
            <img src={signature} alt="signature" />
          </div>
          <h2>Contact Information</h2>
          <div className="email-container">
            <img src={email} alt="email" />
            <p>diana.guney.93@gmail.com</p>
          </div>
          <div className="phone-container">
            <img src={phone} alt="phone" />
            <p>+46 73 779 99 93</p>
          </div>
        </div>
        <div className="image-container">
          <div className="overlay"></div>
          <img src={pageCover} alt="contact-cover" />
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import Circle from "../../Components/Desktop/Circle";
import emailIcon from "../../Icons/contactIcon.svg";
import phoneIcon from "../../Icons/phoneIcon.svg";
import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";

import { motion } from "framer-motion";
export default function ContactDesktop({ transition }) {
  const { tranSwipe, tranSmooth } = transition;
  const contact = {
    email: "diana.guney.93@gmail.com",
    emailIcon: emailIcon,
    phone: "+46 73 779 99 93",
    phoneIcon: phoneIcon,
  };

  return (
    <div className="contact">
      <NavbarDesktop tranSwipe={tranSwipe} />
      <motion.div
        className="visual-column"
        initial={{ scale: 0.7, opacity: 0, x: 1000, y: -50 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [1000, -200, 0],
          y: [-50, 50, 0],
          transition: tranSmooth(2),
        }}
        exit={{
          scale: 0.4,
          opacity: 0,
          x: 1000,
          y: -50,
          transition: tranSwipe(2),
        }}
      >
        <Circle
          contact={contact}
          tranSwipe={tranSwipe}
          tranSmooth={tranSmooth}
        />
      </motion.div>
    </div>
  );
}

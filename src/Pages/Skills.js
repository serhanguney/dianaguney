import React, { useEffect } from "react";

//PAGES
import Navbar from "../Components/Navbar";
import AdvancedIcon from "../Components/AdvancedIcon";
import checkIcon from "../SVGs/CheckIcon.svg";

//ADDITIONALS
import { motion, useAnimation } from "framer-motion";

export default function Skills({ toggle, transition }) {
  const { menuOpen, setMenuOpen } = toggle;
  const { tranSwipe, tranSmooth } = transition;

  const skills = [
    {
      title: "2D Modeling",
      list: [{ name: "AutoCad 2D", advanced: true }],
    },
    {
      title: "3D Modeling",
      list: [
        { name: "Rhino 3D", advanced: true },
        { name: "Sketch-up 3D", advanced: false },
        { name: "Microstation", advanced: false },
        { name: "3D point cloud", advanced: false },
        { name: "Physical Modelling", advanced: false },
      ],
    },
    {
      title: "Editing",
      list: [
        { name: "Photoshop CS6", advanced: true },
        { name: "Indesign CS6", advanced: true },
        { name: "Illustrator CS6", advanced: true },
      ],
    },
  ];

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
    <div className="skills-page">
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
      <motion.div className="skills-content">
        <div className="skills-text">
          <p>
            I work with&nbsp;
            <span>
              3D design {"&"} modelling, 2D illustrations and sketching and
              editing with Adobe CS6.
            </span>
          </p>
        </div>
        <div className="skills-info">
          <div className="row">
            <AdvancedIcon advanced={true} />
            <p>Advanced</p>
          </div>
          <div className="row">
            <AdvancedIcon advanced={false} />
            <p>Intermediate</p>
          </div>
          <div className="row"></div>
        </div>
        <div className="skills-section">
          <div className="column">
            {skills.map((item, index) => (
              <div className="skill-container">
                <h2>{item.title}</h2>
                <div className="skill-list-container">
                  {item.list.map((el, i) => (
                    <div className="skill-row">
                      <img src={checkIcon} alt="check" />
                      <p>{el.name}</p>
                      <AdvancedIcon advanced={el.advanced} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

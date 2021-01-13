import React, { useEffect, useState } from "react";

//PAGES
import Navbar from "../Components/Navbar";
import Preview from "../Components/Preview";
//IMAGES
import ArrowDown from "../Components/ArrowDown";
import pageCover from "../Images/furniture/ProjectsCover.jpg";
//ADDITIONALS
import { motion, useAnimation, useCycle, useMotionValue } from "framer-motion";

//PROJECTS
import { projects } from "../Projects/Projects";

export default function Projects({ toggle, transition }) {
  //STATES
  const [preview, setPreview] = useState(false);
  const { menuOpen, setMenuOpen } = toggle;
  const { tranSwipe, tranSmooth } = transition;
  const [elements, setElements] = useState(projects);

  //the cyle animation is for inactive elements to disappear when an element is activated.
  //it needs to be defined in the parent component this way we only have one toggle that controls all children separately.
  //we use a ternary to animate each component separately {!element.active ? hide : ""}
  const [hide, cycleHide] = useCycle(
    {
      opacity: 1,
      transition: { delay: 0.8, ...tranSwipe(0.8) },
    },
    {
      opacity: 0,
      transition: tranSwipe(0.8),
    }
  );
  //start from the top of the page
  useEffect(() => {
    const scroll = window.scrollY;
    if (scroll !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  //this will be used to animate the scrolling of the window when element is active
  const scroll = useMotionValue(0);
  function setScroll() {
    scroll.set(window.scrollY);
  }
  function setTouch(e) {
    e.preventDefault();
  }
  //we set the scroll motionvalue to window.scrollY so it doesn't scroll from the top everytime.
  useEffect(() => {
    if (!preview) {
      window.addEventListener("scroll", setScroll);
      window.removeEventListener("touchmove", setTouch, { passive: false });
    } else {
      window.removeEventListener("scroll", setScroll);
      window.addEventListener("touchmove", setTouch, { passive: false });
    }

    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, [preview]);
  //PAGE-IN ANIMATION
  const c = useAnimation();
  useEffect(() => {
    async function pageInAnimation() {
      await c.start({ x: window.innerWidth, transition: tranSwipe(1) });
      await c.start({ width: 0, transition: { duration: 0.1 } });
      await c.start({ x: 0, transition: { duration: 0.1 } });
    }
    pageInAnimation();
  }, [c]);

  return (
    <div className="projects-page">
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
        preview={preview}
      />

      <motion.div className="projects-content">
        <div className="intro-to-projects">
          <p>
            Below you'll find the projects I did throughout my education in
            architecture. The projects are sorted out by priority.
          </p>

          <div className="image-container">
            <img src={pageCover} />
            <div className="scroll-container">
              <p>scroll for projects</p>
              <ArrowDown color="white" />
            </div>
          </div>
        </div>
        {elements.map((element, index) => (
          <Preview
            key={index}
            state={{ element, elements, setElements }}
            toggle={{ preview, setPreview }}
            index={index}
            toggleHide={{ hide, cycleHide }}
            tranSwipe={tranSwipe}
            scroll={scroll}
          />
        ))}
      </motion.div>
    </div>
  );
}

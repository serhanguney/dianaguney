import React, { useEffect, useState } from "react";

//PAGES
import Navbar from "../Components/Navbar";
import Preview from "../Components/Preview";
//ADDITIONALS
import { motion, useAnimation, useCycle } from "framer-motion";

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

  useEffect(() => {
    const scroll = window.scrollY;
    if (scroll !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);
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
        {elements.map((element, index) => (
          <Preview
            key={index}
            state={{ element, elements, setElements }}
            toggle={{ preview, setPreview }}
            index={index}
            toggleHide={{ hide, cycleHide }}
            tranSwipe={tranSwipe}
          />
        ))}
      </motion.div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//IMAGES
import homeCover from "../Images/balconies/1.jpg";
import sign from "../SVGs/Signature.svg";
import ArrowDown from "../Components/ArrowDown";
import ArrowRight from "../Components/ArrowRight";
import projectsIcon from "../Icons/projectsIcon.svg";

//COMPONENTS
import Navbar from "../Components/Navbar";
import Preview from "../Components/Preview";

//ADDITIONAL
import { motion, useAnimation, useCycle, useMotionValue } from "framer-motion";
import { projects } from "../Projects/Projects";

export default function Home({ toggle, transition }) {
  //STATES
  const { menuOpen, setMenuOpen } = toggle;

  const [elements, setElements] = useState(projects);
  const [preview, setPreview] = useState(false);

  //VARIABLES
  const { tranSwipe, tranSmooth } = transition;
  const location = useLocation();
  const history = useHistory();

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

  //ANIMATION
  //this will be used to animate the scrolling of the window when element is active
  const scroll = useMotionValue(0);
  function setScroll() {
    scroll.set(window.scrollY);
  }
  const disablePreviewScroll = (reference) => {
    if (reference) {
      console.log("reference", reference);
      // disableBodyScroll(reference);
    }
  };

  const enablePreviewScroll = (reference) => {
    if (reference) {
      console.log("reference", reference);
    }
  };
  //we set the scroll motionvalue to window.scrollY so it doesn't scroll from the top everytime.
  useEffect(() => {
    let targetElement = document.querySelector("html");

    if (!preview) {
      window.addEventListener("scroll", setScroll);
      enablePreviewScroll();
      targetElement.classList.remove("no-scroll");
    } else {
      window.removeEventListener("scroll", setScroll);
      disablePreviewScroll();
      targetElement.classList.add("no-scroll");
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
  }, []);

  useEffect(() => {
    //clear history on component mount
    history.replace();
  }, []);
  return (
    <motion.div className="home-page" transition={tranSwipe(1)}>
      <motion.div
        className="page-transition-element"
        initial={location.state ? { width: "100%" } : ""}
        animate={c}
        exit={{ width: "100%", transition: tranSwipe(1) }}
      ></motion.div>

      <Navbar
        toggle={{ menuOpen, setMenuOpen }}
        tranSwipe={tranSwipe}
        tranSmooth={tranSmooth}
        preview={preview}
      />
      <motion.div
        className="home-content"
        transition={{ delay: 0.4, ...tranSwipe(0.8) }}
      >
        <div className="cover-image">
          <div className="overlay"></div>
          <img src={homeCover} alt="Cover" />
        </div>
        <motion.div className="introduction-section" animate={hide}>
          <h1>About Me</h1>
          <h2 style={{ fontSize: "14px" }}>
            I am a passionate designer with love for story telling through
            architecture and cinema.
          </h2>
          <p>
            My background is in Architecture and design and I have a major
            interest for film and set design. Combining digital media and
            physcial modeling I love to come up with new designs, scenes and
            stories to tell.I Have a record of working with model making,
            graphical and technical presentations, conceptual design and art,
            sketches and drawings.
          </p>
          <img src={sign} />
          <div className="scroll-for-more">
            <p>scroll for projects</p>
            <ArrowDown />
          </div>
        </motion.div>
        <div className="home-projects-section">
          {elements.map(
            (element, index) =>
              index < 3 && (
                <Preview
                  key={index}
                  index={index}
                  state={{ elements, element, setElements }}
                  toggle={{ preview, setPreview }}
                  toggleHide={{ hide, cycleHide }}
                  tranSwipe={tranSwipe}
                  scroll={scroll}
                  enableReference={enablePreviewScroll}
                  disableReference={disablePreviewScroll}
                />
              )
          )}
          <img
            className="projects-icon"
            src={projectsIcon}
            alt="projects-icon"
          />
          <Link to={{ pathname: "/projects", state: true }}>
            <motion.button className="link-button" whileTap={{ scale: 0.9 }}>
              <span>Go to Projects</span>
            </motion.button>
            <ArrowRight />
          </Link>
        </div>
        <div className="footer"></div>
      </motion.div>
    </motion.div>
  );
}

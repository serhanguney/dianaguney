import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//COMPONENTS
import MenuIcon from "./MenuIcon";
import Signature from "./Signature";
import MenuTitle from "./MenuTitle";

//ADDITIONALS
import { motion, useAnimation } from "framer-motion";

//IMAGES
import contactIcon from "../Icons/contactIcon.svg";
import projectsIcon from "../Icons/projectsIcon.svg";
import skillsIcon from "../Icons/skillsIcon.svg";
import homeIcon from "../Icons/meIcon.svg";

export const menuItems = [
  {
    icon: projectsIcon,
    title: "Projects",
    text: "PROJECTS",
    link: "projects",
    fromDashboard: false,
  },
  {
    icon: skillsIcon,
    title: "Skills",
    text: "SKILLS",
    link: "skills",
    fromDashboard: false,
  },
  {
    icon: contactIcon,
    title: "Contact",
    text: "CONTACT",
    link: "contact",
    fromDashboard: false,
  },
  {
    icon: homeIcon,
    title: "Home",
    text: "DIANA GUNEY",
    link: "",
    fromDashboard: true,
  },
];
export default function Navbar({ toggle, tranSwipe, tranSmooth, preview }) {
  //STATES
  const [icon, setIcon] = useState("");
  const { menuOpen, setMenuOpen } = toggle;

  //VARIABLES
  const location = useLocation();

  const filteredItems = menuItems.filter(
    (item) => location.pathname === `/${item.link}`
  );
  const mainTitle = filteredItems[0].text.split("");
  //VARIANTS
  const parentVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
  };
  const menuVariants = {
    initial: {
      height: 0,
      transition: {
        ...tranSwipe(0.4),
        delay: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    animate: {
      height: 300,
      transition: {
        ...tranSwipe(0.4),
        staggerChildren: 0.05,
      },
    },
  };
  const itemVariants = {
    initial: { y: 20, opacity: 0, transition: tranSmooth(0.2) },
    animate: { y: 0, opacity: 1, transition: tranSmooth(0.2) },
  };
  const navbarColor = useAnimation();

  const backgroundVariants = {
    initial: { opacity: 0, transition: { ...tranSwipe(0.4), delay: 0.3 } },
    animate: { opacity: 1, transition: { ...tranSwipe(0.4) } },
  };
  //setting the menu icon and the background color based on the page selection
  useEffect(() => {
    const item = menuItems.filter(
      (item) => `/${item.link}` === location.pathname
    );
    if (location.pathname === "/") {
      setIcon(<Signature tranSwipe={tranSwipe} tranSmooth={tranSmooth} />);
      navbarColor.start({ backgroundColor: "#ffffff" });
    } else {
      setIcon(
        <div className="menu-icon">
          <motion.img
            src={item[0].icon}
            alt={item[0].title}
            initial={{ y: 70 }}
            animate={{ y: 0 }}
            transition={tranSwipe(1)}
            exit={{ y: 70 }}
          />
        </div>
      );
      navbarColor.start({ backgroundColor: "#fff8f0" });
    }
  }, []);
  // useEffect(() => console.log(preview), [preview]);

  return (
    <motion.div className="navbar-container">
      <motion.div
        className="background freeze"
        initial="initial"
        exit="initial"
        animate={menuOpen ? "animate" : "initial"}
        variants={backgroundVariants}
      ></motion.div>
      <motion.div
        className="navbar-section"
        initial="initial"
        animate={menuOpen ? "animate" : "initial"}
        variants={parentVariants}
        exit="initial"
      >
        <motion.div
          className="navbar-header"
          animate={navbarColor}
          initial={{ backgroundColor: "#fff8f0" }}
          transition={tranSwipe(1)}
        >
          <MenuIcon toggle={{ menuOpen, setMenuOpen }} />
          <MenuTitle title={mainTitle} tranSwipe={tranSwipe} />
          {icon}
        </motion.div>
        <motion.div className="menu-items" variants={menuVariants}>
          {menuItems.map((item, index) => (
            <Link
              to={{ pathname: `/${item.link}`, state: item.fromDashboard }}
              key={index}
            >
              <motion.div
                className="menu-item-container"
                variants={itemVariants}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="menu-item">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

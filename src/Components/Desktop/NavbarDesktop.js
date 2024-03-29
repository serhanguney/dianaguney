import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { menuItems } from "../Navbar";
import { motion } from "framer-motion";

export default function NavbarDesktop({ tranSwipe, tranSmooth }) {
  //define location to anticipate user's paths based on which page he is coming from.
  //ITEM MATCH - we'll use location.pathname to match the menu links and location.state to distinguish navigation from homepage
  const location = useLocation();

  //ICON MATCH - we'll use the icon state to match the global menu icon with the appropriate page icon
  const [icon, setIcon] = useState(null);

  //ICON MATCH - we'll use location to do the icon matchin via useEffect
  useEffect(() => {
    const item = menuItems.filter((item) =>
      location.pathname.includes(item.link)
    );
    if (location.pathname === "/") {
      setIcon(<img src={item[0].icon} alt={item[0].title} />);
    } else {
      setIcon(<img src={item[1].icon} alt={item[1].title} />);
    }
  }, []);

  return (
    <motion.div
      className="navbar-desktop"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <span className="icon-container">
        <motion.div
          className="menu-icon"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={tranSwipe(0.8)}
        >
          {icon}
        </motion.div>
      </span>
      <Link to={{ pathname: "/", state: false }}>
        <div className="menu-title">
          <h2>DIANA GUNEY</h2>
        </div>
      </Link>
      <div className="menu-items">
        {menuItems.map(
          (item, index) =>
            item.title !== "Home" && (
              <Link
                key={index}
                to={{ pathname: `/${item.link}`, state: item.fromDashboard }}
              >
                <h3>{item.text}</h3>
              </Link>
            )
        )}
      </div>
    </motion.div>
  );
}

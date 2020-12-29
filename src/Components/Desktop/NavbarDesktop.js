import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { menuItems } from "../Navbar";
import Signature from "../Signature";
import MenuTitle from "../MenuTitle";

export default function NavbarDesktop({ tranSwipe, tranSmooth }) {
  //define location to anticipate user's paths based on which page he is coming from.
  //ITEM MATCH - we'll use location.pathname to match the menu links and location.state to distinguish navigation from homepage
  const location = useLocation();

  //ICON MATCH - we'll use the icon state to match the global menu icon with the appropriate page icon
  const [icon, setIcon] = useState(null);

  //TITLE MATCH - we'll send the page title to MenuTitle component to animate it.
  const filteredItems = menuItems.filter(
    (item) => location.pathname === `/${item.link}`
  );
  const mainTitle = filteredItems[0].text.split("");

  //ICON MATCH - we'll use location to do the icon matchin via useEffect
  useEffect(() => {
    const item = menuItems.filter(
      (item) => `/${item.link}` === location.pathname
    );

    //since the icon of the homepage is the only animatable icon we'll have to do an if conditional
    if (item[0].title === "Home") {
      setIcon(<Signature tranSmooth={tranSmooth} tranSwipe={tranSwipe} />);
    } else {
      setIcon(<img src={item[0].icon} alt={item[0].title} />);
    }
    console.log("item", [item, location.pathname]);
  }, []);

  return (
    <div className="navbar-desktop">
      <div className="menu-icon">{icon}</div>
      <div className="menu-title">
        {<MenuTitle title={mainTitle} tranSwipe={tranSwipe} />}
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={{ pathname: item.link, state: item.fromDashboard }}
          >
            <h2>{item.text}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

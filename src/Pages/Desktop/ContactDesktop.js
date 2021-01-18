import React from "react";
import Circle from "../../Components/Desktop/Circle";
import emailIcon from "../../Icons/contactIcon.svg";
import phoneIcon from "../../Icons/phoneIcon.svg";
import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";
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
      <div className="visual-column">
        <Circle
          contact={contact}
          tranSwipe={tranSwipe}
          tranSmooth={tranSmooth}
        />
      </div>
    </div>
  );
}

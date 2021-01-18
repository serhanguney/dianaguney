import React from "react";
import Circle from "../../Components/Desktop/Circle";
import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";
import { skills } from "../Skills";
export default function SkillsDesktop({ tranSwipe }) {
  return (
    <div className="skills">
      <NavbarDesktop tranSwipe={tranSwipe} />
      <div className="skills-content">
        <div className="text-content">
          <h1>My Skills</h1>
          <p>
            I am a passionate designer with love for story telling through
            architecture and cinema. My background is in Architecture and design
          </p>
          <p>
            I have a major interest for film and set design. Combining digital
            media and physcial modeling I love to come up with new designs,
            scenes and stories to tell.
          </p>
          <p>
            I am Skilled in{" "}
            <span>
              3D design {`&`} modelling, 2D illustrations and sketching and
              editing with Adobe CS6.
            </span>{" "}
            <br></br>I have a record of working with model making, graphical and
            technical presentations, conceptual design and art, sketches and
            drawings.
          </p>
        </div>
        <div className="visual-content">
          <Circle skills={skills} />
        </div>
      </div>
    </div>
  );
}

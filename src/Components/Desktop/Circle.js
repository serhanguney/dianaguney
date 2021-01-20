import React from "react";

import { motion } from "framer-motion";
import infoIcon from "../../SVGs/InfoIcon.svg";
import AdvancedIcon from "../AdvancedIcon";
import checkIcon from "../../SVGs/CheckIcon.svg";
import Signature from "../Signature";
export default function Circle({
  projects,
  skills,
  contact,
  tranSwipe,
  tranSmooth,
}) {
  return (
    <div className="circle-container">
      <motion.div
        className="circle-1"
        animate={{
          rotate: 360,
        }}
        transition={{
          loop: Infinity,
          duration: 20,
          ease: "linear",
        }}
      ></motion.div>
      <div className="circle-2">
        <div className="circle-2-interior">
          {projects &&
            projects[0].photos.map(
              (photo, index) =>
                index < 9 && (
                  <motion.div
                    key={index}
                    className="image-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <img src={photo} alt={index} />
                  </motion.div>
                )
            )}
          {skills && (
            <>
              <div className="skills-row">
                <div className="column">
                  {skills.map(
                    (skill, index) =>
                      (index / 2) % 1 === 0 && (
                        <div>
                          <h2>{skill.title}</h2>
                          <ul>
                            {skill.list.map((item, i) => (
                              <li>
                                <img src={checkIcon} alt="check-icon" />
                                <p>{item.name}</p>
                                <AdvancedIcon advanced={item.advanced} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                  )}
                </div>
                <div className="column">
                  {skills.map(
                    (skill, index) =>
                      (index / 2) % 1 !== 0 && (
                        <>
                          <h2>{skill.title}</h2>
                          <ul>
                            {skill.list.map((item, i) => (
                              <li>
                                <img src={checkIcon} alt="check-icon" />
                                <p>{item.name}</p>
                                <AdvancedIcon advanced={item.advanced} />
                              </li>
                            ))}
                          </ul>
                        </>
                      )
                  )}
                </div>
              </div>
              <div className="info-row">
                <img src={infoIcon} alt="info-icon" />
                <div className="information">
                  <div>
                    <AdvancedIcon advanced={true} />
                    <p>Advanced</p>
                  </div>
                  <div>
                    <AdvancedIcon />
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {contact && (
            <>
              <div className="contact-content">
                <h1>Contact Me</h1>
                <p>
                  Thank you for taking the time to browse through what I’ve been
                  doing. You can reach me using the contact information below.
                </p>
                <div>
                  <img src={contact.emailIcon} alt="email" />
                  <p>{contact.email}</p>
                </div>
                <div>
                  <img src={contact.phoneIcon} alt="phone" />
                  <p>{contact.phone}</p>
                </div>
              </div>
              <Signature
                delay={2}
                tranSwipe={tranSwipe}
                tranSmooth={tranSmooth}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

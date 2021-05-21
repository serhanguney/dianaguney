import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
//PAGES
import Navbar from "../Components/Navbar";

//IMAGES
import pageCover from "../Images/contactImage.jpg";
import email from "../Icons/contactIcon.svg";
import phone from "../Icons/phoneIcon.svg";
import signature from "../SVGs/Signature.svg";
import copyImage from "../SVGs/copyToClipboard.svg";
//ADDITIONALS
import { motion, useAnimation } from "framer-motion";

export default function Contact({ toggle, transition }) {
  const { menuOpen, setMenuOpen } = toggle;
  const { tranSwipe, tranSmooth } = transition;
  const [copyAlert, setCopyAlert] = useState(false);
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

  const handleCopy = () => {
    setCopyAlert(true);
    setTimeout(() => {
      setCopyAlert(false);
    }, 2000);
  };
  return (
    <div className="contact-page">
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
      <motion.div className="contact-content">
        <div className="info-container">
          <div className="text-aligner">
            <p>
              Thank you for taking the time to browse through what I’ve been
              doing. You can reach me using the contact information below.
            </p>
            <p>
              You can also find my designs at{" "}
              <a
                href="https://www.designersofcolour.co.uk"
                target="_blank"
                onClick={() => console.log("clicked")}
                style={{ textDecoration: "underline" }}
              >
                www.designersofcolour.co.uk
              </a>
            </p>
          </div>
          <div className="signature">
            <img src={signature} alt="signature" />
          </div>
          <h2>Contact Information</h2>
          <div className="email-container">
            <img src={email} alt="email" />
            <p>diana.guney.93@gmail.com</p>
            <CopyToClipboard
              text={"diana.guney.93@gmail.com"}
              onCopy={handleCopy}
            >
              <button>
                <img className="copy" src={copyImage} />
              </button>
            </CopyToClipboard>
          </div>

          <div className="phone-container">
            <img src={phone} alt="phone" />
            <p>+44 7737 882175</p>
            <CopyToClipboard text={"+447737882175"} onCopy={handleCopy}>
              <button>
                <img className="copy" src={copyImage} />
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="image-container">
          <img src={pageCover} alt="contact-cover" />
        </div>
        {copyAlert && (
          <motion.h4
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Copied succesfully
          </motion.h4>
        )}
      </motion.div>
    </div>
  );
}

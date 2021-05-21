import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import HomeDesktop from "./Pages/Desktop/HomeDesktop";
import ProjectsDesktop from "./Pages/Desktop/ProjectsDesktop";
import SkillsDesktop from "./Pages/Desktop/SkillsDesktop";
import ContactDesktop from "./Pages/Desktop/ContactDesktop";
//COMPONENTs
import Landscape from "./Components/Landscape";
//ADDITIONALS
import { AnimatePresence } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [landscape, setLandscape] = useState(
    window.innerWidth > 500 &&
      window.innerWidth < 900 &&
      window.innerHeight < 500
  );
  const [isDesktop, setDesktop] = useState(
    window.innerWidth > 500 && window.innerHeight > 500
  );
  const tranSwipe = (duration) => {
    return { duration: duration, ease: [0.6, 0.01, -0.05, 0.9] };
  };
  const tranSmooth = (duration) => {
    return { duration: duration, ease: [0.43, 0.13, 0.23, 0.96] };
  };
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("$vh", `${vh}px`);
    window.addEventListener("resize", () => {
      setLandscape(
        window.innerWidth > 500 &&
          window.innerWidth < 900 &&
          window.innerHeight < 500
      );
      setDesktop(window.innerWidth > 500 && window.innerHeight > 500);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setLandscape(
          window.innerWidth > 500 &&
            window.innerWidth < 900 &&
            window.innerHeight < 500
        );
        setDesktop(window.innerWidth > 500 && window.innerHeight > 500);
      });
    };
  }, []);

  return (
    <>
      {landscape ? (
        <Landscape />
      ) : (
        <Router basename="/">
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    render={() =>
                      isDesktop ? (
                        <HomeDesktop transition={{ tranSwipe, tranSmooth }} />
                      ) : (
                        <Home
                          toggle={{ menuOpen, setMenuOpen }}
                          transition={{ tranSwipe, tranSmooth }}
                        />
                      )
                    }
                  />
                  <Route
                    exact
                    path="/projects"
                    render={() =>
                      isDesktop ? (
                        <ProjectsDesktop
                          transition={{ tranSwipe, tranSmooth }}
                        />
                      ) : (
                        <Projects
                          toggle={{ menuOpen, setMenuOpen }}
                          transition={{ tranSwipe, tranSmooth }}
                        />
                      )
                    }
                  />
                  <Route
                    exact
                    path="/skills"
                    render={() =>
                      isDesktop ? (
                        <SkillsDesktop tranSwipe={tranSwipe} />
                      ) : (
                        <Skills
                          toggle={{ menuOpen, setMenuOpen }}
                          transition={{ tranSwipe, tranSmooth }}
                        />
                      )
                    }
                  />
                  <Route
                    exact
                    path="/contact"
                    render={() =>
                      isDesktop ? (
                        <ContactDesktop
                          transition={{ tranSmooth, tranSwipe }}
                        />
                      ) : (
                        <Contact
                          toggle={{ menuOpen, setMenuOpen }}
                          transition={{ tranSwipe, tranSmooth }}
                        />
                      )
                    }
                  />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Router>
      )}
    </>
  );
}

export default App;

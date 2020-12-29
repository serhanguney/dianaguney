import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import HomeDesktop from "./Pages/HomeDesktop";
//COMPONENTs
import Landscape from "./Components/Landscape";

//ADDITIONALS
import { AnimatePresence } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [landscape, setLandscape] = useState(
    window.innerWidth > 500 && window.innerWidth < 900
  );
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const tranSwipe = (duration) => {
    return { duration: duration, ease: [0.6, 0.01, -0.05, 0.9] };
  };
  const tranSmooth = (duration) => {
    return { duration: duration, ease: [0.43, 0.13, 0.23, 0.96] };
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLandscape(window.innerWidth > 500 && window.innerWidth < 900);
      setDesktop(window.innerWidth > 900);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setLandscape(window.innerWidth > 500 && window.innerWidth < 900);
        setDesktop(window.innerWidth > 900);
      });
    };
  });

  return (
    <>
      {landscape ? (
        <Landscape />
      ) : (
        <Router>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/dianaguney"
                    render={() =>
                      isDesktop ? (
                        <HomeDesktop />
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
                    render={() => (
                      <Projects
                        toggle={{ menuOpen, setMenuOpen }}
                        transition={{ tranSwipe, tranSmooth }}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/skills"
                    render={() => (
                      <Skills
                        toggle={{ menuOpen, setMenuOpen }}
                        transition={{ tranSwipe, tranSmooth }}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/contact"
                    render={() => (
                      <Contact
                        toggle={{ menuOpen, setMenuOpen }}
                        transition={{ tranSwipe, tranSmooth }}
                      />
                    )}
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

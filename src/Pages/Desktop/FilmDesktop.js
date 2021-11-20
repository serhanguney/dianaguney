import React, { useState, useRef, useEffect } from "react";
import { films } from "../../Projects/Films";
import { AnimatePresence } from "framer-motion";
import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";
import Loader from "../../Components/Loader";
import Slider from "../../Components/Desktop/Slider";
export default function FilmDesktop({ transition }) {
  //load is required for page loading animations
  const [load, setLoad] = useState(false);
  const { tranSwipe } = transition;

  //windowBlocks is for determining the available types of sliders.
  const windowBlocks = [
    { size: 800, width: `${100 / 4}%`, count: 4 },
    { size: 1100, width: `${100 / 5}%`, count: 5 },
    { size: 3000, width: `${100 / 6}%`, count: 6 },
  ];

  //block is for selecting the current slider type from the available types.
  const [block, setBlock] = useState({});

  useEffect(() => {
    //set the block type on load
    if (window.innerWidth > 1100) {
      setBlock({
        size: window.innerWidth,
        width: `${100 / 6}%`,
        count: 6,
      });
    } else if (window.innerWidth < 1100 && window.innerWidth > 800) {
      setBlock({
        size: window.innerWidth,
        width: `${100 / 5}%`,
        count: 5,
      });
    } else if (window.innerWidth < 800) {
      setBlock({
        size: window.innerWidth,
        width: `${100 / 4}%`,
        count: 4,
      });
    }
    //setting the block type on resize
    window.addEventListener("resize", () => {
      const filteredBlock = [];
      windowBlocks.map((item) => {
        if (window.innerWidth < item.size) {
          filteredBlock.push(item);
        }
      });
      //   use reduce to select the smallest in filteredBlock
      const smallest = filteredBlock.reduce(
        (min, item) => (min.size < item.size ? min : item),
        filteredBlock[0]
      );
      setBlock(smallest);
    });
    return () => {
      window.removeEventListener("resize", () => {
        const filteredBlock = [];
        windowBlocks.map((item) => {
          if (window.innerWidth < item.size) {
            filteredBlock.push(item);
          }
        });
        //   use reduce to select the smallest in filteredBlock
        const smallest = filteredBlock.reduce(
          (min, item) => (min.size < item.size ? min : item),
          filteredBlock[0]
        );
        setBlock(smallest);
      });
    };
  }, []);

  //imgRef is required to hold until the images are loaded
  const projectRef = useRef(0);
  function handleImageLoad() {
    setLoad(handleLoading);
  }
  function handleLoading() {
    const arr = projectRef.current.querySelectorAll("img");
    for (const img of arr) {
      if (!img.complete) {
        return false;
      }
      return true;
    }
  }
  return (
    <div className="projects" onLoad={handleImageLoad} ref={projectRef}>
      <NavbarDesktop tranSwipe={tranSwipe} />
      <AnimatePresence>{!load && <Loader />}</AnimatePresence>
      {films.map((project, index) => (
        <Slider
          key={index}
          project={project}
          tranSwipe={tranSwipe}
          block={block}
          load={load}
        />
      ))}
    </div>
  );
}

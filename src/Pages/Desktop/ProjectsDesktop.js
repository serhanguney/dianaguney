import React, { useEffect, useState } from "react";
import Slider from "../../Components/Desktop/Slider";
import { projects } from "../../Projects/Projects";
import NavbarDesktop from "../../Components/Desktop/NavbarDesktop";

export default function ProjectsDesktop({ transition }) {
  const { tranSwipe } = transition;

  //windowBlocks is for determining the available types of sliders.
  const windowBlocks = [
    { size: 800, width: `${100 / 4}%`, count: 4 },
    { size: 1100, width: `${100 / 5}%`, count: 5 },
    { size: 3000, width: `${100 / 6}%`, count: 6 },
  ];

  //block is for selecting the current slider type from the available types.
  const [block, setBlock] = useState({
    size: window.innerWidth,
    width: `${100 / 6}%`,
    count: 6,
  });
  const [images, setImages] = useState([]);

  useEffect(() => {
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
      // console.log("filteredBlock , smallest", [filteredBlock, smallest]);
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
  //setting the image count using the current block
  useEffect(() => {
    const imageCount = [];

    for (let i = 0; i < block.count; i++) {
      imageCount.push(<div className="slider-image"></div>);
    }
    setImages(imageCount);
  }, [block]);

  return (
    <div className="projects">
      <NavbarDesktop tranSwipe={tranSwipe} />
      {projects.map((project, index) => (
        <Slider
          key={index}
          project={project}
          tranSwipe={tranSwipe}
          block={block}
        />
      ))}

      {/* <div className="slider-mask">
        {images.map((item, index) => (
          <div
            className="slider-image-container"
            style={{ width: block.width }}
            key={index}
          >
            {item}
          </div>
        ))}
      </div> */}
    </div>
    // <Project>
    //   <Slider>
    //   </Slider>
    // </Project>
  );
}

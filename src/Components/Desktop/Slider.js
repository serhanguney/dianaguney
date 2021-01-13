import React, { useEffect, useState } from "react";

export default function Slider({ tranSwipe, project, block }) {
  const [sliderCount, setSliderCount] = useState([]);
  // console.log(block);
  useEffect(() => {
    if (block.count) {
      //set the image block thresholds for how many slider-masks we'll have
      const division = project.photos.reduce((thresholds, photo, index) => {
        if ((index / block.count) % 1 === 0) {
          thresholds.push(index);
        }
        return thresholds;
      }, []);
      console.log("divide by", [division, project.photos.length]);

      setSliderCount(division);
    }
  }, [block]);
  // useEffect(() => console.log(sliderCount), [sliderCount]);
  return (
    <div className="project-container">
      <h1>{project.title}</h1>
      <p>{project.text}</p>
      <div className="slider-container">
        {sliderCount.map((slider, i) => (
          <div key={i} className="slider-mask">
            {project.photos.map(
              (photo, index) =>
                index < block.count && (
                  <div
                    key={index}
                    className="card"
                    style={{ width: block.width }}
                  >
                    <div className="slider-image-container">
                      <img className="slider-image" src={photo} alt={index} />
                    </div>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

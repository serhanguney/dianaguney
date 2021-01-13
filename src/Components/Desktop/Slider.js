import React, { useEffect, useState } from "react";

export default function Slider({ tranSwipe, project, block }) {
  return (
    <div className="project-container">
      <h1>{project.title}</h1>
      <p>{project.text}</p>
      <div className="slider-mask">
        {project.photos.map(
          (photo, index) =>
            index < block.count && (
              <div className="card" style={{ width: block.width }}>
                <div className="slider-image-container">
                  <img className="slider-image" src={photo} alt={index} />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

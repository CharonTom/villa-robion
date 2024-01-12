import React from "react";
import SliderVisit from "./sliders/SliderVisit";
import SliderJardin from "./sliders/SliderJardin";

function VisitDetails({ images, text }) {
  return (
    <>
      <div className="w-1/2">
        <SliderVisit images={images} />
      </div>
      <div className="w-1/2">
        <p className="text-[80%]">{text}</p>
      </div>
    </>
  );
}

export default VisitDetails;

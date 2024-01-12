import React from "react";
import SliderVisit from "./sliders/SliderVisit";

interface VisitDetailsProps {
  images: string[];
  text: string;
}

function VisitDetails({ images, text }: VisitDetailsProps) {
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

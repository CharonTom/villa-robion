import React from "react";
import SliderVisit from "./sliders/SliderVisit";

interface VisitDetailsProps {
  images: string[];
  text: string;
  title: string;
}

function VisitDetails({ images, text, title }: VisitDetailsProps) {
  return (
    <>
      <div className="w-[60%]">
        <SliderVisit images={images} />
      </div>

      <div className="w-[40%]">
        <h3 className="mb-8">{title}</h3>
        <p className="">{text}</p>
      </div>
    </>
  );
}

export default VisitDetails;

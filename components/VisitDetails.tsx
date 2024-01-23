import SliderVisit from "./sliders/SliderVisit";

interface VisitDetailsProps {
  images: string[];
  text: string;
  title: string;
}

function VisitDetails({ images, text, title }: VisitDetailsProps) {
  return (
    <>
      <div className="w-full md:w-[50%]">
        <SliderVisit images={images} />
      </div>

      <div className="w-full md:w-[40%]">
        <h3 className="my-4 text-3xl md:text-4xl lg:text-5xl">{title}</h3>
        <p className="my-4">{text}</p>
      </div>
    </>
  );
}

export default VisitDetails;

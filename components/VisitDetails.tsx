import SliderVisit from "./sliders/SliderVisit";

interface VisitDetailsProps {
  images: string[];
  text: string;
  title: string;
  index: number;
}

function VisitDetails({ images, text, title, index }: VisitDetailsProps) {
  const reverseOrder = index % 2 === 1; // Inverser l'ordre pour les indices impairs

  return (
    <div className="md:p-2 my-12 md:my-24">
      <h3 className="md:hidden my-4 text-3xl">{title}</h3>
      <div
        className={`flex flex-col md:flex-row md:items-center gap-x-10 ${
          reverseOrder ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-[50%]">
          <SliderVisit images={images} />
        </div>

        <div className="w-full md:w-[40%]">
          <h2 className="hidden md:block my-4 md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="my-4">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default VisitDetails;

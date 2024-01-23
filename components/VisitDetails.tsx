import SliderVisit from "./sliders/SliderVisit";

interface VisitDetailsProps {
  images: string[];
  text: string;
  title: string;
  index: number; // Nouvelle propriété pour l'index du composant
}

function VisitDetails({ images, text, title, index }: VisitDetailsProps) {
  const reverseOrder = index % 2 === 1; // Inverser l'ordre pour les indices impairs

  return (
    <div className="md:p-2 mb-6 md:my-8">
      <h3 className="md:hidden my-4 text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h3>
      <div
        className={`flex flex-col md:flex-row md:items-center gap-x-10 ${
          reverseOrder ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Utilisation de la classe 'md:flex-row-reverse' si l'index est impair */}
        <div className="w-full md:w-[50%]">
          <SliderVisit images={images} />
        </div>

        <div className="w-full md:w-[40%]">
          <h3 className="hidden md:block my-4 text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h3>
          <p className="my-4">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default VisitDetails;

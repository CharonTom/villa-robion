import VisitDetails from "../VisitDetails";
import { galleryData } from "@/utils/details-data";

function Galleries() {
  return (
    <section className="px-4">
      <h1 className="md:p-2 my-16 text-4xl md:text-5xl lg:text-6xl">
        Visitez en détail notre maison.
      </h1>

      <div>
        {galleryData.map((gallery, index) => (
          <div key={gallery.id} id={gallery.id}>
            <VisitDetails {...gallery} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galleries;

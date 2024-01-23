import Map from "../Map";

function Localisation() {
  return (
    <section className="p-4 sm:p-12">
      <div className="flex flex-col items-center gap-y-10 md:flex-row md:items-center">
        <div className="w-full md:w-1/2">
          <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl">
            La localisation
          </h2>
          <p className="w-[80%] text-xl md:text-2xl">
            Notre maison se situe à <span className="font-bold">Robion</span>,
            un village au pied du Luberon dans le Vaucluse.
            L&apos;Isle-sur-la-Sorgue et Cavaillon se situent à moins de 10 km.
            Avignon est à 30 km et Marseille à 1 heure de voiture.
          </p>
        </div>

        <div className="w-full md:w-1/2 h-[380px] md:h-[500px]">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Localisation;

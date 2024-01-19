import React from "react";
import Map from "../Map";

function Localisation() {
  return (
    <section className="px-4 sm:p-12">
      <div className="flex flex-col items-center gap-y-10 md:flex-row md:items-center">
        <div className="w-full md:w-1/2">
          <h2 className="mb-8 text-[30px] md:text-[34px] lg:text-[48px]">
            Localisation
          </h2>
          <p className="w-[80%]">
            Notre maison se situe à <span className="font-bold">Robion</span>,
            un village au pied du Luberon dans le Vaucluse à 30 km
            d&apos;Avignon. Une piste cyclable à 100 mètres de la maison vous
            amène jusqu&apos;à Apt et au-delà. Et de l&apos;autre côté
            jusqu&apos;à Cavaillon.
          </p>
        </div>

        <div className="w-full md:w-1/2 h-[500px]">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Localisation;

import React from "react";
import Map from "../Map";

function Localisation() {
  return (
    <section className="p-16">
      <div className="flex-center">
        <div className="w-1/2">
          <h2 className="text-[50px] mb-8">Localisation</h2>
          <p className="w-[80%]">
            Notre maison se situe à <span className="font-bold">Robion</span>,
            un village au pied du Luberon dans le Vaucluse à 30 km
            d&apos;Avignon. Une piste cyclable à 100 mètres de la maison vous
            amène jusqu&apos;à Apt et au-delà. Et de l&apos;autre côté
            jusqu&apos;à Cavaillon.
          </p>
        </div>

        <div className="w-1/2 h-[500px] px-8">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Localisation;

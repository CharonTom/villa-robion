import React from "react";
import VisitDetails from "../VisitDetails";

function Galleries() {
  const gardenSliderProps = {
    images: [
      "garden1.webp",
      "garden2.webp",
      "garden3.webp",
      "garden4.webp",
      "garden5.webp",
      "garden6.webp",
      "garden7.webp",
    ],
    title: "Le Jardin",
    text: "La piscine, la table de ping-pong, la plancha, les transats, hamacs et salons de jardin créent un cadre propice à la détente. Sérénité et loisir assuré",
  };

  const livingSliderProps = {
    images: [
      "living1.webp",
      "living2.webp",
      "living3.webp",
      "living4.webp",
      "living5.webp",
    ],
    title: "Les Salons",
    text: "Notre maison contient Un salon au rez-de-chaussez et un second à l'étage  ",
  };
  const bedSliderProps = {
    images: ["bed1.webp", "bed2.webp", "bed3.webp", "bed4.webp"],
    title: "Les Chambres",
    text: "La maison à 3 chambres, chacune avec leurs spécificités. La chambre du bas contient une salle de bain, une à l'étage à un grand balcon de 25m² et la seconde chambre de l'étage contient une mezzanine.",
  };

  const bathSliderProps = {
    images: ["bath1.webp", "bath2.webp"],
    title: "Les Salles de bain",
    text: "Il y a deux salles de bains, une accessible depuis la chambre du bas, et la seconde est à l'étage. Il y'a également des toilettes à chaque étages",
  };

  return (
    <section className="p-4">
      <h2 className="mb-8 mt-5 text-center text-3xl md:text-4xl lg:text-5xl">
        Visitez notre maison en détails
      </h2>
      <div
        id="garden"
        className="flex flex-col-reverse md:flex-row md:items-center gap-x-10 md:p-6 mb-6 md:my-16"
      >
        <VisitDetails {...gardenSliderProps} />
      </div>
      <div
        id="living"
        className="flex flex-col-reverse md:flex-row-reverse md:items-center gap-x-10 md:p-6 mb-6 md:my-16"
      >
        <VisitDetails {...livingSliderProps} />
      </div>
      <div
        id="bed"
        className="flex flex-col-reverse md:flex-row md:items-center gap-x-10 mb-6 md:my-16 md:p-6"
      >
        <VisitDetails {...bedSliderProps} />
      </div>
      <div
        id="bath"
        className="flex flex-col-reverse md:flex-row-reverse md:items-center gap-x-10 mb-6 md:my-16 md:p-6"
      >
        <VisitDetails {...bathSliderProps} />
      </div>
    </section>
  );
}

export default Galleries;

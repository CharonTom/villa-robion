import React from "react";
import VisitDetails from "../VisitDetails";

function Galleries() {
  const gardenSliderProps = {
    images: [
      "garden1.jpg",
      "garden2.jpg",
      "garden3.jpg",
      "garden4.jpg",
      "garden5.jpg",
      "garden6.jpg",
      "garden7.jpg",
    ],
    text: "La piscine, la table de ping-pong, la plancha, les transats, hamacs et salons de jardin créent un cadre propice à la détente. Sérénité et loisir assuré",
  };

  const livingSliderProps = {
    images: [
      "living1.jpg",
      "living2.jpg",
      "living3.jpg",
      "living4.jpg",
      "living5.jpg",
    ],
    text: "Notre maison contient Un salon au rez-de-chaussez et un second à l'étage  ",
  };
  const bedSliderProps = {
    images: ["bed1.jpg", "bed2.jpg", "bed3.jpg", "bed4.jpg"],
    text: "La maison à 3 chambres, chacune avec leurs spécificités. La chambre du bas contient une salle de bain, une à l'étage à un grand balcon de 25m² et la seconde chambre de l'étage contient une mezzanine.",
  };

  const bathSliderProps = {
    images: ["bath1.jpg", "bath2.jpg"],
    text: "Il y a deux salles de bains, une accessible depuis la chambre du bas, et la seconde est à l'étage. Il y'a également des toilettes à chaque étages",
  };

  return (
    <section>
      <h2 className="p-10 text-center">Visitez notre maison</h2>
      <div className="flex-center gap-x-20 p-20">
        <VisitDetails {...gardenSliderProps} />
      </div>
      <div className="flex-center flex-row-reverse gap-x-20 p-20">
        <VisitDetails {...livingSliderProps} />
      </div>
      <div className="flex-center gap-x-20 p-20">
        <VisitDetails {...bedSliderProps} />
      </div>
      <div className="flex-center flex-row-reverse gap-x-20 p-20">
        <VisitDetails {...bathSliderProps} />
      </div>
    </section>
  );
}

export default Galleries;

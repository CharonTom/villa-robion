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
    text: "Texte pour le premier slider.",
  };

  const livingSliderProps = {
    images: [
      "living1.jpg",
      "living2.jpg",
      "living3.jpg",
      "living4.jpg",
      "living5.jpg",
    ],
    text: "Texte pour le deuxième slider.",
  };
  const bedSliderProps = {
    images: ["bed1.jpg", "bed2.jpg", "bed3.jpg", "bed4.jpg"],
    text: "Texte pour le 3.",
  };

  const bathSliderProps = {
    images: ["bath1.jpg", "bath2.jpg"],
    text: "Texte pour le 4 slider.",
  };

  return (
    <section>
      <div className="p-20 container">
        <p className="text-[58px]">
          Découvrez l&apos;élégance et le charme de notre maison nichée dans le
          parc régional du Luberon.Cette résidence lumineuse offre une échappée
          paisible où le style contemporain s&apos;harmonise avec le calme
          provençal.
        </p>
      </div>

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

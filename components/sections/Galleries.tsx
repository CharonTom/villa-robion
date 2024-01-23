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
      "garden8.webp",
    ],
    title: "Le jardin et la piscine",
    text: "Dans notre jardin arboré de 1200m² vous trouverez un cadre propice à la détente avec la paillote indonésienne, le bassin et ses poissons rouges, les salons-de-jardin et la table de ping-pong. La piscine sécurisée avec ses 8 mètres de diamètre et 1,40m de hauteur d’eau est l'espace idéal pour s'amuser et se rafraîchir en famille. Vous pourrez profiter du soleil sur les transats ou vous détendre à l’ombre de la paillote. ",
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
    text: "Notre maison à deux salons, celui du rez-de-chaussée fait face à la terrasse et à un salon de jardin. A l'étage, dans le vide sur séjour, le second salon vous propose un coin tv, une bibliothèque et un second balcon avec une vue sur la montagne du Petit Luberon.",
  };

  const kitchenSliderProps = {
    images: ["kitchen1.webp", "kitchen2.webp", "kitchen3.webp"],
    title: "La cuisine et les coins repas",
    text: "Dans la cuisine, vous trouverez tout l’équipement et les ustensiles nécessaire : four, micro-onde, plaque induction, lave-vaisselle, cafetière expresso, bouilloire électrique. Dans le cellier attenant se trouve le lave-linge, sèche-linge ainsi qu’un deuxième réfrigérateur avec un grand congélateur. Vous pouvez prendre vos repas à l’intérieur devant la baie vitrée qui donne sur la piscine et la paillote. Ou bien mangez à l’extérieur à l’abri de la terrasse et profiter de la plancha.",
  };

  const bedSliderProps = {
    images: ["bed1.webp", "bed2.webp", "bed3.webp", "bed4.webp"],
    title: "Les chambres",
    text: "La suite parentale du rez-de-chaussée, avec son accès direct à la piscine, possède une salle d'eau privative avec douche. A l'étage, se trouve deux autres chambres : l'une possède une terrasse de 25m² qui surplombe le jardin, l'autre contient une mezzanine et peut donc accueillir quatres personnes.",
  };

  const bathSliderProps = {
    images: ["bath1.webp", "bath2.webp"],
    title: "Les Salles de bain",
    text: "Au rez-de-chaussée se trouve la salle d'eau avec une douche accessible depuis la chambre parentale. A l'étage, la salle de bain contient une baignoire. Il y a aussi deux WC indépendants à chaque étage",
  };

  return (
    <section className="p-4">
      <h2 className="mb-8 mt-5 text-center text-3xl md:text-4xl lg:text-5xl">
        Gallerie photos et descriptif
      </h2>

      <div
        id="garden"
        className="flex flex-col-reverse md:flex-row md:items-center gap-x-10 md:p-6 mb-6 md:my-16"
      >
        <VisitDetails {...gardenSliderProps} />
      </div>

      <div
        id="kitchen"
        className="flex flex-col-reverse md:flex-row-reverse md:items-center gap-x-10 mb-6 md:my-16 md:p-6"
      >
        <VisitDetails {...kitchenSliderProps} />
      </div>

      <div
        id="living"
        className="flex flex-col-reverse md:flex-row md:items-center gap-x-10 md:p-6 mb-6 md:my-16"
      >
        <VisitDetails {...livingSliderProps} />
      </div>

      <div
        id="bed"
        className="flex flex-col-reverse md:flex-row-reverse md:items-center gap-x-10 mb-6 md:my-16 md:p-6"
      >
        <VisitDetails {...bedSliderProps} />
      </div>
      <div
        id="bath"
        className="flex flex-col-reverse md:flex-row md:items-center gap-x-10 mb-6 md:my-16 md:p-6"
      >
        <VisitDetails {...bathSliderProps} />
      </div>
    </section>
  );
}

export default Galleries;

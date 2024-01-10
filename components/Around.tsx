import React from "react";
import SliderRegion from "./sliders/SliderRegion";

function Around() {
  return (
    <section className="p-4 mx-auto py-10">
      <h2 className="text-center text-[40px] p-10">
        Ce que vous allez adorer dans la région
      </h2>
      <SliderRegion />
      <p className="text-center p-10">
        De plus, une piste cyclable se situe à 100 mètre de la maison qui vous
        amène jusqu&apos;à Apt et au delà. Et de l&apos;autre coté jusqu&apos;à
        Cavaillon
      </p>
    </section>
  );
}

export default Around;

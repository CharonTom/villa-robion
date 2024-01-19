import React from "react";
import SliderArea from "../sliders/SliderArea";

function Around() {
  return (
    <section className="p-4 md:p-8 mx-auto md:py-10">
      <h2 className="text-center my-6 sm:p-6 text-3xl md:text-4xl lg:text-5xl mx-auto w-[80%]">
        Ce que vous allez adorer dans la région
      </h2>
      <SliderArea />
      <p className="text-left mt-6 sm:p-10 text-xl sm:text-2xl md:text-3xl md:w-[60%] ">
        De plus, une piste cyclable se situe à 100 mètre de la maison qui vous
        amène jusqu&apos;à Apt et au delà. Et de l&apos;autre coté jusqu&apos;à
        Cavaillon
      </p>
    </section>
  );
}

export default Around;

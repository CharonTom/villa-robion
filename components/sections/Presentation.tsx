import React from "react";
import SliderPresentation from "../sliders/SliderPresentation";
import Image from "next/image";

function Presentation() {
  return (
    <section id="presentation" className="p-4 md:p-8 lg:p-8">
      <div className="flex flex-col items-center md:flex-row gap-4 sm:gap-8 md:gap-12">
        <div className="my-8 w-full md:w-3/5">
          <p className="text-3xl md:text-4xl lg:text-5xl md:p-8 ">
            Découvrez l&apos;élégance et le charme de notre maison nichée au
            coeur de la Provence.
          </p>
        </div>
        <div className="relative w-full h-[280px] sm:w-[500px] sm:h-[400px] bg-primary-pink rounded-xl mx-auto">
          <Image
            alt="maison"
            src="/images/dronepic.webp"
            fill
            className="rounded-xl p-[2px] object-cover"
          />
        </div>
      </div>
      <p className="text-2xl md:text-3xl lg:text-[4xl] text-center my-6 md:my-12 md:w-[65%] mx-auto ">
        Cette résidence lumineuse offre une échappée paisible où le style
        contemporain s&apos;harmonise avec le calme provençal.
      </p>
      <SliderPresentation />
    </section>
  );
}

export default Presentation;

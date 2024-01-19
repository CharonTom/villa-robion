import React from "react";
import Button from "../Button";
import Link from "next/link";
import SliderPresentation from "../sliders/SliderPresentation";
import Image from "next/image";

function Presentation() {
  return (
    <section id="presentation" className="p-4 md:p-8 lg:p-8">
      <div className="flex flex-col items-center md:flex-row gap-4 sm:gap-8 md:gap-12">
        <div className="w-full md:w-3/5">
          <p className="text-[30px] md:text-[34px] lg:text-[44px] xl:text-[48px] p-4">
            Découvrez l&apos;élégance et le charme de notre maison nichée au
            coeur de la Provence.
          </p>
        </div>
        <div className="relative w-[320px] h-[280px] sm:w-[500px] sm:h-[400px] bg-primary-pink rounded-xl mx-auto">
          <Image
            alt="maison"
            src="/images/jardin-int.webp"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl p-1"
            unoptimized={true}
          />
        </div>
      </div>
      <p className="text-2xl md:text-3xl lg:text-[4xl] text-center my-12">
        Cette résidence lumineuse offre une échappée paisible où le style
        contemporain s&apos;harmonise avec le calme provençal.
      </p>
      <SliderPresentation />
    </section>
  );
}

export default Presentation;

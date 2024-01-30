import Image from "next/image";

import SliderPresentation from "../sliders/SliderPresentation";

function Presentation() {
  return (
    <section id="presentation" className="p-4 md:p-8 lg:p-8">
      <div className="flex flex-col items-center md:flex-row gap-4 sm:gap-8 md:gap-12">
        <div className="mb-8 w-full md:w-3/5">
          <p className="text-3xl md:text-4xl lg:text-5xl md:p-8 ">
            Découvrez l&apos;élégance et le charme de notre maison nichée au
            coeur de la Provence.
          </p>
        </div>
        <div className="relative w-full h-[280px] sm:w-[500px] sm:h-[400px] bg-primary-pink rounded-xl mx-auto">
          <Image
            alt="Maison Provençale avec piscine vue du ciel"
            src="/images/dronepic.webp"
            fill
            className="rounded-xl p-[2px] object-cover"
            sizes="(min-width: 1540px) 496px, (min-width: 780px) calc(19.05vw + 206px), (min-width: 640px) 496px, calc(100vw - 36px)"
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

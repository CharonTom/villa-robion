import React from "react";
import Button from "../Button";
import Link from "next/link";
import SliderPresentation from "../sliders/SliderPresentation";
import Image from "next/image";

function Presentation() {
  return (
    <section id="presentation">
      <div className="flex-between p-20 container">
        <div className="w-[55%]">
          <p className="text-[40px]">
            Découvrez l&apos;élégance et le charme de notre maison nichée dans
            le parc régional du Luberon.
          </p>
          <p className="text-[32px]">
            Cette résidence lumineuse offre une échappée paisible où le style
            contemporain s&apos;harmonise avec le calme provençal.
          </p>
        </div>
        <div className="relative w-[500px] h-[400px] bg-primary-pink rounded-xl">
          <Image alt="maison" src="/images/logo.png" fill objectFit="contain" />
        </div>
      </div>
      <SliderPresentation />
      <div className="text-center">
        <Link href="/visit">
          <Button text="Découvrez notre maison" onClick={() => {}} />
        </Link>
      </div>
    </section>
  );
}

export default Presentation;

import React from "react";
import Button from "./Button";
import Link from "next/link";
import SliderPresentation from "./sliders/SliderPresentation";

function Presentation() {
  return (
    <section>
      <div className="flex-between p-20 container">
        <p className="text-[40px] w-[55%]" id="presentation">
          Découvrez l&apos;élégance et le charme de notre maison nichée dans le
          parc régional du Luberon. <br />
          Cette résidence lumineuse offre une échappée paisible où le style
          contemporain s&apos;harmonise avec le calme provençal.
        </p>
        <div className="w-[500px] h-[400px] bg-primary-pink rounded-xl"></div>
      </div>
      <SliderPresentation />
      <div className="text-center">
        <Link href="/visit">
          <Button text="Découvrer notre maison" onClick={() => {}} />
        </Link>
      </div>
    </section>
  );
}

export default Presentation;

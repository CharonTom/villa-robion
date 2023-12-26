import Image from "next/image";
import React from "react";
import Button from "./Button";

function Presentation() {
  return (
    <div className="container">
      <div className="py-10 container text-center" id="presentation">
        <p className="text-[48px]">
          Découvrez l&apos;élégance et le charme de notre maison nichée dans le
          parc régional du Luberon. <br />
          Cette résidence lumineuse offre une échappée paisible où le style
          contemporain s&apos;harmonise avec le calme provençal.
        </p>
      </div>
      <div style={{ width: "100%", height: "80vh", position: "relative" }}>
        <Image
          src="/images/slider1.jpg"
          alt="slider"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <div className="text-center py-10">
        <Button text={"Découvrer notre maison"} />
      </div>
    </div>
  );
}

export default Presentation;

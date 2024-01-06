import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

function Presentation() {
  return (
    <section className="">
      <p
        className="py-10 container text-center mx-auto text-[48px]"
        id="presentation"
      >
        Découvrez l&apos;élégance et le charme de notre maison nichée dans le
        parc régional du Luberon. <br />
        Cette résidence lumineuse offre une échappée paisible où le style
        contemporain s&apos;harmonise avec le calme provençal.
      </p>
      <div
        style={{ width: "98%", height: "80vh", position: "relative" }}
        className="mx-auto"
      >
        <Image
          src="/images/slider1.jpg"
          alt="slider"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <div className="text-center py-10">
        <Link href="/visit">
          <Button text="Découvrer notre maison" onClick={() => {}} />
        </Link>
      </div>
    </section>
  );
}

export default Presentation;

"use client";

import React from "react";
import Button from "../Button";
import { useReservationContext } from "@/context/NavBar";
import SliderReview from "../sliders/SliderReview";

function Booking() {
  const { openPanel } = useReservationContext();

  return (
    <section className="mx-auto">
      <p className="py-10 container text-center mx-auto  text-[24px] md:text-[30px] lg:text-[34px]">
        Notre petit coin de paradis vous attend. Réservez ou échangez dès
        maintenant pour vivre une expérience authentique et chaleureuse dans
        notre maison. Bienvenue chez nous !
      </p>

      <SliderReview />

      <div className="text-center">
        <Button onClick={openPanel} text="Faites votre réservation" />
      </div>
    </section>
  );
}

export default Booking;

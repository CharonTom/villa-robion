import React from "react";
import Button from "./Button";
import { useReservationContext } from "@/context/NavBar";

function Booking() {
  const { openPanel } = useReservationContext();

  return (
    <section className="container mx-auto">
      <p className="py-10 container text-center mx-auto text-[48px]">
        Notre petit coin de paradis vous attend. Réservez ou échangez dès
        maintenant pour vivre une expérience authentique et chaleureuse dans
        notre maison. Bienvenue chez nous !
      </p>

      <div className="bg-primary-pink rounded-xl h-[70vh] w-full my-10 mx-auto"></div>
      <div className="text-center py-10">
        <Button onClick={openPanel} text="Faites votre réservation" />
      </div>
    </section>
  );
}

export default Booking;

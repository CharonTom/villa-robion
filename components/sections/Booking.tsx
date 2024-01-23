"use client";

import { useReservationContext } from "@/context/PanelContext";
import { useSidebarContext } from "@/context/SidebarContext";

import Button from "../Button";
import SliderReview from "../sliders/SliderReview";

function Booking() {
  const { openPanel } = useReservationContext();
  const { openSidebar } = useSidebarContext();

  return (
    <section className="mx-auto p-4">
      <p className="text-center sm:text-xl md:text-2xl md:w-[75%] mx-auto lg:text-3xl">
        Notre petit coin de paradis vous attend. Réservez ou échangez dès
        maintenant pour vivre une expérience authentique et chaleureuse dans
        notre maison. Bienvenue chez nous !
      </p>

      <SliderReview />

      <div className="text-center md:block hidden">
        <Button onClick={openPanel} text="Faites votre réservation" />
      </div>
      <div className="text-center text-sm md:hidden">
        <Button onClick={openSidebar} text="Faites votre réservation" />
      </div>
    </section>
  );
}

export default Booking;

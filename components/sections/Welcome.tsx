import React from "react";
import { useReservationContext } from "@/context/NavBar";
import ReservationButton from "../ReservationButton";
import ScrollDown from "../ScrollDown";

function Welcome() {
  const { openPanel } = useReservationContext();

  return (
    <section className="h-screen w-full">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover brightness-75"
      >
        <source src="/bgvid.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-[25%] left-[3%] w-[60%]">
        <h1 className="text-white leading-tight tracking-tight [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)] lg:text-[88px] md:text-[68px] sm:text-[48px] text-[40px]">
          Séjourner dans une villa au sein du parc régional du Luberon.
        </h1>
      </div>

      <div className="absolute bottom-8 right-2 sm:bottom-10 sm:right-20">
        <ReservationButton openPanel={openPanel} />
      </div>

      <ScrollDown />
    </section>
  );
}

export default Welcome;

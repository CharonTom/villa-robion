import React from "react";
import Button from "./Button";
import { useReservationContext } from "@/context/NavBar";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiStarSFill } from "react-icons/ri";
import SliderReview from "./SliderReview";

function Booking() {
  const { openPanel } = useReservationContext();

  return (
    <section className="mx-auto">
      <p className="py-10 container text-center mx-auto text-[48px]">
        Notre petit coin de paradis vous attend. Réservez ou échangez dès
        maintenant pour vivre une expérience authentique et chaleureuse dans
        notre maison. Bienvenue chez nous !
      </p>
      {/* Avis Airbnb */}
      <SliderReview />
      {/* Avis Home Exchange */}
      {/* <SliderReview /> */}

      <div className="text-center">
        <Button onClick={openPanel} text="Faites votre réservation" />
      </div>
    </section>
  );
}

export default Booking;

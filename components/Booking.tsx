import React from "react";
import Button from "./Button";
import { useReservationContext } from "@/context/NavBar";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiStarSFill } from "react-icons/ri";

function Booking() {
  const { openPanel } = useReservationContext();

  return (
    <section className="container mx-auto">
      <p className="py-10 container text-center mx-auto text-[48px]">
        Notre petit coin de paradis vous attend. Réservez ou échangez dès
        maintenant pour vivre une expérience authentique et chaleureuse dans
        notre maison. Bienvenue chez nous !
      </p>

      <div className="flex h-[300px]">
        <div className="w-1/4  flex flex-col items-center justify-center">
          <div>Excellent</div>
          <div className="flex mb-2">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div>basé sur 40 avis</div>
          {/* <Image  /> */}
        </div>
        <div className="w-3/4 py-4 px-4 bg-dark container justify-content-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="text-center py-10">
        <Button onClick={openPanel} text="Faites votre réservation" />
      </div>
    </section>
  );
}

export default Booking;

"use client";

import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const slidesData = [
  {
    image: "/images/RegionSlider/gordes.jpg",
    title: "Le parc régional du Luberon et ses nombreux villages classés",
    localisation: "Gordes, 14 km",
  },
  {
    image: "/images/RegionSlider/isle.jpg",
    title:
      "Les roues à eau de l'Isle sur Sorgue, son marché, son usine de tapenade...",
    localisation: "L'Isle-sur-la-sorgue, 9 km",
  },
  {
    image: "/images/RegionSlider/avignon.jpg",
    title: "Le Palais des papes d'Avignon, ses places, ses restaurants...",
    localisation: "Avignon, 29 km",
  },
  {
    image: "/images/RegionSlider/colorado-provencal.jpg",
    title: 'Le pays d\'Apt et son "Colorado Provençal"',
    localisation: "Rustrel, 39 km",
  },
];

function SliderRegion() {
  return (
    <div className="slider-region w-full p-4">
      <Swiper
        autoplay
        spaceBetween={15}
        slidesPerView={"auto"}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor={true}
        className="h-[55vh] w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="slider"
              fill
              // sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg brightness-90"
            />
            <div className="relative h-full text-white px-8 pt-6 flex flex-col justify-start gap-y-20">
              <h3 className="text-[25px] [text-shadow:_3px_3px_20px_rgb(0_0_0_/_100%)]">
                {slide.title}
              </h3>
              <p className="absolute bottom-4 right-4 [text-shadow:_1px_1px_10px_rgb(0_0_0_/_70%)]">
                {slide.localisation}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderRegion;

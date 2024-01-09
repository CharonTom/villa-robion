"use client";

import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const slidesData = [
  {
    image: "/images/RegionSlider/gordes.jpg",
    title: "Le parc régional du Luberon et ses nombreux villages classés 11 km",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias sit nam commodi accusantium laboriosam quis delectus voluptate architecto numquam, iure repudiandae.",
  },
  {
    image: "/images/RegionSlider/isle.jpg",

    title:
      "Les roues à eau de l'Isle sur Sorgue, son marche, son usine de tapenade 12 km",
    content:
      "usantium laboriosam quis delectus voluptate architecto numquam, iure repudiandae.",
  },
  {
    image: "/images/RegionSlider/avignon.jpg",

    title:
      "Le Palais des papes d'Avignon, ses places, ses restaurants... 30 km",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias sit nam commodi accusantium laboriosam quis delectus voluptate architecto numquam, iure repudiandae.",
  },
  {
    image: "/images/RegionSlider/colorado-provencal.jpg",

    title: "Le Colorado Provencale",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias sit nam commodi accusantium laboriosam quis delectus voluptate architecto numquam, iure repudiandae.",
  },
];

function SliderRegion() {
  return (
    <div className="slider-region w-full p-4">
      <Swiper
        spaceBetween={15}
        slidesPerView={"auto"}
        modules={[Pagination, Navigation]}
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
              <h3 className="text-[20px] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderRegion;

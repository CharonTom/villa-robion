"use client";

import Image from "next/image";
import React from "react";

import { areaSliderData } from "@/utils/area-data";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function SliderArea() {
  return (
    <div className="slider-area w-full">
      <Swiper
        autoplay
        spaceBetween={15}
        loop
        slidesPerView={"auto"}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor={true}
        className="h-[35vh] md:h-[45vh] lg:h-[55vh] w-full"
      >
        {areaSliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="slider"
              fill
              sizes="auto"
              style={{ objectFit: "cover" }}
              className="rounded-lg brightness-90"
              unoptimized={true}
            />
            <div className="relative h-full text-white p-4 flex flex-col justify-start gap-y-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
                {slide.title}
              </h3>
              <p className="text-sm sm:text-base absolute bottom-4 right-4 [text-shadow:_1px_1px_10px_rgb(0_0_0_/_100%)]">
                {slide.localisation}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderArea;

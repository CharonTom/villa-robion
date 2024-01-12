"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function SliderVisit({ images }: { images: string[] }) {
  return (
    <div>
      <Swiper
        spaceBetween={15}
        className="w-[80%] h-[400px] rounded-xl bg-black"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex-center h-full w-full">
              <Image
                alt={`Image ${index + 1}`}
                src={`/images/VisitSlider/${image}`}
                fill
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderVisit;

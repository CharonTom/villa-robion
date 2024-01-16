"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function SliderVisit({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[400px] rounded-xl bg-black"
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

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-32 rounded-lg"
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

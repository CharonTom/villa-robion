"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
//import SwiperClass from "swiper/types/swiper-class";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function SliderVisit({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

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
        className="h-[400px] rounded-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex-center h-full w-full relative">
              <Image
                alt={`Image ${index + 1}`}
                src={`/images/VisitSlider/${image}`}
                fill
                unoptimized
                priority={true}
                className="block object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-32 rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex-center h-full w-full relative">
              <Image
                alt={`Image ${index + 1}`}
                src={`/images/VisitSlider/${image}`}
                fill
                priority={true}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
                className="block object-cover cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderVisit;
// SliderVisit.jsx

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function SliderVisit({ images }) {
  return (
    <div>
      <Swiper className="w-full h-[400px] rounded-xl">
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

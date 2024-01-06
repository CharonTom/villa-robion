import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderPresentation() {
  return (
    <div className="p-5">
      <Swiper
        spaceBetween={25}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        // navigation={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image
            src="/images/slider1.jpg"
            alt="slider"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slider2.jpg"
            alt="slider"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slider3.jpg"
            alt="slider"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

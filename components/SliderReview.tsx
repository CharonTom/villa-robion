import React from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { RiStarSFill } from "react-icons/ri";
import { NavigationOptions } from "swiper/types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SliderReview() {
  return (
    <div className="flex h-[300px] m-4 p-4">
      <div className="text-center md:p-20 flex-center flex-col w-1/4">
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
      <div className="slider-review w-3/4 py-4 px-4 relative ">
        <Swiper
          modules={[Autoplay, Navigation, FreeMode]}
          grabCursor={true}
          // centeredSlides={false}
          // breakpoints={{
          //   0: { slidesPerView: 1 },
          //   720: { slidesPerView: 2 },
          //   1200: { slidesPerView: 3 },
          //   // 0: { slidesPerView: 1 },
          // }}
          // freeMode={true}
          // autoplay
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={
            {
              nextEl: ".swiper-button-nextu",
              prevEl: ".swiper-button-prevu",
              clickable: true,
            } as NavigationOptions
          }
          // breakpoints={{
          //   0: { slidesPerView: 1 },
          //   768: { slidesPerView: 2 },
          //   // 1040: { slidesPerView: 3 },
          //   1400: { slidesPerView: 3 },
          // }}
        >
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>

          {/* <div className="swiper-button-prevu"></div> */}
        </Swiper>
        <FaAngleLeft className="-translate-y-1/2 z-20 swiper-button-prevu text-[40px] text-primary-pink absolute top-1/2 -left-5" />
        <FaAngleRight className="-translate-y-1/2 z-20 swiper-button-prevu text-[40px] text-primary-pink absolute top-[50%] -right-5" />
      </div>
    </div>
  );
}

export default SliderReview;

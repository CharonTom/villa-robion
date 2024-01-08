import React from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiStarSFill } from "react-icons/ri";

function SliderReview() {
  return (
    <div className="flex h-[300px] m-4 p-4">
      <div className="text-center md:p-20 flex-center flex-col">
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
      <div className="w-full py-4 px-4">
        <Swiper
          className=""
          // slidesPerView={}
          spaceBetween={30}
          breakpoints={{
            // 0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1040: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide className="">
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
  );
}

export default SliderReview;

"use client";

import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { data_airbnb, data_home } from "@/utils/review-data";
import { RiStarSFill } from "react-icons/ri";
import { NavigationOptions } from "swiper/types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

function SliderReview() {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleSlideChange = (swiper: any) => {
    // Mettez à jour l'état des flèches en fonction de la position actuelle du diaporama
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  return (
    <>
      {/* Airbnb */}
      <div className="flex h-[300px] m-4 p-4">
        <div className="text-center p-10 flex-center flex-col w-1/4">
          <div className="font-bold">Excellent</div>
          <div className="flex text-red-400 text-[30px]">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div className="text-sm mt-1">
            Basée sur <span className="font-bold">12 avis</span>
          </div>
          <div className="mt-4">
            <Image
              src="/images/airbnb.png"
              alt="logo"
              width={150}
              height={100}
            />
          </div>
        </div>
        <div className="slider-review w-3/4 p-4 relative ">
          <Swiper
            grabCursor={true}
            autoplay
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={
              {
                nextEl: `.swiper-button-next-airbnb`, // Utilisez une classe spécifique pour le slider Airbnb
                prevEl: `.swiper-button-prev-airbnb`, // Utilisez une classe spécifique pour le slider Airbnb
                clickable: true,
              } as NavigationOptions
            }
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
          >
            {data_airbnb.map((data, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  name={data.name}
                  text={data.text}
                  date={data.date}
                  logo="/images/logoAirbnb.png"
                  starColor="rgb(248 113 113)"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <FaAngleLeft
            className={`swiper-button-prev-airbnb -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-1/2 -left-5 cursor-pointer ${
              isPrevDisabled ? "opacity-50 " : ""
            }`}
          />
          <FaAngleRight
            className={`swiper-button-next-airbnb -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-[50%] -right-5 cursor-pointer ${
              isNextDisabled ? "opacity-50 " : ""
            }`}
          />
        </div>
      </div>
      {/* HomeExchange */}
      <div className="flex h-[300px] m-4 p-4">
        <div className="text-center p-10 flex-center flex-col w-1/4">
          <div className="font-bold">Excellent</div>
          <div className="flex text-orange-500 text-[30px]">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div className="text-sm mt-1">
            Basée sur <span className="font-bold">8 avis</span>
          </div>
          <div className="mt-4">
            <Image src="/images/home.png" alt="logo" width={150} height={100} />
          </div>
        </div>
        <div className="slider-review w-3/4 py-4 px-4 relative ">
          <Swiper
            grabCursor={true}
            autoplay
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={
              {
                nextEl: ".swiper-button-next-home",
                prevEl: ".swiper-button-home",
                clickable: true,
              } as NavigationOptions
            }
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
          >
            {data_home.map((data, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  name={data.name}
                  text={data.text}
                  date={data.date}
                  logo="/images/logoHome.png"
                  starColor="orange"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <FaAngleLeft
            className={`swiper-button-prev-home -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-1/2 -left-5 cursor-pointer ${
              isPrevDisabled ? "opacity-50 " : ""
            }`}
          />
          <FaAngleRight
            className={`swiper-button-next-home -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-[50%] -right-5 cursor-pointer ${
              isNextDisabled ? "opacity-50 " : ""
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default SliderReview;

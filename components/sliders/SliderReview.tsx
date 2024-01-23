"use client";

import React, { useState } from "react";
import ReviewCard from "../ReviewCard";

import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import { data_airbnb, data_home } from "@/utils/review-data";
import { NavigationOptions } from "swiper/types";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function SliderReview() {
  const [isPrevDisabledAirbnb, setIsPrevDisabledAirbnb] = useState(true);
  const [isNextDisabledAirbnb, setIsNextDisabledAirbnb] = useState(false);

  const [isPrevDisabledHome, setIsPrevDisabledHome] = useState(true);
  const [isNextDisabledHome, setIsNextDisabledHome] = useState(false);

  const handleSlideChangeAirbnb = (swiper: any) => {
    setIsPrevDisabledAirbnb(swiper.isBeginning);
    setIsNextDisabledAirbnb(swiper.isEnd);
  };

  const handleSlideChangeHome = (swiper: any) => {
    setIsPrevDisabledHome(swiper.isBeginning);
    setIsNextDisabledHome(swiper.isEnd);
  };

  return (
    <div>
      {/* Airbnb */}
      <div className="flex flex-col flex-center gap-6 sm:flex-row py-4">
        <div className="text-center flex-center flex-col w-full sm:w-1/5">
          <div className="font-bold">Excellent</div>
          <div className="flex text-airbnb-red text-[30px]">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <div className="mt-1">
            Basée sur <span className="font-bold">12 avis</span>
          </div>
          <div className="mt-3 relative w-32 h-10">
            <Image
              src="/images/airbnb.webp"
              alt="logo"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
            />
          </div>
        </div>
        <div className="slider-review w-3/4 sm:w-[60%] md:w-3/4  sm:p-4 relative">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: "auto",
              },
            }}
            grabCursor={true}
            autoplay
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={
              {
                nextEl: `.swiper-button-next-airbnb`,
                prevEl: `.swiper-button-prev-airbnb`,
                clickable: true,
              } as NavigationOptions
            }
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChangeAirbnb}
          >
            {data_airbnb.map((data, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  name={data.name}
                  text={data.text}
                  date={data.date}
                  logo="/images/logoAirbnb.webp"
                  starColor="#FF5A5F"
                  profil={data.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <FaAngleLeft
            className={`swiper-button-prev-airbnb -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-1/2 -left-5 cursor-pointer ${
              isPrevDisabledAirbnb ? "opacity-50 " : ""
            }`}
          />
          <FaAngleRight
            className={`swiper-button-next-airbnb -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-[50%] -right-5 cursor-pointer ${
              isNextDisabledAirbnb ? "opacity-50 " : ""
            }`}
          />
        </div>
      </div>
      {/* HomeExchange */}
      <div className="flex flex-col flex-center gap-6 sm:flex-row py-4">
        <div className="text-center flex-center flex-col w-full sm:w-1/5">
          <div className="font-bold">Excellent</div>
          <div className="flex text-home-orange text-[30px]">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <div className="mt-1">
            Basée sur <span className="font-bold">8 avis</span>
          </div>
          <div className="mt-3 relative w-32 h-10">
            <Image
              src="/images/home.webp"
              alt="logo"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
            />
          </div>
        </div>
        <div className="slider-review w-3/4 sm:w-[60%] md:w-3/4  sm:p-4 relative">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: "auto",
              },
            }}
            grabCursor={true}
            autoplay
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={
              {
                nextEl: ".swiper-button-next-home",
                prevEl: ".swiper-button-prev-home",
                clickable: true,
              } as NavigationOptions
            }
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChangeHome}
          >
            {data_home.map((data, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  name={data.name}
                  text={data.text}
                  date={data.date}
                  logo="/images/logoHome.webp"
                  starColor="#EFA301"
                  profil={data.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <FaAngleLeft
            className={`swiper-button-prev-home -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-1/2 -left-5 cursor-pointer ${
              isPrevDisabledHome ? "opacity-50 " : ""
            }`}
          />
          <FaAngleRight
            className={`swiper-button-next-home -translate-y-1/2 z-20 text-[40px] text-primary-pink absolute top-[50%] -right-5 cursor-pointer ${
              isNextDisabledHome ? "opacity-50 " : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default SliderReview;

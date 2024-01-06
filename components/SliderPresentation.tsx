"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export default function SliderPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const slidesData = [
    {
      image: "/images/slider1.jpg",
      title: "Le jardin",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias sit nam commodi accusantium laboriosam quis delectus voluptate architecto numquam, iure repudiandae.",
    },
    {
      image: "/images/slider2.jpg",
      title: "Le jardin",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias sit nam commodi accusantium laboriosam quis delectus voluptate architecto numquam, iure repudiandae.",
    },
    {
      image: "/images/slider3.jpg",
      title: "Le jardin",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias sit nam commodi accusantium laboriosam quis delectus voluptate architecto numquam, iure repudiandae.",
    },
  ];

  return (
    <div className="p-5">
      <Swiper
        spaceBetween={25}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        speed={500}
        modules={[Pagination, Navigation]}
        onSlideChange={handleSlideChange}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="slider"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
            <div className="relative h-full text-white px-8 flex flex-col justify-around">
              <h2 className="text-[100px]">{slide.title}</h2>

              <div
                className={`text-container ${
                  currentSlide === index ? "text-show" : ""
                }`}
              >
                <div
                  className={`line-anim mb-8 ${
                    currentSlide === index ? "line-show" : ""
                  }`}
                ></div>
                <div
                  className={`slide-in-from-top ${
                    currentSlide === index ? "show" : ""
                  }`}
                >
                  <p className="w-[40%]">{slide.content}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

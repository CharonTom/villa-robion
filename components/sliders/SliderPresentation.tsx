"use client";

import Image from "next/image";
import Link from "next/link";
import { presentationSliderData } from "@/utils/presentation-data";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  const handlePrevious = () => {
    swiperRef?.slidePrev();
  };

  const handleNext = () => {
    swiperRef?.slideNext();
  };

  return (
    <div className="slider-presentation">
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={15}
        slidesPerView={"auto"}
        grabCursor={true}
        navigation
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        speed={500}
        modules={[Pagination, Navigation]}
        className="h-[55vh] md:h-[60vh] lg:h-[75vh] w-full"
        onSlideChange={handleSlideChange}
      >
        {presentationSliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="slider"
              fill
              className="rounded-lg brightness-90 object-cover"
            />
            <div className="relative h-full text-white p-4 flex flex-col justify-start gap-y-16">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
                {slide.title}
              </h2>

              <div>
                <div
                  className={`line-anim mb-4 ${
                    currentSlide === index ? "line-show" : ""
                  }`}
                ></div>
                <div
                  className={`slide-in-from-top ${
                    currentSlide === index ? "show" : ""
                  }`}
                >
                  <p className="md:w-[45%] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_100%)]">
                    {slide.content}
                  </p>
                </div>
              </div>
              <Link
                href={`/visit#${slide.id}`}
                className="absolute bottom-4 left-4"
              >
                <button className="p-2 bg-primary-pink rounded-full text-sm hover:bg-pink-500 transition font-semibold">
                  Voir plus
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex-center mx-8 mt-4 w-fit">
        <button
          onClick={handlePrevious}
          disabled={isPrevDisabled}
          aria-label="previous picture"
        >
          <FaAngleLeft
            className={`text-primary-pink text-[40px] ${
              isPrevDisabled ? "opacity-50" : ""
            }`}
          />
        </button>
        <div className="swiper-custom-pagination" />
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          aria-label="next picture"
        >
          <FaAngleRight
            className={`text-primary-pink text-[40px] ${
              isNextDisabled ? "opacity-50" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}

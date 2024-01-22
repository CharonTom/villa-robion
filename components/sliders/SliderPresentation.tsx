"use client";

import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Button from "../Button";

const slidesData = [
  {
    id: "garden",
    image: "/images/PresentationSlider/jardin.webp",
    title: "Le Jardin",
    content:
      "Notre jardin est rempli de petits recoins propices aux loisirs et à la détente.",
  },
  {
    id: "bed",
    image: "/images/PresentationSlider/chambre.webp",
    title: "Les Chambres",
    content: "Notre maison possède 3 chambres, chacune avec leurs spécificités",
  },
  {
    id: "living",
    image: "/images/PresentationSlider/salon.webp",
    title: "Les Salons",
    content:
      "Plusieurs pièces de vie s'offrent à vous, un salon au rez-de-chaussée et un second à l'étage.",
  },
  {
    id: "bath",
    image: "/images/PresentationSlider/bain.webp",
    title: "Les salles de bains",
    content:
      "La maison possède 2 salles de bain, une privative accessible depuis la chambre du rez-de-chaussée et une seconde à l'étage.",
  },
];

export default function SliderPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

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
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="slider"
              fill
              // sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg brightness-90"
              unoptimized={true}
            />
            <div className="relative h-full text-white px-4 pt-6 flex flex-col justify-start gap-y-28">
              <h2 className="md:text-[68px] lg:text-[88px] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
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
                  <p className="md:w-[40%] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]  font-light">
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
        <button onClick={handlePrevious} disabled={isPrevDisabled}>
          <FaAngleLeft
            className={`text-primary-pink text-[40px] ${
              isPrevDisabled ? "opacity-50" : ""
            }`}
          />
        </button>
        <div className="swiper-custom-pagination" />
        <button onClick={handleNext} disabled={isNextDisabled}>
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

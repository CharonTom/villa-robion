"use client";

import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slidesData = [
  {
    image: "/images/PresentationSlider/jardin.jpg",
    title: "Le Jardin",
    content:
      "Profitez du jardin avec pisicine, Table de ping-pong, plancha, paillote exotique",
  },
  {
    image: "/images/PresentationSlider/chambre.jpg",
    title: "Les Chambres",
    content:
      "Notre maison possède 3 chambres, chacune avec leurs spécificitées",
  },
  {
    image: "/images/PresentationSlider/salon.jpg",
    title: "Les Salons",
    content:
      "Plusieurs pièces de vie s'offrent à vous : un salon au rez-de-chaussez et un second à l'étage.",
  },
  {
    image: "/images/PresentationSlider/bain.jpg",
    title: "Les salles de bains",
    content:
      "La maison possède 2 salles de bain. une privative accessible depuis la chambre du rez de chaussez, et une seconde à l'étage.",
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
    <div className="p-5 slider-presentation">
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={25}
        slidesPerView={"auto"}
        grabCursor={true}
        navigation
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        speed={500}
        modules={[Pagination, Navigation]}
        className="h-[80vh] w-full"
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
            <div className="relative h-full text-white px-8 pt-6 flex flex-col justify-start gap-y-20">
              <h2 className="text-[100px] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
                {slide.title}
              </h2>

              <div>
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
                  <p className="md:w-[40%] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
                    {slide.content}
                  </p>
                </div>
              </div>
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

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
        speed={500}
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
          <div className="absolute bottom-5 left-5 slide-in-from-bottom">
            <h2 className="text-[100px]">Le jardin</h2>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias
              sit nam commodi accusantium laboriosam quis delectus voluptate
              architecto numquam, iure repudiandae.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slider2.jpg"
            alt="slider"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
          <div className="absolute bottom-5 left-5 slide-in-from-bottom">
            <h2 className="text-[100px]">Le jardin</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias
              sit nam commodi accusantium laboriosam quis delectus voluptate
              architecto numquam, iure repudiandae.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slider3.jpg"
            alt="slider"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
          <div className="absolute bottom-5 left-5">
            <h2 className="text-[100px]">Le jardin</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              magni maiores! Corrupti, eos quibusdam? Laborum pariatur est alias
              sit nam commodi accusantium laboriosam quis delectus voluptate
              architecto numquam, iure repudiandae.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

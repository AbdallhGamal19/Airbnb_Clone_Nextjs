"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IliveData } from "../../../interfaces/app.ts";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface Iprops {
  liveData: IliveData[];
}
const LiveSlide = ({ liveData }: Iprops) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={10}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
      breakpoints={{
        // When the screen width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // When the screen width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When the screen width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {liveData.map(({ img, title }) => (
        <SwiperSlide className=" cursor-pointer" key={img}>
          <div className="cursor-pointer">
            <div className="relative w-auto h-80 transition duration-20 ease-linear  hover:shadow-md cursor-pointer  hover:scale-105">
              <Image src={img} alt={title} fill className="rounded-md" />
            </div>
            <h2 className=" mt-3 text-2xl">{title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default LiveSlide;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";
const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom max-w-[630px] h-[200px] ">
        {/* slide 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full ">
          <div className="relative xl:flex w-[90px] h-[90px] hidden ">
            <Image
              src="/assets (1)/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2 ">
            <p>
              Exceeded expactations. On time, whitin budget and top quality
              work. High recommend
            </p>
            <p className="font-primary font-semibold text-primary ">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
        {/* slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full ">
          <div className="relative xl:flex w-[90px] h-[90px] hidden ">
            <Image
              src="/assets (1)/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2 ">
            <p>
              Exceeded expactations. On time, whitin budget and top quality
              work. High recommend
            </p>
            <p className="font-primary font-semibold text-primary ">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
        {/* slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full ">
          <div className="relative xl:flex w-[90px] h-[90px] hidden ">
            <Image
              src="/assets (1)/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2 ">
            <p>
              Exceeded expactations. On time, whitin budget and top quality
              work. High recommend
            </p>
            <p className="font-primary font-semibold text-primary ">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;

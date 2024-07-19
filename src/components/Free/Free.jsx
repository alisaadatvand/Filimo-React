import "./Free.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

let test = (e) => {
  console.log(e.target.classList);
  if (e.target.classList.contains("freeActive")) {
    e.target.classList.remove("freeActive");
  } else {
    e.target.classList.add("freeActive");
  }
};

const Free = ({ API }) => {
  return (
    <>
      <div className="free">
        <div className="freeMain">
          {API?.freeTitle.map((elem) => {
            return <h1 key={elem.id}>{elem.title}</h1>;
          })}
          <div className="freeSlider">
            <Swiper
              navigation={true}
              slidesPerView={5}
              spaceBetween={0}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="freeSwiper"
            >
              {API?.free.map((elem) => {
                return (
                  <SwiperSlide key={elem.id}>
                    <img src={elem.src} alt="free" onClick={(e) => test(e)} />
                    <span>{elem.title}</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Free;

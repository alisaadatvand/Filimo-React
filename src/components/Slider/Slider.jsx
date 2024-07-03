import "./Slider.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderContent from "./SliderContent";

const Slider = ({API}) => {
//   let [Slider, setSlider] = useState(null);
//   const fetchSlider = async () => {
//     let sliderData = await fetch(
//       "https://alisaadatvand.github.io/jsonServer/db.json"
//     );
//     let sliderRes = await sliderData.json();
//     setSlider(sliderRes);
//   };
//   useEffect(() => {
//     fetchSlider();
//   }, []);

  return (
    <>
      <div className="slider">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper opacity"
        >
          {API?.slider.map((elem) => {
            return (
              <SwiperSlide key={elem.id}>
                <img src={elem.src} alt={elem.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SliderContent API={API}/>
      </div>
    </>
  );
};

export default Slider;

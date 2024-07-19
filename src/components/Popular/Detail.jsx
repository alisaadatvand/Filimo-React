import "./Detail.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/pagination";


// import required modules
import { FreeMode, Navigation } from "swiper/modules";

const Detail = ({ API }) => {
  return (
    <div className="detailsBox">
      <div className="serialDetail">
        <div className="detail">
          {API?.serials.map((elem) => {
            return (
              <div className="upDetail" key={elem.id}>
                <div className="right">
                  <h4>{elem.title}</h4>
                  <span>کارگردان : {elem.director}</span>
                  <div className="type">
                    <span>{elem.type1}</span>
                    <span>{elem.type2}</span>
                  </div>
                  <p>{elem.description}</p>
                </div>

                <div className="left">
                  <img src={elem.icon} alt={elem.alt} />
                </div>
              </div>
            );
          })}
          <div className="downDetail">
            <Swiper
            navigation={true}
              slidesPerView={3}
              spaceBetween={60}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              {API?.swiperserial1.map((elem)=>{
              if(elem.id==1){
                return <SwiperSlide key={elem.id}>
                <img src={elem.src} alt="" />
                <span>{elem.title}</span>
              </SwiperSlide>
              }else{
                return <SwiperSlide key={elem.id}>
                <img className="private" src={elem.src} alt="" />
                <span>{elem.title}</span>
              </SwiperSlide>
              }
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

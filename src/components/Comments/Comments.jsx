import "./Comments.css";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

const Comments = ({ API }) => {
  let [Comment, setComment] = useState(null);
  const fetchComment = async () => {
    let CommentData = await fetch(
      "http://localhost:1000/comments"
    );
    let CommentRes = await CommentData.json();
    setComment(CommentRes);
  };
  useEffect(() => {
    fetchComment();
  }, []);
  console.log(Comment);
  return (
    <div className="comments">
      <div className="commentMain">
        {API?.commentsTitle.map((elem) => {
          return <h2 key={elem.id}>{elem.title}</h2>;
        })}

        <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="commentsSwiper"
        >
          {Comment?.map((elem) => {
              if(elem.status=="1"){
                return(
                  <SwiperSlide key={elem.id}>
                  <div className="info">
                    <h3>{elem.name}</h3>
                    <p>{elem.text}</p>
                  </div>
                </SwiperSlide>
                )
              }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;

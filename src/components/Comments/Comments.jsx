import "./Comments.css";
const Comments = ({API}) => {
  return (
    <div className="comments">
      <div className="commentMain">
        {API?.commentsTitle.map((elem)=>{
            return <h2 key={elem.id}>{elem.title}</h2>
        })}
        <div className="swiper commentsSwiper">
          <div className="swiper-wrapper commentContainer">
            {API?.comments.map((elem)=>{
                return <div className="swiper-slide" key={elem.id}>
                <div className="info">
                  <h3>{elem.name}</h3>
                  <p>{elem.text}</p>
                </div>
              </div>
            })}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

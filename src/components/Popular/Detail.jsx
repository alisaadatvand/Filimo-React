import "./Detail.css";

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
            <div className="swiper serialSwiper">
              <div className="swiper-wrapper ali">
                <h1>swiper</h1>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

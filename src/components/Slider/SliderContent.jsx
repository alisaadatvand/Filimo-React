const SliderContent = ({API}) => {
  return (
    <>
      <div className="sliderContent">
        {API?.sliderContent2.map((elem) => {
          return <h1 key={elem.id}>{elem.text}</h1>;
        })}

        {API?.sliderContent1.map((elem) => {
          return (
            <h1 className="orange" key={elem.id}>
              {elem.text}
            </h1>
          );
        })}
        <div className="offer">
          {API?.offer.map((elem) => {
            return <span key={elem.id}>{elem.text}</span>;
          })}
        </div>
        <div className="buySubscription">
          {API?.buySubscription.map((elem) => {
            return elem.text;
          })}
        </div>
        {API?.discount.map((elem) => {
          return <h5 key={elem.id}>{elem.text}</h5>
        })}
      </div>
    </>
  );
};

export default SliderContent;

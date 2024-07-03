import "./Watch.css";

const Watch = ({ API }) => {
  return (
    <>
      <div className="watch">
        {API?.watch.map((elem) => {
          return (
            <>
              <div className="watchRight" key={elem.id}>
                <img src={elem.src} alt="" />
              </div>
              <div className="watchLeft">
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
                <div className="devices">
                  {API?.devices.map((elem) => {
                    return (
                      <div key={elem.id}>
                        <div className="iconDevice">
                          <img src={elem.icon} alt="" />
                        </div>
                        <div className="titleDevice">
                          <h5>{elem.title}</h5>
                          <span>{elem.detail}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {API?.buySubscription.map((elem) => {
                  return (
                    <div key={elem.id} className="btnDevice">
                      {elem.text}
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Watch;

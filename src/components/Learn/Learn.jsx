import "./Learn.css";

const Learn = ({ API }) => {
  return (
    <>
      <div className="learn">
        {API?.learn.map((elem) => {
          return (
            <>
              <div className="learnRight" key={elem.id}>
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>

                <div className="learnDevice">
                  {API?.learnDevices.map((elem) => {
                    return (
                      <div key={elem.id}>
                        <div className="iconLearn">
                          <img src={elem.icon} alt="" />
                          <span>{elem.title}</span>
                        </div>
                        <div className="detailLearn">
                          <p>{elem.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="learnBtn">{elem.btn}</div>
              </div>

              <div className="learnLeft">
                <img src={elem.src} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Learn;

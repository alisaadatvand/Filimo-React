import { useEffect, useState } from "react";
import "./Online.css";
const Online = ({ API }) => {

  let [Online, setOnline] = useState(null);
  const fetchOnline = async () => {
    let OnlineData = await fetch(
      "http://localhost:1000/onlineFilms"
    );
    let OnlineRes = await OnlineData.json();
    setOnline(OnlineRes);
  };
  useEffect(() => {
    fetchOnline();
  }, []);
  console.log(Online);

  return (
    <div className="online">
      {API?.online.map((elem) => {
        return (
          <div className="onlineMain" key={elem.id}>
            <h3>{elem.title}</h3>

            <div className="onlineDescription">
              {API?.onlineDescription.map((elem) => {
                return <span key={elem.id}>{elem.text}</span>;
              })}
            </div>

            <div className="onlineScroll">
              {Online?.map((elem) => {
                return (
                  <div className="onlineItem" key={elem.id}>
                    <div className="onlineRight">
                      <img src={elem.src} alt="online" />
                    </div>
                    <div className="onlineLeft">
                      <div className="onlinetit">
                        <h3>{elem.title}</h3>
                        <span>{elem.type}</span>
                      </div>
                      <p>کارگردان: {elem.director}</p>
                      <div className="onlineCategory">
                        <span>{elem.cat1}</span>
                        <span>{elem.cat2}</span>
                      </div>
                      <div className="ticket">{elem.btn}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Online;

import "./Popular.css";
import specialmg from "../../../public/images/specialfilimo/special.svg";
import Detail from "./Detail";

// این قسمت باید کاملا اصلاح شود  و درست نیست 
const Popular = ({ API }) => {
    const changeCategory = (e) => {
        if(e.nativeEvent.target.innerHTML=="فیلم"){
        let serialBtn = document.querySelector(".selectActive");
        let filmBtn = document.querySelector(".filmBtn");
        let serialBox = document.querySelector(".serialsMostPopular");
        let filmBox = document.querySelector(".filmsMostPopular");
        filmBtn.classList.add("selectActive");
        serialBtn.classList.remove("selectActive");
        serialBox.classList.add("notActive");
        filmBox.classList.add("active");
    }else{
        serialBtn.classList.add("selectActive")
        filmBtn.classList.remove("selectActive")
        serialBox.classList.remove("notActive")
        filmBox.classList.remove("active")
    }
  };
  // تا اینجا 

  return (
    <>
      <div className="mostPopular">
        <div className="headerMostPopular">
          {API?.mostPopularHeader.map((elem) => {
            return <h4 key={elem.id}>{elem.text}</h4>;
          })}
          <div className="select">
            {API?.mostPopularHeaderSelect.map((elem) => {
              if (elem.text === "سریال") {
                return (
                  <span className="selectActive serialBtn" onClick={(e)=>changeCategory(e)} key={elem.id} >
                    {elem.text}
                  </span>
                );
              } else {
                return (
                  <span
                    key={elem.id}
                    className="filmBtn"
                    onClick={(e) => changeCategory(e) }
                  >
                    {elem.text}
                  </span>
                );
              }
            })}
          </div>
        </div>

        <div className="serialsMostPopular">
          {API?.serialsMostPopular.map((elem) => {
            if (elem.id === 1) {
              return (
                <div key={elem.id} className="firstCover">
                  <img src={elem.src} alt={elem.alt} />
                  <img className="special" src={specialmg} />
                </div>
              );
            } else {
              return (
                <div key={elem.id}>
                  <img src={elem.src} alt={elem.alt} />
                  <img className="special" src={specialmg} />
                </div>
              );
            }
          })}
        </div>

        <div className="filmsMostPopular">
          {API?.filmsMostPopular.map((elem) => {
            if (elem.id === 1) {
              return (
                <div key={elem.id} className="firstCover">
                  <img src={elem.src} alt={elem.alt} />
                  <img className="special" src={specialmg} />
                </div>
              );
            } else {
              return (
                <div key={elem.id}>
                  <img src={elem.src} alt={elem.alt} />
                  <img className="special" src={specialmg} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <Detail API={API}/>
    </>
  );
};

export default Popular;

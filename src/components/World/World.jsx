import "./World.css";
const World = ({ API }) => {
  return (
    <div className="world">
      {API?.world.map((elem) => {
        return (
          <div className="mainWorld" key={elem.id}>
            <div className="rightWorld">
              <img src={elem.img} alt="" />
            </div>
            <div className="leftWorld">
              <h4>{elem.title}</h4>
              <p>{elem.description}</p>
              <div className="worldBtns">
                {API?.worldBtns.map((elem) => {
                  return (
                    <div className="kidsBtn" key={elem.id}>
                      {elem.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default World;

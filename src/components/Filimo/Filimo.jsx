import "./Filimo.css";
const Filimo = ({ API }) => {
  return (
    <div className="filimo">
      <div className="filimoMain">
        {API?.filimo.map((elem) => {
          return (
            <>
              <div className="filimoIcon">
                <img src={elem.icon} alt="filimo" />
              </div>

              <div className="filimoDescription">
                {API?.filimoDescription.map((elem)=>{
                    return <span key={elem.id}>{elem.text}</span>
                })}
              </div>

              <div className="filimoBtn">{elem.btn}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filimo;

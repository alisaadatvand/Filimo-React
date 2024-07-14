import "./Questions.css";
const Questions = ({ API }) => {
//   let select = (e) => {
//     console.log(e);

//       e.target.addEventListener("click", function () {
//         let questionsDescription = [...e.target.children];
//         let spanTag = questionsDescription[0];
//         console.log("spanTag",questionsDescription , typeof questionsDescription);
//         console.log("etgfr",spanTag);
//         if (questionsDescription[1].classList.contains("activeBox")) {
//           questionsDescription[1].classList.remove("activeBox");
//           console.log("spanTag[1]",spanTag[1]);
//           spanTag[1].innerHTML = "+";
//           spanTag[0].classList.remove("orange");
//         } else {
//           questionsDescription[1].classList.add("activeBox");
//           spanTag[1].innerHTML = "&times;";
//           spanTag[0].classList.add("orange");
//         }
//       });
//   };
  return (
    <div className="questions">
      <div className="questionsMain">
        <div className="questionsTop">
          {API?.questionsTitle.map((elem) => {
            return (
              <>
                <h3>{elem.title}</h3>
                <h5>{elem.description}</h5>
              </>
            );
          })}
        </div>
        <div className="questionsBottom">
          {API?.questions.map((elem) => {
            return (
              <div className="questionBox" onClick={(e)=>select(e)} key={elem.id}>
                <div className="questionsTit">
                  <h2>{elem.title}</h2>
                  <span>+</span>
                </div>

                <div className="questionsDescription">
                  <p>{elem.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;

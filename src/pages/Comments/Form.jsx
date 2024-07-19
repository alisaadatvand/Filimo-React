import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ comment }) => {
  let [name, setName] = useState("");
  let [text, setText] = useState("");
  let [status, setStatus] = useState("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateComment = async () => {
      try {
        let data = await fetch(`http://localhost:1000/comments/${comment.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              name: name,
              text: text,
              status: status,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        let res = await data.json();
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateComment();
    navigate("/comment");
  };
  useEffect(() => {
    setName(comment.name);
    setText(comment.text);
    setStatus(comment.status);
  }, []);
  return (
    <>
      <form action="#" method="post" onSubmit={(e) => eventHandler(e)}>
        <div>
          <label htmlFor="name">
            نام کاربر
          </label>
          <input
            type="text"
            placeholder="name...!"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="text">
            متن 
          </label>
          <input
            type="text"
            placeholder="text...!"
            className="form-control"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="text">
            وضعیت
          </label>
          <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
            <option value={status=="1"?"1":"0"}>{status=="1"?"منتشر شده":"منتظر بررسی"}</option>
            <option value={status=="1"?"0":"1"}>{status=="0"?"منتشر شده":"منتظر بررسی"}</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            className="btn submitBtn"
            value="ویرایش"
          />
        </div>
      </form>
    </>
  );
};

export default Form;

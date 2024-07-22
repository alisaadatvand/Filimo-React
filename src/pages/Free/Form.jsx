import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ free }) => {
  let [image, setImage] = useState("");
  let [title, setTitle] = useState("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateTitle = async () => {
      try {
        let data = await fetch(`http://localhost:1000/free/${free.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              src: image,
              title: title,
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
    updateTitle();
    navigate("/free");
  };
  useEffect(() => {
    setImage(free.src);
    setTitle(free.title);
  }, []);
  return (
    <>
      <form action="#" method="post" onSubmit={(e) => eventHandler(e)}>
        <div>
          <label htmlFor="image">
            لینک تصویر
          </label>
          <input
            type="text"
            placeholder="image...!"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="alt">
            نام محصول
          </label>
          <input
            type="text"
            placeholder="alt...!"
            className="form-control"
            id="alt"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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

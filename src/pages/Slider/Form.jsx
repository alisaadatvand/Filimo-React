import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/index.css";

const Form = ({ slider }) => {
  let [image, setImage] = useState("");
  let [alt, setAlt] = useState("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateSlider = async () => {
      try {
        let data = await fetch(`http://localhost:1000/slider/${slider.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              src: image,
              alt: alt,
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
    updateSlider();
    navigate("/slider");
  };
  useEffect(() => {
    setImage(slider.src);
    setAlt(slider.alt);
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
            توضیح
          </label>
          <input
            type="text"
            placeholder="alt...!"
            className="form-control"
            id="alt"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
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

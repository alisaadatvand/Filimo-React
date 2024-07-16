import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./css/index.css";

const Create = () => {
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  let imageRef = useRef();
  let altRef = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    const postSlider = async () => {
      try {
        let res = await axios.post("http://localhost:1000/slider", {
          src: image,
          alt: alt,
        });
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    postSlider();
    imageRef.current.value = "";
    altRef.current.value = "";
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  useEffect(() => {
    document.title = "create-slider";
  });
  return (
    <>
      <div className="create">
        <h1>ساخت اسلایدر</h1>
        <form action="#" method="post" onSubmit={clickHandler}>
          <div>
            <label htmlFor="image">
              لینک تضویر
            </label>
            <input
              type="text"
              placeholder="لینک...!"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              ref={imageRef}
            />
            {/* {image.length > 1 && image.length < 5 ? (
              <p className="text-danger">more than 5 char</p>
            ) : null}
            {image.length > 100 ? (
              <p className="text-danger">less than 100</p>
            ) : null}
            {image.length === 0 ? (
              <p className="text-danger">required</p>
            ) : null} */}
          </div>
          <div className="d-block mb-2">
            <label htmlFor="alt">
              توضیخ
            </label>
            <input
              type="text"
              placeholder="توضیح...!"
              id="alt"
              onChange={(e) => setAlt(e.target.value)}
              ref={altRef}
            />
          </div>
          <div>
            <input
              type="submit"
              className="btn submitBtn"
              value="تایید"
            //   disabled={
            //     image.length === 0 ||
            //     alt.length === 0 ||
            //     image.length < 5 ||
            //     image.length > 100
            //   }
            />
          </div>
          <Link
            to="/slider/details"
            className="btn detailsBtn"
          >
            صفحه جزئیات
          </Link>
        </form>
      </div>
    </>
  );
};

export default Create;

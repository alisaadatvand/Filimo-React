import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [cat1, setCat1] = useState("");
  const [cat2, setCat2] = useState("");
  let imageRef = useRef();
  let titleRef = useRef();
  let directorRef = useRef();
  let cat1Ref = useRef();
  let cat2Ref = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    const postOnline = async () => {
      try {
        let res = await axios.post("http://localhost:1000/onlineFilms", {
          src: image,
          title: title,
          type: "اکران آنلاین",
          director: director,
          btn: "خرید بلیت",
          cat1: cat1,
          cat2: cat2,
        });
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    postOnline();
    imageRef.current.value = "";
    titleRef.current.value = "";
    directorRef.current.value = "";
    cat1Ref.current.value = "";
    cat2Ref.current.value = "";
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  useEffect(() => {
    document.title = "create-online-films";
  });
  return (
    <>
      <div className="create">
        <h1>ساخت اکران آنلاین</h1>
        <form action="#" method="post" onSubmit={clickHandler}>
          <div>
            <label htmlFor="image">
              لینک تصویر
            </label>
            <input
              type="text"
              placeholder="لینک...!"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              ref={imageRef}
            />
          </div>
          <div className="d-block mb-2">
            <label htmlFor="title">
              نام فیلم
            </label>
            <input
              type="text"
              placeholder="نام فیلم...!"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              ref={titleRef}
            />
          </div>
          <div className="d-block mb-2">
            <label htmlFor="director">
              نام کارگردان
            </label>
            <input
              type="text"
              placeholder="نام کارگردان...!"
              id="director"
              onChange={(e) => setDirector(e.target.value)}
              ref={directorRef}
            />
          </div>
          <div className="d-block mb-2">
            <label htmlFor="cat1">
              دسته بندی اول
            </label>
            <input
              type="text"
              placeholder="دسته بندی...!"
              id="cat1"
              onChange={(e) => setCat1(e.target.value)}
              ref={cat1Ref}
            />
          </div>
          <div className="d-block mb-2">
            <label htmlFor="cat2">
              دسته بندی دوم
            </label>
            <input
              type="text"
              placeholder="دسته بندی...!"
              id="cat2"
              onChange={(e) => setCat2(e.target.value)}
              ref={cat2Ref}
            />
          </div>
          <div>
            <input
              type="submit"
              className="btn submitBtn"
              value="تایید"
            />
          </div>
          <Link
            to="/online"
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

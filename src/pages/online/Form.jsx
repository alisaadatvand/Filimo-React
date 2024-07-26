import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ online }) => {
  let [image, setImage] = useState("");
  let [title, setTitle] = useState("");
  let [director, setDirector] = useState("");
  let [cat1, setCat1] = useState("");
  let [cat2, setCat2] = useState("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateOnline = async () => {
      try {
        let data = await fetch(`http://localhost:1000/onlineFilms/${online.id}`, {
          method: "PUT",
          body: JSON.stringify({
            src: image,
            title: title,
            type: "اکران آنلاین",
            director: director,
            btn: "خرید بلیت",
            cat1: cat1,
            cat2: cat2,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        let res = await data.json();
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateOnline();
    navigate("/online");
  };
  useEffect(() => {
    setImage(online.src);
    setTitle(online.title);
    setDirector(online.director);
    setCat1(online.cat1);
    setCat2(online.cat2);
  }, []);
  return (
    <>
      <form action="#" method="post" onSubmit={(e) => eventHandler(e)}>
        <div>
          <label htmlFor="image">لینک تصویر</label>
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
          <label htmlFor="title">نام فیلم</label>
          <input
            type="text"
            placeholder="نام...!"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="director">کارگردان</label>
          <input
            type="text"
            placeholder="کارگردان...!"
            className="form-control"
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cat1">دسته بندی اول</label>
          <input
            type="text"
            placeholder="دسته بندی...!"
            className="form-control"
            id="cat1"
            value={cat1}
            onChange={(e) => setCat1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cat2">دسته بندی دوم</label>
          <input
            type="text"
            placeholder="دسته بندی...!"
            className="form-control"
            id="cat2"
            value={cat2}
            onChange={(e) => setCat2(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" className="btn submitBtn" value="ویرایش" />
        </div>
      </form>
    </>
  );
};

export default Form;

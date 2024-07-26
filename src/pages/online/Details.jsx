import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";

const Details = () => {
  let [details, setDetails] = useState(null);
  const fetchDetails = async () => {
    try {
      let data = await fetch("http://localhost:1000/onlineFilms");
      let res = await data.json();
      setDetails(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="details">
        <h1>جزئیات سینما آنلاین</h1>
        <Link
          className="createBtn btn"
          to="/online/create"
        >
          ایجاد فیلم جدید
        </Link>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <td>تصویر</td>
              <td>نام</td>
              <td>کارگردان</td>
              <td>دسته بندی 1</td>
              <td>دسته بندی 2</td>
              <td>ویرایش</td>
              <td>حذف</td>
            </tr>
          </thead>
          <tbody>
            {details?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.src} width="150px" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.director}</td>
                  <td>{item.cat1}</td>
                  <td>{item.cat2}</td>
                  <td>
                    <Link
                      className="editBtn btn"
                      to={`/online/edit/${item.id}`}
                    >
                      ویرایش
                    </Link>
                  </td>
                  <td><Delete id={item.id} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>

    </div>
  );
};

export default Details;

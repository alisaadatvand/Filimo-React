import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import "./css/index.css";

const Details = () => {
  let [details, setDetails] = useState(null);
  const fetchDetails = async () => {
    try {
      let data = await fetch("http://localhost:1000/slider");
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
        <h1>جزئیات</h1>
        <Link
          className="createBtn btn"
          to="/slider/create"
        >
          ایجاد اسلایدر جدید
        </Link>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <td>تصویر</td>
              <td>توضیح</td>
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
                  <td>{item.alt}</td>
                  <td>
                    <Link
                      className="editBtn btn"
                      to={`/slider/edit/${item.id}`}
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

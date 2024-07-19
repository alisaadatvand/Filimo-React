import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";

const Details = () => {
  let [details, setDetails] = useState(null);
  const fetchDetails = async () => {
    try {
      let data = await fetch("http://localhost:1000/comments");
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
        <h1>جزئیات نظرات</h1>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <td>کاربر</td>
              <td>متن کامنت</td>
              <td>وضعیت</td>
              <td>ویرایش</td>
              <td>حذف</td>
            </tr>
          </thead>
          <tbody>
            {details?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    {item.name}
                  </td>
                  <td>{item.text}</td>
                  <td>
                    {item.status=="1"? "منتشر شده":"منتظر بررسی"}
                  </td>
                  <td>
                    <Link
                      className="editBtn btn"
                      to={`/comment/edit/${item.id}`}
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

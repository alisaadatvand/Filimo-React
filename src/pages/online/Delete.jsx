import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Delete = ({ id }) => {
  let navigate = useNavigate();
  const deleteSlider = async () => {
    navigate("/online");
    Swal.fire({
      title: "از عملیات خود مطمعن هستید ؟",
      text: "بعد ازحذف امکان بازگشت وجود ندارد",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، مطمعنم",
      cancelButtonText: "انصراف",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "حذف شد !",
          text: "فایل شما حذف گردید",
          icon: "success",
        });
        let data = await fetch(
          `http://localhost:1000/onlineFilms/${id}`,
          {
            method: "DELETE",
          }
        );
        let res = await data.json();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  return (
    <button
      onClick={deleteSlider}
      className="deleteBtn btn"
    >
      حذف
    </button>
  );
};

export default Delete;

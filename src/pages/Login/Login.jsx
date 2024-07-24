import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState(null);

  const auth = () => {
    let username = document.querySelector("input[type=text]");
    let password = document.querySelector("input[type=password]");
    console.log(username.value, password.value);

    if (username.value === "admin" && password.value === "admin") {
      console.log("hi");
      setUser("admin");
      navigate("/");
      console.log(user);
    } else {
      console.log("bye");
    }
  };

  return (
    <>
      <div className="login">
        <h2>ورود</h2>
        <form action="#" method="">
          <label htmlFor="userName">نام کاربری</label>
          <input type="text" name="userName" id="userName" />
          <label htmlFor="password">رمز عبور</label>
          <input type="password" name="password" id="password" />
        </form>
        <button className=" btn-login" onClick={auth}>ورود</button>
      </div>
    </>
  );
};

export default Login;

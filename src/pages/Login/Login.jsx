import { Navigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

    const auth = ()=>{
        let username = document.querySelector("input[type=text]")
        let password = document.querySelector("input[type=password]")
        console.log(username.value,password.value);

        if(username==="admin" && password==="admin"){
            Navigate("/")
        }
    }

    return ( 

        <>
            <div className="login">
                <h2>ورود</h2>
                <form action="#" method="">
                    <label htmlFor="userName">نام کاربری</label>
                    <input type="text" name="userName" id="userName" />
                    <label htmlFor="password">رمز عبور</label>
                    <input type="password" name="password" id="password" />
                    <input type="submit" value="ورود" onClick={auth}/>
                </form>
            </div>
        </>
     );
}
 
export default Login;
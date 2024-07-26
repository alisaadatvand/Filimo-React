import { NavLink } from "react-router-dom";
import "./Panel.css";

const Panel = () => {
    return ( <>

    <div className="panel">
        <h3>پنل دسترسی سریع</h3>
        <h5>لطفا یک مورد را انتخاب کنید</h5>
        <ul>
             <li><NavLink to="/slider">تنظیمات اسلایدر</NavLink></li>
             <li><NavLink to="/comment">تنظیمات نظرات کاربران</NavLink></li>
             <li><NavLink to="/free">تنظیمات محتوای رایگان</NavLink></li>
             <li><NavLink to="/online">تنظیمات اکران آنلاین</NavLink></li>
        </ul>
    </div>
    </> );
}
 
export default Panel;
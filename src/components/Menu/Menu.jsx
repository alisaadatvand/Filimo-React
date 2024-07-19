import { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../../assets/fa-filimo-dark-logo-CSUi6aT1.svg"
import { NavLink } from "react-router-dom";

const Menu = () => {
  let [Menu, setMenu] = useState();
  const fetchMenu = async () => {
    try {
      let data = await fetch(
        "https://alisaadatvand.github.io/jsonServer/db.json"
      );
      let res = await data.json();
      setMenu(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <div className="menu">
        <nav>
          <ul className="menu-right">
            <img src={logo} alt="" />
            <li>|</li>
            {Menu?.menu.map((elem) => {
              return <li key={elem.id}><NavLink to={elem.link}>{elem.name}</NavLink></li>
            })}
          </ul>
          <ul className="menu-left">
            <li className="Subscription">
                {Menu?.sub.map((elem)=>{
                    return <a key={elem.id} href={elem.link} className="white">{elem.name}</a>
                })}
            </li>
            <li className="login">
            {Menu?.login.map((elem)=>{
                    return <a key={elem.id} href={elem.link} className="white">{elem.name}</a>
                })}
            
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;

import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  let [Footer, setFooter] = useState(null);

  const fetchFooter = async () => {
    try {
      let data = await fetch(
        "https://alisaadatvand.github.io/jsonServer/db.json"
      );
      let res = await data.json(); 
      setFooter(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <footer>
      <nav>
        <ul>
          {Footer?.footer.map((elem) => {
            if (elem.id == 5) {
              return (
                <li key={elem.id}>
                  <a href="#">{elem.text}</a>
                  <div className="subFooter">
                    {Footer?.subFooter.map((elem) => {
                        return <div key={elem.id}><a href="#">{elem.text}</a></div>
                    })}
                  </div>
                </li>
              );
            } else {
              return (
                <li key={elem.id}>
                  <a href="#">{elem.text}</a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;


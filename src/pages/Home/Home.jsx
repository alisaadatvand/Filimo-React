import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import Popular from "../../components/Popular/Popular";
import Watch from "../../components/Watch/Watch"
import Learn from "../../components/Learn/Learn";
import Free from "../../components/Free/Free";


const Home = () => {
  let [API, setAPI] = useState(null);
  const fetchApi = async () => {
    let Data = await fetch(
      "https://alisaadatvand.github.io/jsonServer/db.json"
    );
    let res = await Data.json();
    setAPI(res);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Slider API={API}/>
      <Popular API={API}/>
      <Watch API={API}/>
      <Learn API={API}/>
      <Free API={API}/>
    </>
  );
};

export default Home;

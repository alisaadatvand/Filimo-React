import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import Popular from "../../components/Popular/Popular";
import Watch from "../../components/Watch/Watch"
import Learn from "../../components/Learn/Learn";
import Free from "../../components/Free/Free";
import World from "../../components/World/World";
import Online from "../../components/Online/Online";
import Comments from "../../components/Comments/Comments";
import Questions from "../../components/Questions/Questions";
import Filimo from "../../components/Filimo/Filimo";


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
      <World API={API}/>
      <Online API={API}/>
      <Comments API={API}/>
      <Questions API={API}/>
      <Filimo API={API}/>
    </>
  );
};

export default Home;

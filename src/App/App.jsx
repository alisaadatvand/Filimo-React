import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./setting.css";
import Home from "../pages/Home/Home";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import RouterSlider from "../pages/Slider/RouterSlider";
import Login from "../pages/Login/Login";
import Panel from "../pages/Panel/Panel";
import RouterComments from "../pages/Comments/RouterComments";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider/*" element={<RouterSlider />} />
        <Route path="/comment/*" element={<RouterComments/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/panel" element={<Panel/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

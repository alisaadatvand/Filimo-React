import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./setting.css";
import Home from "../pages/Home/Home";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import RouterSlider from "../pages/Slider/RouterSlider";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider/*" element={<RouterSlider />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Edit from "./Edit";

const RouterSlider = () => {
  return (
    <Routes>
      <Route path="/" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default RouterSlider;

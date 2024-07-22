import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Details from "./Details";
import Edit from "./Edit";

const RouterSlider = () => {
  return (
    <Routes>
      <Route path="/" element={<Details />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default RouterSlider;

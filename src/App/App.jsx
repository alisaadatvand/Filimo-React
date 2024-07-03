
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./setting.css";
import Home from "../pages/Home/Home";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
     );
}
 
export default App;
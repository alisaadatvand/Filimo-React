import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import "./css/index.css";

const Edit = () => {
  let {id}  = useParams()
  let [slider,setSlider]=useState(null)
  let fetchSlider  =async()=>{
    try {
        let data=await fetch(`http://localhost:1000/slider/${id}`)
        let res=await data.json()
        setSlider(res)
    } catch (error) {
        console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchSlider()
  },[])
  return (
    <>
      <div className="edit">
        <h1 className="text-center mb-5 text-capitalize">ویرایش اسلایدر</h1>
            {slider && <Form  slider={slider} />}
      </div>
    </>
  );
};

export default Edit;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";

const Edit = () => {
  let {id}  = useParams()
  let [free,setFree]=useState(null)
  let fetchFree  =async()=>{
    try {
        let data=await fetch(`http://localhost:1000/free/${id}`)
        let res=await data.json()
        setFree(res)
    } catch (error) {
        console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchFree()
  },[])
  return (
    <>
      <div className="edit">
        <h1 className="text-center mb-5 text-capitalize">ویرایش محتوای رایگان</h1>
            {free && <Form  free={free} />}
      </div>
    </>
  );
};

export default Edit;

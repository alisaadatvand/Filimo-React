import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";

const Edit = () => {
  let {id}  = useParams()
  let [online,setOnline]=useState(null)
  let fetchOnline  =async()=>{
    try {
        let data=await fetch(`http://localhost:1000/onlineFilms/${id}`)
        let res=await data.json()
        setOnline(res)
    } catch (error) {
        console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchOnline()
  },[])
  return (
    <>
      <div className="edit">
        <h1 className="text-center mb-5 text-capitalize">ویرایش فیلم</h1>
            {online && <Form  online={online} />}
      </div>
    </>
  );
};

export default Edit;

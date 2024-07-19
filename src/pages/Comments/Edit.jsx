import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";

const Edit = () => {
  let {id}  = useParams()
  let [comment,setComment]=useState(null)
  let fetchComment  =async()=>{
    try {
        let data=await fetch(`http://localhost:1000/comments/${id}`)
        let res=await data.json()
        setComment(res)
    } catch (error) {
        console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchComment()
  },[])
  return (
    <>
      <div className="edit">
        <h1 className="text-center mb-5 text-capitalize">ویرایش نظر</h1>
            {comment && <Form  comment={comment} />}
      </div>
    </>
  );
};

export default Edit;

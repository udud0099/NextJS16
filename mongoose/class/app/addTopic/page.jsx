"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !des) {
      alert("all field req");
      return;
    }

    try {
    const res = await fetch("http://localhost:3000/api/topics",{method:"POST", headers: {"Content-type": "application/json"}, body:JSON.stringify({title, des})})

    if(res.ok){
      router.push("/")
    }else{
      throw new Error("Fail to crate topic")
    }

      
    } catch (error) {
      console.log("fail to save data", error);
      
    }



  };
  return (
    <div className="w-7xl mx-auto">
      <h1>add topic</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border-white outline-white border-2 p-2 mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full border-white outline-white border-2 p-2 mb-4"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
        <button
          type="submit"
          className="w-full border-white outline-white border-2 p-2 mb-4 cursor-pointer"
        >
          add topic
        </button>
      </form>
    </div>
  );
};

export default page;

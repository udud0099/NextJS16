import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getTopics = async () =>{
  try {
    const res = await fetch("http://localhost:3000/api/topics",{cache:"no-store"})
    if(!res.ok) throw new Error("fail to load data")
      return res.json()
  } catch (error) {
    // console.log("error loading topis", error);
    console.log(error);
    
  }
}

const TopicList =async () => {
  const {topics} = await getTopics()
  console.log(topics);
  
  return (
    <div>
      {
        topics.map((item, index)=>(

        
      <div className="bg-red-200 p-4 flex flex-col gap-2 mb-2 text-black" key={index}>
        <h1 className="text-4xl">{item.title}</h1>
        <p>
          {item.des}.
        </p>
        <div className="flex ga-8 justify-baseline cursor-pointer">
          <RemoveBtn id={item._id}/>
          <Link href={`/editTopic/${item._id}`}>
            <div className="bg-green-500 text-white p-4 mb-2 inline-block mr-9">
              E
            </div>
          </Link>
        </div>
      </div>
      ))
      }
      
    </div>
  );
};

export default TopicList;

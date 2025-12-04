import React from "react";

import Button from "./Button"; 
import Image from "next/image";
const Card = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-xl flex-1">
      <div>
        <Image className="w-full max-w-[300px] mx-auto" width={300} alt="img" height={1000} src={"/1.webp"} />
      </div>

      <div>
        <div className="my-4">
          <h1 className="text-2xl ">Strawberry Swirl</h1>
          <p>Sweet Meets Spicy in A Warm</p>
        </div>
        <div className="flex justify-between gap-1 whitespace-nowrap items-center flex-nowrap md:flex-wrap">
          <p>Total  Amout</p>
          <h1 className="text-4xl font-bold">$68</h1>
          <Button text={"BUY NOW"} />
        </div>
      </div>
    </div>
  );
};

export default Card;

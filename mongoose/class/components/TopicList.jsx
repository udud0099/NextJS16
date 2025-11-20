import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const TopicList = () => {
  return (
    <div>
      <div className="bg-red-200 p-4 flex flex-col gap-2 mb-2 text-black">
        <h1 className="text-4xl">Topc</h1>
        <p>
          des asfsaf asfd safd Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Temporibus ipsum ipsa ducimus itaque. Enim molestias
          facilis accusamus, voluptate repudiandae vero ut perspiciatis adipisci
          error expedita saepe corrupti veritatis non totam.
        </p>
        <div className="flex ga-8 justify-baseline cursor-pointer">
          <RemoveBtn />
          <Link href={"/editTopic/13"}>
            <div className="bg-green-500 text-white p-4 mb-2 inline-block mr-9">
              E
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default TopicList;

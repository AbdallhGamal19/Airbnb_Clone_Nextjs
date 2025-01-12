import React from "react";
import { IexploreData } from "@/interfaces/app.ts";
import Image from "next/image";

const ExploreCard = ({ distance, img, location }: IexploreData) => {
  return (
    <div className=" relative flex item-center m-2 mt-5  space-x-4 transition duration-20 ease-linear  hover:bg-gray-100 cursor-pointer  hover:scale-105">
      <div className="relative w-16 h-16 ">
        <Image src={img} fill alt="ExploreCard-Img " className="rounded-md" />
      </div>
      <div className="">
        <h2>{distance}</h2>
        <h3 className="text-gray-500">{location}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;

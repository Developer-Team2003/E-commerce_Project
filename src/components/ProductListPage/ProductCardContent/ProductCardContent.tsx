import Image from "next/image";
import React from "react";
import laptop from "../../../mock/mockProductPicture/laptop.png";
import Link from "next/link";
import { MdOutlineStarPurple500,MdOutlineFavorite } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

import {useState} from "react"
import Rating from "@/components/Global/Rating/Rating";
import RoundedDiv from "../RoundedDiv/RoundedDiv";

const ProductCardContent = () => {
  const [isFav,setIsFav] = useState(false)


  return (
    <div className="flex gap-5 w-[920px] h-[230px] bg-white rounded-md">
      <div onClick={() => {setIsFav(!isFav)}} className=" cursor-pointer absolute ml-[860px] mt-[20px] border-[1px] border-gray-300 rounded-lg w-[40px] h-[40px]  flex justify-center items-center">
        {isFav ?  <MdOutlineFavorite className="w-[24px] h-[24px]" color="blue" /> :<AiOutlineHeart className="w-[24px] h-[24px]" color="blue" />}
      </div>
      <div className="flex items-center ">
        <Image className="w-[210px] " src={laptop} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="font-semibold text-lg">
          GoPro HERO6 4K Action Camera - Black
        </p>
        <div className="flex items-center gap-2 font-bold">
          <p className="text-lg">$998.00</p>
          <del className="text-gray-500">$1128.00</del>
        </div>
        <div className="flex items-center gap-2">
         <Rating/>
          <p className="text-[#FF9017]">7.5</p>
          {/* rounded div */}
          {/* <RoundedDiv /> */}
          {/* rounded div */}
          <p className="text-gray-500 font-medium text-3sm">154 orders</p>
          {/* rounded div */}
          <div className="rounded-full w-[6px] h-[6px] bg-gray-300"></div>
          {/* rounded div */}
          <p className="text-[#00B517] font-normal text-lg">Free Shipping</p>
        </div>
        <p className="text-gray-600 min-w-">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </p>
        <Link className="font-medium text-blue-600" href="/details">
          View details 
        </Link>
      </div>
    </div>
  );
};

export default ProductCardContent;

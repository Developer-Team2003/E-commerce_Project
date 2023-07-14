import Title from "@/components/Global/Title/Title";
import Image from "next/image";
import React from "react";
import IPropsItemCard from "../../../interfaces/props/IPropsItemCard";

const ItemCard = (props: IPropsItemCard) => {
  return (
    <div className="cursor-pointer flex w-1/4 justify-center items-center border  h-[127px] gap-8">
      <div>
        <p className={`text-lg font-normal mb-1`}>{props.title}</p>
        <p className="text-gray-500 text-[13px]">{props.subtitle}</p>
      </div>
      <Image width={82} height={82} src={props.picUrl} alt="" />
    </div>
  );
};

export default ItemCard;

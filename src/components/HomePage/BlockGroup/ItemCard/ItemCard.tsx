import Title from "@/components/Global/Title/Title";
import Image from "next/image";
import React from "react";
import IPropsItemCard from "../../../../interfaces/props/IPropsItemCard";

const ItemCard = (props: IPropsItemCard) => {
  return (
    <div className="cursor-pointer flex justify-center items-center border p-4  h-[127px] gap-8">
      <Title
        title={props.title}
        subtitle={props.subtitle}
        classSubTitle="text-gray-500 text-[13px]"
        classTitle="text-lg font-normal mb-1"
      />
      <Image width={82} height={82} src={props.picUrl} alt="" />
    </div>
  );
};

export default ItemCard;

import Image from "next/image";
import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import left from "../../../assets/left-aside.png";
import { BLOCK_GROUP_CONST } from "../../../mock/BlockItemList";
import Title from "../../Global/Title/Title";
import Button from "../../Global/Button/Button";

const BlockGroup = () => {
  return (
    <div className="flex">
      <Image width={280} height={254} alt=" " src={left} />
      <div className=" grid grid-cols-4 ">
        {BLOCK_GROUP_CONST.map((item) => (
          <ItemCard
            key={item.id}
            picUrl={item.picUrl}
            title={item.title}
            subtitle={item.subTitle}
          />
        ))}
      </div>
      <Title classnameParent="absolute flex flex-col gap-4 mt-10 ml-10" title="Home and outdoor"  classTitle="text-lg font-semibold">
        <Button  label="Source now" classname=" hover:bg-gray-200 w-[123px] h-[40px] rounded-lg bg-white font-semibold" type="button"/>
      </Title>

     
    </div>
  );
};

export default BlockGroup;

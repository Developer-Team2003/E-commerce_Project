import Image from "next/image";
import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import left from "../../assets/left-aside.png";
import { BLOCK_GROUP_CONST } from "../../mock/BlockItemList";

const BlockGroup = () => {
  return (
    <div className="flex">
      <Image width={280} height={254} alt=" " src={left} />
      <div className=" flex flex-wrap ">
        {BLOCK_GROUP_CONST.map((item) => (
          <ItemCard
            key={item.id}
            picUrl={item.picUrl}
            title={item.title}
            subtitle={item.subTitle}
          />
        ))}
      </div>
      <div className="absolute mt-10 ml-10">
        <p className="text-lg font-semibold mb-3">Home and outdoor</p>
        <button
          type="button"
          className="w-[123px] h-[40px] rounded-lg bg-white font-semibold"
        >
          Source now
        </button>
      </div>
    </div>
  );
};

export default BlockGroup;

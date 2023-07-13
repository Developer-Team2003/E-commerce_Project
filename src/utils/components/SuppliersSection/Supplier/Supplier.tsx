import Image from "next/image";
import React from "react";
import flag from "../../../mock/mockProductPicture/AE@2x.png";
import { IPropsSupplier } from "@/interfaces/props/IPropsSupplier";
import Title from "@/components/Global/Title/Title";
const Supplier = (props: IPropsSupplier) => {
  return (
    <div className="flex justify-start items-center gap-2 w-[221px] h-[36px]">
      <div className="">
        <Image width={28} height={20} src={props.picUrl} alt="" />
      </div>
      <Title
        classnameParent="flex flex-col"
        title={props.title}
        classTitle="text-1sm font-medium"
        classSubTitle="text-xs text-gray-500"
        subtitle={props.subtitle}
      />
    </div>
  );
};

export default Supplier;

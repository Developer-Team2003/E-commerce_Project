import Image from "next/image";
import React from "react";
import flag from "../../../mock/mockProductPicture/AE@2x.png";
import { IPropsSupplier } from "@/interfaces/props/IPropsSupplier";
const Supplier = (props: IPropsSupplier) => {
  return (
    <div className="flex w-1/5 justify-start items-center gap-2 w-[221px] h-[36px]">
      <div className="">
        <Image width={28} height={20} src={flag} alt="" />
      </div>
      <div className="flex flex-col">
        <span className="text-1sm font-medium">Arabic Emirates</span>
        <span className="text-xs text-gray-500">shopname.ae</span>
      </div>
    </div>
  );
};

export default Supplier;

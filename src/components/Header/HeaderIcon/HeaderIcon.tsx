import Image from "next/image";
import React from "react";

type NavIconProps = {
  navPic: any;
  title: string;
};
const HeaderIcon = (props: NavIconProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <props.navPic color="#8B96A5" className="" width={21} height={21}  />
      </div>
      <span className="text-gray-500 font-normal	 text-[10px]">{props.title}</span>
    </div>
  );
};

export default HeaderIcon;

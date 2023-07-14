import Image from "next/image";
import React from "react";
import MainImage from "@/assets/main-section.png";
import * as Typography from "@/components/Typography";

const MainContent = () => {
  return (
    <>
      <div className="relative w-[664px]">
        <div className="absolute z-30 mt-12 ml-11 ">
          <Typography.SPAN classnameContent="text-2xl ">
            Latest trending
          </Typography.SPAN>
          <Typography.H2 classnameContent="text-3xl font-semibold ml-[-2px]">
            Electronic items
          </Typography.H2>
          <button className="rounded-md w-28 h-10 bg-white mt-5 font-semibold">
            Learn more
          </button>
        </div>
        <Image src={MainImage} className="relative" alt="This is imag" />
      </div>
    </>
  );
};

export default MainContent;

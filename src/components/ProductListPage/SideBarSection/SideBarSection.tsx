import React from "react";
import SideOptions from "./SideOptions/SideOptions";
import RangeSlider from "./RangeSlider/RangeSlider";
import Rating from "@/components/Global/Rating/Rating";
import { STARS_COLORS } from "@/mock/ProductCardContent";
import { Ratings } from "@/constants/SideBarSection";

const SideBarSection = () => {
  return (
    <div>
      
      <SideOptions title="Category" SeeAllUrl="/" />
      <div className="bg-black border-[1px] border-gray-400 w-60 my-3"></div>
      <SideOptions
        title="Brands"
        options={["Samsung", "Apple", "Huawei ", "Pocco", "Lenovo"]}
        type="checkbox"
        SeeAllUrl="/"
      />
      <div className="bg-black border-[1px] border-gray-400 w-60 my-3"></div>
      <SideOptions
        title="Features"
        options={[
          "Metallic",
          "Plastic cover ",
          "8GB Ram",
          "Super power",
          "Large Memory",
        ]}
        type="checkbox"
        SeeAllUrl="/"
      />
      <div className="bg-black border-[1px] border-gray-400 w-60 my-3"></div>
      <RangeSlider title = 'Price range' />
      <div className="bg-black border-[1px] border-gray-400 w-60 my-3"></div>
      <SideOptions
        title="Condition"
        options={["Any", "Refurbished", "Brand new ", "Old items"]}
        type="radio"
      />
      <div className="bg-black border-[1px] border-gray-400 w-60 my-3"></div>
      <SideOptions
        title="Ratings"
        options={Ratings}
        type="checkbox"
      />
    </div>
  )
}

export default SideBarSection;

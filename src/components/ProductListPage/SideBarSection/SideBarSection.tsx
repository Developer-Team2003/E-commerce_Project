import React from "react";
import SideOptions from "./SideOptions/SideOptions";
import RangeSlider from "./RangeSlider/RangeSlider";

const SideBarSection = () => {
  return (
    <div>
      <RangeSlider title = 'mohanned el banna' />
      {/* <SideOptions title="Category" SeeAllUrl="/" />
      <SideOptions
        title="Brands"
        options={["Samsung", "Apple", "Huawei ", "Pocco", "Lenovo"]}
        type="checkbox"
        SeeAllUrl="/"
      />
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

      <SideOptions
        title="Condition"
        options={["Any", "Refurbished", "Brand new ", "Old items"]}
        type="radio"
      />
      <SideOptions
        title="Ratings"
        options={["Samsung", "Apple", "Huawei ", "Pocco", "Lenovo"]}
        type="checkbox"
      /> */}
    </div>
  )
}

export default SideBarSection;

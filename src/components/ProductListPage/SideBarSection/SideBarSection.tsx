import React from "react";
import SideOptions from "./SideOptions/SideOptions";

const SideBarSection = () => {
  return (
    <div>
      <SideOptions title="Category" SeeAllUrl="/" />
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
      />
    </div>
  );
};

export default SideBarSection;

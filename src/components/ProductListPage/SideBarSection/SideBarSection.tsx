import React from "react";
import SideOptions from "./SideOptions/SideOptions";

const SideBarSection = () => {
  return (
    <div>
      <SideOptions
        title="Category"
        options={[
          "Mobile accessory",
          "Electronics",
          "Smartphones ",
          "Modern tech",
        ]}
      />
      <SideOptions
        title="Brands"
        options={["Samsung", "Apple", "Huawei ", "Pocco", "Lenovo"]}
        type="checkbox"
      />
    </div>
  );
};

export default SideBarSection;

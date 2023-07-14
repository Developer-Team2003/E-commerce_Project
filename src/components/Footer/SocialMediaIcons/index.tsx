import React from "react";
import { SMIconsConsts } from "../../../constants/socialMediaIcons";

const SMIcons = () => {
  return (
    <div className="flex gap-4">
      {SMIconsConsts.map((icon) => {
        const Icon = icon.icon;
        return (
          <div key={icon.id} className="text-gray-400">
            <Icon size={25} />
          </div>
        );
      })}
    </div>
  );
};

export default SMIcons;

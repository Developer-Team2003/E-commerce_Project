import React from "react";
import SMIcons from "../../SocialMediaIcons";
import { Body } from "../../Typography";

const FooterLeftSide = () => {
  return (
    <div className="flex gap-1 md:w-[30%] w-[100%] justify-center align-middle flex-col">
      <Body classnameContent="w-full">
        Best information about the company gies here but now lorem ipsum is
      </Body>
      <SMIcons />
    </div>
  );
};

export default FooterLeftSide;

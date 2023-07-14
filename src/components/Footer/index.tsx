import Image from "next/image";
import React from "react";
import SMIcons from "./SocialMediaIcons";
import FooterLeftSide from "./FooterLeftSide";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3 justify-around">
      <FooterLeftSide />
      <FooterLinks />
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import SMIcons from "../SocialMediaIcons";
import FooterLeftSide from "./FooterLeftSide";
import FooterLinksCosts from "./FooterLinks";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3 justify-around">
      <FooterLeftSide />
      <FooterLinksCosts />
    </div>
  );
};

export default Footer;

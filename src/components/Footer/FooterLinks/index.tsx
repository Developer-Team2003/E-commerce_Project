import Link from "next/link";
import React from "react";
import { Body, H1, H2 } from "../../Typography";
import { links } from "../../../constants/footerLinksConsts";

const FooterLinksCosts = () => {
  return (
    <div className="md:flex gap-10 ">
      {links.map((link) => (
        <div key={link.id} className="text-center w-full flex-col ">
          <Link href={link.url} className="text-[#8B96A5] ">
            <Body classnameContent="text-[#1C1C1C] font-semibold">
              {link.label1}
            </Body>
            <Body>{link.label2}</Body>
            <Body>{link.label3}</Body>
            <Body>{link.label4}</Body>
            <Body>{link.label5}</Body>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterLinksCosts;

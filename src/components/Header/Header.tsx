import React from "react";
import { navIcons } from "../../constants/headerConst";
import HeaderIcon from "./HeaderIcon/HeaderIcon";
import Image from "next/image";
import Link from "next/link";
import Logo from "../Global/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";


const Header = () => {
  return (
      <div className="flex place-content-between mt-2">
        <Logo />
        <SearchBar />
        <div className="flex gap-[23px]">
          {navIcons.map((navIcon) => (
            <Link key={navIcon.id} href={navIcon.dist}>
              <HeaderIcon navPic={navIcon.picUrl} title={navIcon.title} />
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Header;

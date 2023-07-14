import Button from "@/components/Global/Button/Button";
import Input from "@/components/Global/Input";
import React from "react";
import { FaThLarge } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";

const RightTopSec = () => {
  return (
    <form className="relative flex justify-center align-middle">
      <Input type="checkbox" id={"verified"} />
      <label htmlFor="verified" className="p-2">
        Verified Only
      </label>
      <select className="mx-2 pl-1 text-[#1C1C1C] bg-white border border-gray-300 rounded-sm py-2 pr-3 w-[170px] leading-tight focus:outline-none focus:border-blue-500">
        <option value="Featured">Featured</option>
      </select>

      <div className="flex border border-gray-300 ">
        <button type="button" className="p-1 hover:bg-gray-300">
          <FaThLarge size={25} />
        </button>
        <div className="border border-gray-300"></div>
        <button type="button" className="p-1 hover:bg-gray-300">
          <VscMenu size={25} />
        </button>
      </div>
    </form>
  );
};

export default RightTopSec;

import { IPropsDropDownList } from "@/interfaces/props/IPropsDropDownList";
import React from "react";
// const DropDownList = (props: { className: string }) => {

const DropDownList = (props: IPropsDropDownList) => {
  return (
    <div>
      <select title="selection" className={props.className}>
        <option hidden>{props.title}</option>
        {props.options.map((option) => (
          <option key={option}> {option}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;
// "border-none bg-orange-100 cursor-pointer w-full h-full block "

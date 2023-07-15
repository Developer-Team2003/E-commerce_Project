import React from "react";
import { ButtonProps } from "../../interfaces/props/IPropsButton";
// destructure  ====>>>  {name}  : { name : string}
const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`text-sm font-semibold ${props.className} flex items-center justify-center `}
    >
      {props.label}
    </button>
  );
};

export default Button;

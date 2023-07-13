import React from "react";
import { InputProps } from "../../interfaces/props/IPropsInput";

const Input: React.FC<InputProps> = ({
  type = "",
  className = "",
  placeholder = "",
}) => {
  return <input type={type} className={className} placeholder={placeholder} />;
};

export default Input;

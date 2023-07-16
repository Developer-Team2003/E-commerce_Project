import { IPropsRating } from "@/interfaces/props/IPropsRating";
import classNames from "classnames";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";


const Rating = ({ className, colors }: IPropsRating) => {
  return (
    <span className={classNames("flex" ,className)}>
      {colors.map((item) => (
        <MdOutlineStarPurple500 key={item.id} color={item.color} />
      ))}
    </span>
  );
};

export default Rating;

import { IPropsRating } from "@/interfaces/props/IPropsRating";
import classNames from "classnames";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";


const Rating = ({ className, colors }: IPropsRating) => {
  return (
    <div className={classNames(className, "flex")}>
      {colors.map((item) => (
        <MdOutlineStarPurple500 key={item.id} color={item.color} />
      ))}
    </div>
  );
};

export default Rating;

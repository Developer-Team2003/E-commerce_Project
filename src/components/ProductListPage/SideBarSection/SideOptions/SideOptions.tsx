; 'use client'
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { IPropsSideBar } from "@/interfaces/props/IPropsSideBar";
import { CATEGORY_SIDEBAR_CONST } from "@/constants/sideBarConst";
import DropDownSideBar from "@/components/Global/DropDownSideBar/DropDownSideBar";
import { STARS_COLORS } from "@/mock/ProductCardContent";
import Rating from "@/components/Global/Rating/Rating";
import { Ratings } from "@/constants/SideBarSection";

const SideOptions = (props: IPropsSideBar) => {
  return (
    <div>
      <Accordion
        className="w-60	bg-transparent shadow-none"
      >
        <AccordionDetails>
          {props.title !== 'Ratings'
            ?
                props.type 
                ? props.options?.map((item) => (
                  <Typography key={item} className="h-9 ">
                    <input
                      type={props.type}
                      className="mr-2 w-4 h-4"
                      id={item}
                      name="option"
                    />
                    <label htmlFor={item}>{item}</label>
                  </Typography>
                ))
                : CATEGORY_SIDEBAR_CONST.map((item) => (
                    <Typography key={item.option} className="h-9 text-gray-600">
                      <Link href={item.Url} className="hover:text-blue-600">
                        {item.option}
                      </Link>
                    </Typography>
                  ))
            : (
              Ratings.map((item) => (
                <Typography key={item.id} className="h-9 flex">
                  <input
                    type={props.type}
                    className="mr-2 w-4 h-4"
                    id={item.id.toString()}
                    name="option"
                  />
                  <Rating colors={STARS_COLORS} />
                </Typography>
              ))
            )
          }
          {props.SeeAllUrl ? (
            <Typography className="h-9">
              <Link href={props.SeeAllUrl} className="text-blue-600">
                See all
              </Link>
            </Typography>
          ) : (
            ""
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default DropDownSideBar(SideOptions);

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdOutlineFavorite } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import Rating from "@/components/Global/Rating/Rating";
import RoundedDiv from "./RoundedDiv/RoundedDiv";
import { IPropsProductCardContent } from "@/interfaces/props/IPropsProductCardContent";
import classNames from "classnames";
import { STARS_COLORS } from "@/mock/ProductCardContent";

const getLissContent = (paragraph: string) => {
  if (paragraph.length <= 35) return paragraph;
  else return paragraph.slice(0, 35);
};

const ProductCardContent = ({
  product,
}: {
  product: IPropsProductCardContent;
}) => {
  const [isFav, setIsFav] = useState(false);
  const [view, setView] = useState("listview");

  return (
    <div
      className={classNames(
        { "w-[920px] h-[230px] gap-5": view == "listview" },
        { "flex-col w-[294px] h-[375px]": view == "gridview" },
        "flex  bg-white rounded-md"
      )}
    >
      {/* FAVORAIT BUTTON */}
      <div
        onClick={() => {
          setIsFav(!isFav);
        }}
        className={classNames(
          { "ml-[860px] mt-[20px]": view == "listview" },
          { "ml-[235px] mt-[230px]": view == "gridview" },
          "  border-[1px] absolute cursor-pointer border-gray-300 rounded-lg w-[40px] h-[40px]  flex justify-center items-center"
        )}
      >
        {isFav ? (
          <MdOutlineFavorite className=" w-[24px] h-[24px]" color="blue" />
        ) : (
          <AiOutlineHeart className="w-[24px] h-[24px]" color="blue" />
        )}
      </div>
      {/* FAVORAIT BUTTON */}

      <div
        className={classNames(
          { "justify-center mb-3": view == "gridview" },
          "flex items-center "
        )}
      >
        <Image className="w-[210px] " src={product.image} alt="" />
      </div>

      <div className="flex flex-col justify-center gap-1 p-2">
        <p
          className={classNames(
            { "absolute hidden ": view == "gridview" },
            "font-semibold text-lg"
          )}
        >
          {product.title}
        </p>

        <div className="flex items-center gap-2 font-bold">
          <p className="text-lg">${product.price}</p>
          <del className="text-gray-500">${product.discount}</del>
        </div>

        <div className="flex items-center gap-2">
          <Rating colors={STARS_COLORS} />
          <p className="text-[#FF9017]">7.5</p>

          {/* rounded div */}
          <RoundedDiv
            className={classNames(
              { "absolute hidden ": view == "gridview" },
              "rounded-full w-[6px] h-[6px] bg-gray-300"
            )}
          />
          {/* rounded div */}

          <p
            className={classNames(
              { "absolute hidden ": view == "gridview" },
              "text-gray-500 font-medium text-3sm"
            )}
          >
            {product.orders} orders
          </p>

          {/* rounded div */}
          <RoundedDiv
            className={classNames(
              { "absolute hidden ": view == "gridview" },
              "rounded-full w-[6px] h-[6px] bg-gray-300"
            )}
          />
          {/* rounded div */}

          <p
            className={classNames(
              { "absolute hidden ": view == "gridview" },
              "text-[#00B517] font-normal text-lg"
            )}
          >
            Free Shipping
          </p>
        </div>
        <p
          className={classNames(
            { "w-[215px]": view == "gridview" },
            "text-gray-600 w-[650px]"
          )}
        >
          {view === "listview"
            ? product.discription
            : getLissContent(product.discription)}
        </p>
        <Link className="font-medium text-blue-600" href="/details">
          View details
        </Link>
      </div>
    </div>
  );
};

export default ProductCardContent;

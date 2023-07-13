import React from "react";
import ProductCard from "./ProductCard";
import img from "../../../assets/03.png";
import { PRODUCT_CONST } from "@/constants/productConst";
const ProductCardSection = () => {
  return (
    <>
      <p className="text-2xl font-semibold  mt-[30px] mb-[24px] ">
        Suppliers by region
      </p>
      <div className="grid grid-cols-5 gap-4 m-auto   mb-[33px] ">
        {PRODUCT_CONST.map((productItem) => (
          <ProductCard
            key={productItem.id}
            className={productItem.className}
            picUrl={productItem.picUrl}
            title={productItem.title}
            subtitle={productItem.subtitle}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCardSection;

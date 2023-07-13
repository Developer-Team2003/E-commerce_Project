import Image, { StaticImageData } from "next/image";
import React from "react";
import Title from "@/components/Global/Title/Title";
import { IPropsProduct } from "@/interfaces/props/IPropsProduct";

const ProductCard = (props: IPropsProduct) => {
  return (
    <div className={`${props.className} rounded-md `}>
      <Image src={props.picUrl} alt="product" />
      <Title
        title={props.title}
        subtitle={props.subtitle}
        classTitle="font-medium ml-3"
        classSubTitle="text-gray-500  font-normal ml-3"
      />
    </div>
  );
};

export default ProductCard;

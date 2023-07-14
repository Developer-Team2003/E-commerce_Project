import Image, { StaticImageData } from "next/image";
import React from "react";
import img from "../../../assets/05.png";
import Title from "@/components/Global/Title/Title";

const ProductCard = (props: IPropsProduct) => {
  return (
    <div className={props.className}>
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

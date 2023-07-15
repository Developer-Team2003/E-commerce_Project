import Image, { StaticImageData } from "next/image";
import React from "react";
import img from "../../../assets/05.png";
import Title from "@/components/Global/Title/Title";
import classNames from "classnames";

const ProductCard = (props: IPropsProduct) => {
  return (
    <div className={props.className}>
      <Image src={props.picUrl} alt="product" />
      <Title
        title={props.title}
        subtitle={props.subtitle}
        classTitle="font-medium"
        classSubTitle= {classNames("text-gray-500  font-normal", props.classSubTitle)}
        classnameParent={props.classnameParent}
      />
    </div>
  );
};

export default ProductCard;

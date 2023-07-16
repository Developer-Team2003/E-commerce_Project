import { StaticImageData } from "next/image";

export interface IMenuLinks {
    id: number,
    content: string,
    link: string,
    className?: string,
  }

export interface ICard {
    id?: number,
    srcImg : StaticImageData,
    Titlename ?: string,
    sale ?: string,
    Icon ?:  any | React.ReactNode,
    classNameParent?: string,
    classSubTitle?: string,
} 

export interface IRatings{
  id : number,
}
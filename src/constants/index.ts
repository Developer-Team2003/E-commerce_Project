import { TSaleCard } from "@/types"
import { TBlock } from "@/types"
import { IMenuLinks,ICard} from "@/interfaces/other"
import ExtraImage from '@/mock/mockProductPicture/laptop.png'
import  {HiSearch}  from "react-icons/hi";


import ExtraImg1 from "@/assets/ExtraImg1.png";

export const block: TBlock = {
  /* classname: 'bg-[#F38332] w-[200px] h-[120px] shadow-md rounded-md p-[16px] text-base text-[20px]', */
  content: "Get US $10 off with a new supplier",
};

export const MainMenuLinks: IMenuLinks[] = [
  { id: 1, content: 'Automobiles', link: '', className: "text-gray-600 bg-[#E5F1FF] pl-[10px] py-[10px] w-[250px] rounded-lg" },
  { id: 2, content: 'Clothes and wear', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
  { id: 3, content: 'Home interiors', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
  { id: 4, content: 'Computer and tech', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
  { id: 5, content: 'Tools, equipments', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
  { id: 6, content: 'Sports and outdoor', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
  { id: 7, content: 'Animal and pets', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
  { id: 8, content: 'Machinery tools', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
  { id: 9, content: 'More category', link: '', className: 'text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg' },
]

export const saleCards: ICard[] = [
  { id: 1, srcImg: ExtraImage, Titlename: "Smart watches", sale: '-25%' ,classNameParent:"gap-1",classSubTitle:"w-16 bg-[#FFE3E3] rounded-2xl h-7 flex justify-center items-center !m-auto" },
  { id: 2, srcImg: ExtraImage, Titlename: "Laptops", sale: '-15%' ,classNameParent:"gap-1",classSubTitle:"w-16 bg-[#FFE3E3] rounded-2xl h-7 flex justify-center items-center !m-auto"},
  { id: 3, srcImg: ExtraImage, Titlename: "GoPro cameras", sale: '-40%',classNameParent:"gap-1",classSubTitle:"w-16 bg-[#FFE3E3] rounded-2xl h-7 flex justify-center items-center !m-auto" },
  { id: 4, srcImg: ExtraImage, Titlename: "Headphones", sale: '-25%',classNameParent:"gap-1",classSubTitle:"w-16 bg-[#FFE3E3] rounded-2xl h-7 flex justify-center items-center !m-auto" },
  { id: 5, srcImg: ExtraImage, Titlename: "Canon camreras", sale: '-25%',classNameParent:"gap-1",classSubTitle:"w-16 bg-[#FFE3E3] rounded-2xl h-7 flex justify-center items-center !m-auto" },
]

export const extraServices: ICard[] = [
  { id: 1, srcImg: ExtraImage , Titlename: "Source from Industry Hubs", Icon: HiSearch , classNameParent:'w-[280px] h-[200px] bg-ExtraImg flex items-end rounded-md border-[#d9d9d9] border-2 relative   '},
  { id: 2, srcImg: ExtraImage , Titlename: "Customize Your Products", Icon: HiSearch,classNameParent:'w-[280px] h-[200px] bg-ExtraImg flex items-end rounded-md border-[#d9d9d9] border-2 relative   ' },
  { id: 3, srcImg: ExtraImage , Titlename: "Fast, reliable shipping by ocean or air", Icon: HiSearch,classNameParent:'w-[280px] h-[200px] bg-ExtraImg flex items-end rounded-md border-[#d9d9d9] border-2 relative   ' },
  { id: 4, srcImg: ExtraImage, Titlename: "Product monitoring and inspection", Icon: HiSearch,classNameParent:'w-[280px] h-[200px] bg-ExtraImg flex items-end rounded-md border-[#d9d9d9] border-2 relative   ' },
]
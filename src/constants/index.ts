import { TSaleCard } from "@/types";
import { TBlock } from "@/types";
import { IMenuLinks, ISaleCard } from "@/interfaces/other";
import ExtraImg1 from "@/assets/ExtraImg1.png";

export const block: TBlock = {
  /* classname: 'bg-[#F38332] w-[200px] h-[120px] shadow-md rounded-md p-[16px] text-base text-[20px]', */
  content: "Get US $10 off with a new supplier",
};

export const MainMenuLinks: IMenuLinks[] = [
  {
    id: 1,
    content: "Automobiles",
    link: "",
    classname:
      " text-gray-600 bg-[#E5F1FF] pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 2,
    content: "Clothes and wear",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 3,
    content: "Home interiors",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 4,
    content: "Computer and tech",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 5,
    content: "Tools, equipments",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 6,
    content: "Sports and outdoor",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 7,
    content: "Animal and pets",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 8,
    content: "Machinery tools",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
  {
    id: 9,
    content: "More category",
    link: "",
    classname: "text-gray-600 pl-[10px] py-[10px] w-[250px] rounded-lg",
  },
];

export const saleCards: TSaleCard[] = [
  { id: 1, srcImg: "", name: "Smart watches", sale: "-25%" },
  { id: 2, srcImg: "", name: "Laptops", sale: "-15%" },
  { id: 3, srcImg: "", name: "GoPro cameras", sale: "-40%" },
  { id: 4, srcImg: "", name: "Headphones", sale: "-25%" },
  { id: 5, srcImg: "", name: "Canon camreras", sale: "-25%" },
];
export const extraServices: ISaleCard[] = [
  {
    id: 1,
    srcImg: "@/assets/ExtraImg1.png",
    name: "Source from Industry Hubs",
    icon: "<HiSearch />",
  },
  {
    id: 2,
    srcImg: "@/assets/ExtraImg1.png",
    name: "Customize Your Products",
    icon: "<HiSearch />",
  },
  {
    id: 3,
    srcImg: "@/assets/ExtraImg1.png",
    name: "Fast, reliable shipping by ocean or air",
    icon: "<HiSearch />",
  },
  {
    id: 4,
    srcImg: "@/assets/ExtraImg1.png",
    name: "Product monitoring and inspection",
    icon: "<HiSearch />",
  },
];

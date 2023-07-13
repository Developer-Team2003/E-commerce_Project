import { BsFillChatLeftTextFill, BsHeartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

export const navIcons = [
  {
    id: "1",
    picUrl: FaUserAlt,
    title: "Profile",
    dist: "/profile",
  },
  {
    id: "2",
    picUrl: BsFillChatLeftTextFill,
    title: "Message",
    dist: "/message",
  },
  {
    id: "3",
    picUrl: BsHeartFill,
    title: "Orders",
    dist: "/orders",
  },
  {
    id: "4",
    picUrl: MdShoppingCart,
    title: "My cart",
    dist: "/cart",
  },
];

import DropDownList from "@/components/Global/DropDownList/dropDownList";
import Link from "next/link";
import { VscMenu } from "react-icons/vsc";
interface NavTypes {
  href: string;
  content: string;
}
const navPages: NavTypes[] = [
  {
    href: "/",
    content: "All category",
  },
  {
    href: "/test",
    content: "Hot offers",
  },
  {
    href: "/test",
    content: "Gift boxes",
  },
  {
    href: "/test",
    content: "Projects",
  },
  {
    href: "/test",
    content: "Menu item",
  },
];
const NavLInk = () => {
  return (
    <div className="flex justify-between bg-orange-100 p-4 m-auto ">
      <div>
        <ul className="flex gap-4 align-middle">
          <li className="mt-0.5 -mr-2">
            <VscMenu />
          </li>

          {navPages.map((item) => (
            <li key={item.content}>
              <Link href={item.href}>{item.content}</Link>
            </li>
          ))}

          {/* <li>
            <Link href={"/test"}>All category</Link>
          </li>
          <li>
            <Link href={""}>Hot offers</Link>
          </li>
          <li>
            <Link href={""}>Gift boxes</Link>{" "}
          </li>
          <li>
            <Link href={""}>Projects</Link>
          </li>
          <li>
            <Link href={""}>Menu item</Link>
          </li> */}

          <li>{<DropDownList />}</li>
        </ul>
      </div>

      <div className="flex justify-between gap-4">
        <DropDownList />
        <DropDownList />
      </div>
    </div>
  );
};

export default NavLInk;

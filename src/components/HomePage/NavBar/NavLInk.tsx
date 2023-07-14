import DropDownList from "@/components/Global/DropDownList/dropDownList";
import { navPages } from "@/constants/NavConst";
import Link from "next/link";
import { VscMenu } from "react-icons/vsc";
import img from "../../../mock/mockProductPicture/AE@2x.png";

const NavLInk = () => {
  return (
    <div className="flex justify-between  p-4 m-auto  ">
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

          <li>{<DropDownList title="Help" options={["AB", "CON", "ME"]} />}</li>
        </ul>
      </div>

      <div className="flex justify-between gap-4">
        <DropDownList title="English, USD" options={["Arabic", "USA", "KSA"]} />
        <DropDownList title={`Ship to`} options={["1", "2", "3"]} />
      </div>
    </div>
  );
};

export default NavLInk;

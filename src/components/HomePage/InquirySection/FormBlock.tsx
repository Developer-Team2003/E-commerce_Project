import Button from "@/components/Global/Button/Button";
import DropDownList from "@/components/Global/DropDownList/dropDownList";
import Title from "@/components/Global/Title/Title";
import Image from "next/image";
import React from "react";
import img from "../../../assets/adc29e57-7ff8-415b-9f71-26b98d45c336.jpeg";
const FormBlock = () => {
  return (
    <div className="h-[420px] w-full mt-[9px] ">
      <Image src={img} alt="img" className="absolute -z-10  w-full h-[420px]" />
      <div className="flex justify-between bg-gradient-to-r  h-[420px]">
        <Title
          classnameParent="mt-[40px] text-white pl-[40px]"
          classTitle="font-semibold text-3xl leading-[38.73px] w-[440px] h-[78px] block mb-[13px]"
          classSubTitle="w-[390px] h-[48px] text-white font-normal	text-base "
          title="An easy way to send requests to all suppliers"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt."
        />

        <div className=" w-[491px] h-[346px] rounded-md mt-[30px] bg-white mr-[31px]">
          <form>
            <p className="font-semibold text-xl leading-7 ml-[20px] mt-[22px] mb-[18px]">
              Send quote to suppliers
            </p>
            <input
              type="text"
              placeholder="What item you need?"
              className="block w-[440px] h-[40px] rounded-md ml-[20px] mb-[20px] pl-2  border-[2px]	 "
            />
            <textarea
              placeholder="Type more details"
              title="textarea"
              className="w-[440px] h-[73px] rounded-md ml-[20px] mb-[20px] pt-2 pl-2  border-[2px] resize-none	"
            />
            <input
              type="text"
              readOnly
              placeholder="..."
              value={"Quantity"}
              className=" w-[206px] h-[40px] rounded-md ml-[20px] pl-2  border-[2px]	"
            />
            <div className=" inline-block w-[111px] h-[40px] rounded-md ml-[8px]">
              <DropDownList
                title="Pcs"
                options={["2", "22", "22"]}
                className="w-[111px] h-[40px] rounded-md border-[2px]"
              />
            </div>
            <Button
              label="Send inquiry"
              type="submit"
              className="w-[128px] h-[40px]  text-base !font-medium	 block bg-blue-500 rounded-md text-white ml-[20px] mt-[15px] hover:bg-opacity-70  ease-in duration-150"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;

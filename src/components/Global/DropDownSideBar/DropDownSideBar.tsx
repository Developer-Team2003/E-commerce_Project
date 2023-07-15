"use client";
import React, { useState } from "react";
import Title from "@/components/Global/Title/Title";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import classNames from "classnames";

const DropDownSideBar = (WrappedComponent: React.ReactNode | any) => {  
    return (props: any) => {
        const [isChecked, setIsChecked] = useState<boolean>(false);  
        return (
            <div className={classNames('w-60 flex flex-col gap-y-3')}>
            <Title title={props.title} classTitle=' font-semibold text-lg w-[90%] ' classnameParent={classNames('flex !flex-row flex-start items-center justify-around ')}>
                { isChecked ? 
                    <>
                        <HiChevronUp className={classNames('text-2xl cursor-pointer')} fill="#8B96A5" onClick={() => setIsChecked((prevState) => !prevState)}/>
                    </>
                            :
                    <>
                        <HiChevronDown className={classNames('text-2xl cursor-pointer')} fill="#8B96A5" onClick={() => setIsChecked((prevState) => !prevState)} />
                    </>
                 }
            </Title>
            <div className={classNames({
                'hidden' : isChecked,
                'block' : !isChecked,
            })}>
                <WrappedComponent {...props} />
            </div>
        </div>
    );
  };
};

export default DropDownSideBar;

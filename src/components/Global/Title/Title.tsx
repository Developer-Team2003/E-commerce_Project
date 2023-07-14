import classNames from "classnames";
import React, { Children } from "react";
type titleProps = {
   title?:string,
   subtitle?:string,
   classTitle?:string,
   classSubTitle?:string,
   classnameParent?:string,
   children?:React.ReactNode
}
const Title = ({title,subtitle,classTitle,classSubTitle,classnameParent,children} : titleProps) => {
  return (
    
    <div className={classNames('flex flex-col',classnameParent)}>
        <span className={classNames(classTitle)} >{title}</span>
        {subtitle && <p className={classNames('text-gray-500',classSubTitle)}>{subtitle}</p>}
    {children}
    </div>
  );
};

export default Title;

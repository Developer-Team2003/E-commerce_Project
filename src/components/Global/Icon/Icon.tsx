import { IPropsIcon } from '@/interfaces/props/IPropsIcon';
import classNames from 'classnames';
import React from 'react'
import  {HiSearch}  from "react-icons/hi";



const IconGlobal = ({className,children}: IPropsIcon) => {
  return (
    <div className={classNames(className)}>
        {children}
    </div>
  )
}

export default IconGlobal
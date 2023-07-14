
import { ICard } from '@/interfaces/other';
import { IPropsExtraService } from '@/interfaces/props/IPropsExtraService';
import Image from 'next/image'
import React from 'react'
import  {HiSearch}  from "react-icons/hi";
import ExtraImage from '@/assets/ExtraImg1.png'
import IconGlobal from '@/components/Global/Icon/Icon'
import classNames from 'classnames';
import Title from '@/utils/components/Global/Title/Title';

const ExtraService = ({srcImg,Titlename,Icon,id,classNameParent}:ICard) => {
  return (
    <div key={id} className={classNames(classNameParent)}>
        <Title title = {`${Titlename}`} classnameParent='h-20 bg-white w-full font-bold pl-8 pr-32 pt-3'/>
        {/* <Title title = {Titlename} /> */}
        <IconGlobal className='rounded-[50%] w-14 h-14 bg-[#D1E7FF] content-center flex absolute right-5 bottom-16'>
          <Icon className='m-auto text-xl' />
        </IconGlobal>
      </div>
  )
}

export default ExtraService
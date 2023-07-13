import { ISaleCard } from '@/interfaces/other';
import { IPropsExtraService } from '@/interfaces/props/IPropsExtraService';
import Image from 'next/image'
import React from 'react'
import  {HiSearch}  from "react-icons/hi";

const ExtraService = ({srcImg,name,icon,id}:ISaleCard) => {
  return (
    <div key={id}>
        <Image src= {srcImg} alt='this is image'/>
    </div>
  )
}

export default ExtraService
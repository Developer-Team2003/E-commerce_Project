import React from 'react'
import ExtraService from './ExtraService/ExtraService'
import { IPropsExtraService } from '@/interfaces/props/IPropsExtraService'


const ExtraServices = ({ extraServices }: IPropsExtraService) => {
  return (
    <div>
      {extraServices.map(item => <ExtraService key={item.id} srcImg={item.srcImg} Titlename={item.Titlename} Icon={item.Icon} classNameParent={item.classNameParent}/>)}
    </div>
  )
}

export default ExtraServices
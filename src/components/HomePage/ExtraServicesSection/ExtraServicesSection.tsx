import React from 'react'
import ExtraService from './ExtraService/ExtraService'
import { ISaleCard } from '@/interfaces/other'
import { IPropsExtraService } from '@/interfaces/props/IPropsExtraService'


const ExtraServices = ({ extraServices }: IPropsExtraService) => {
  return (
    <div>
      {extraServices.map(item => <ExtraService key={item.id} />)}

    </div>
  )
}

export default ExtraServices
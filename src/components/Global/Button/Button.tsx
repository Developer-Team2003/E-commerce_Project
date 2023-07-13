import React from 'react'
import { IPropsButton } from "../../../interfaces/props/IPropsButton"
import classNames from 'classnames'

const Button = (props: IPropsButton) => {
  const { type, classname, ...rest } = props
  return (
    <button type={type} className={classNames('flex items-center justify-center', classname)}>{rest.label}</button>
  )
}

export default Button
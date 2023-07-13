import React from 'react'
import IPropsTypography from '@/interfaces/props/IPropsTypography'

export const H1 = ({children,classnameContent}:IPropsTypography) => {
  return (
  <h1 className={classnameContent}>{children}</h1>
  )
}
export const H2 = ({children,classnameContent}:IPropsTypography) => {
  return (
  <h2 className={classnameContent}>{children}</h2>
  )
}
export const H3 = ({children,classnameContent}:IPropsTypography) => {
  return (
    <h3 className={classnameContent}>{children}</h3>
  )
}
export const H4 = ({children,classnameContent}:IPropsTypography) => {
  return (
    <h4 className={classnameContent}>{children}</h4>
  )
}
export const H5 = ({children,classnameContent}:IPropsTypography) => {
  return (
    <h5 className={classnameContent}>{children}</h5>
  )
}
export const H6 = ({children,classnameContent}:IPropsTypography) => {
  return (
    <h6 className={classnameContent}>{children}</h6>
  )
}
export const Body = ({children,classnameContent}:IPropsTypography) => {
  return (
    <p className={classnameContent}>{children}</p>
  )
}
export const SPAN = ({children,classnameContent}:IPropsTypography) => {
  return (
    <span className={classnameContent}>{children}</span>
  )
}


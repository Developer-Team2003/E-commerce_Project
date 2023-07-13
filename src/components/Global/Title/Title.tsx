import classNames from 'classnames'
import React from 'react'
type titleProps = {
   title:string,
   subtitle:string,
   classTitle?:string,
   classSubTitle?:string,
   classnameParent?:string,
   childern:any
}
const Title = ({title,subtitle,classTitle,classSubTitle,classnameParent,childern} : titleProps) => {
  return (
    
    <div className={classNames(classnameParent)}>
        <span className={classNames(classTitle)} >{title}</span>
        {subtitle && <p className={classNames('text-gray-500',classSubTitle)}>{subtitle}</p>}
        {childern}
    </div>

  )
}

export default Title
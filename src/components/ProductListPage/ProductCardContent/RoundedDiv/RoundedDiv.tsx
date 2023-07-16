import React from 'react'
import classNames from 'classnames'
type IPorpsRoundedDiv = {
    className: string
}

const RoundedDiv = ({className}:IPorpsRoundedDiv) => {
  return (
    <div className={classNames(className)}></div>
  )
}

export default RoundedDiv
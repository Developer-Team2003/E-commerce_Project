import React from 'react'
import classNames from 'classnames'
import * as Typography from '@/components/Typography'

const Block = ({classname,content,children}:any) => {
  return (
    <div className={classNames(classname,"font-['Inter']")}>
        {content && <Typography.Body classnameContent="text-[#FFF] w-28 ">
            {content}
        </Typography.Body>}
        {children}
    </div>
  )
}

export default Block
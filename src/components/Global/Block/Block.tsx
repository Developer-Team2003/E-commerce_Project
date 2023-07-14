import React from 'react'
import classNames from 'classnames'
import * as Typography from '@/components/Typography'
import { IPropsBlock } from '@/interfaces/props/IPropsBlock'

const Block = ({classname,content,children}:IPropsBlock) => {
  return (
    <div className={classNames(classname, "font-['Inter']")}>
      {content && (
        <Typography.Body classnameContent="text-[#FFF] w-28 ">
          {content}
        </Typography.Body>
      )}
      {children}
    </div>
  );
};

export default Block;

import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { IPropsMainMenuLink } from '@/interfaces/props/IPropsMainMenuLink'

const MainMenuLink: React.FC<IPropsMainMenuLink> = ({ MainMenuLinks }) => {
  return (
    <div className='m-20'>
      <ul>
        {MainMenuLinks.map(item => <li key={item.id} className={classNames("", item.className)} ><Link href={item.link}  >{item.content}</Link></li>
        )}
      </ul>
    </div>
  )
}

export default MainMenuLink
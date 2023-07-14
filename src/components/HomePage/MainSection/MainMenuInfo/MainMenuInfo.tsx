import React from 'react'
import Block from '@/components/Global/Block/Block'
import Button from '@/components/Global/Button/Button'
import Title from '@/components/Global/Title/Title'
import classNames from 'classnames'
import Image from 'next/image'
import profileImage from '@/assets/profileImage.png'

const MainMenuInfo = () => {
  return (
    <>
      <Block classname={classNames('bg-[#E3F0FF] w-[200px] shadow-md rounded-md p-3 flex flex-col gap-2')} >
        <div className='flex gap-5 mb-2 items-center'>
          <Image src={profileImage} alt='this is profileImage' className='' />
          <Title title="Hi, user" subtitle='let’s get stated' classnameParent='w-full' classTitle='font-semibold' classSubTitle='font-semibold' />
        </div>
        <Button label='Join now' type='button' classname='bg-[#127FFF] w-full h-8 rounded-md text-white hover:bg-[#489eff] duration-200 font-semibold' />
        <Button label='Log in' type='button' classname='bg-white w-full h-8 rounded-md text-[#127FFF] hover:bg-[#dacfcfc2] duration-200  font-semibold' />
      </Block> 
    </>
  )
}

export default MainMenuInfo
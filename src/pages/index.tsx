import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainMenuLink from '@/components/HomePage/MainSection/MainMenuLink/MainMenuLink'
import { MainMenuLinks } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="font-Inter">
      {/* mohanned */}
      {/* <Block classname={classNames("bg-[#F38332] w-[200px] h-[120px] shadow-md rounded-md p-[16px] text-base text-[20px] font-['Inter']",block.classname)} content={block.content}/> */}
      {/* <MainMenuInfo /> */}
      {/* <MainMenuLink MainMenuLinks={MainMenuLinks}/> */}
      {/* <MainContent /> */}
      {/* sale section */}
      {/* <SaleSection /> */}
      {/* <ExtraServices extraServices={extraServices} /> */}


    </main>
  )
}

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainMenuLink from '@/components/HomePage/MainSection/MainMenuLink/MainMenuLink'
import { MainMenuLinks, block, extraServices } from '@/constants'
import MainMenuInfo from '@/components/HomePage/MainSection/MainMenuInfo/MainMenuInfo'
import Block from '@/components/Global/Block/Block'
import classNames from 'classnames'
import MainContent from '@/components/HomePage/MainSection/MainContent/MainContent'
import SaleSection from '@/components/HomePage/SaleSection/SaleSection'
import ExtraServices from '@/components/HomePage/ExtraServicesSection/ExtraServicesSection'
import Icon from '@/components/Global/Icon/Icon'
import SuppliersSection from '@/components/HomePage/SuppliersSection/SuppliersSection';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-Inter">
      {/* <Block classname={classNames("bg-[#F38332] w-[200px] h-[120px] shadow-md rounded-md p-[16px] text-base text-[20px] font-['Inter']",block.classname)} content={block.content}/>
      <MainMenuInfo />
      <MainMenuLink MainMenuLinks={MainMenuLinks}/>
      <MainContent /> */}
      {/* <SaleSection /> */}
      <ExtraServices extraServices={extraServices} />
    </main>
  )
}

import Header from '@/components/Header/Header';
import BlockGroup from '@/components/HomePage/BlockGroup/BlockGroup';
import ProductCard from '@/components/HomePage/RecommendedItemsSection/ProductCard';
import SuppliersSection from '@/components/HomePage/SuppliersSection/SuppliersSection';
import ProductCardContent from '@/components/ProductListPage/ProductCardContent/ProductCardContent';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className='m-4 flex flex-col gap-3'>
    <Header/>
    <BlockGroup/>
    <SuppliersSection/>
  </main>;
}

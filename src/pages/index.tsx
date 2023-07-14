import ProductCardContent from '@/components/ProductListPage/ProductCardContent/ProductCardContent';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  return <main className='m-4 flex flex-col gap-3'>
    <ProductCardContent/>
    <ProductCardContent/>
    <ProductCardContent/>
  </main>;



}

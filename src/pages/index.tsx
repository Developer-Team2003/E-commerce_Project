import SideBarSection from '@/components/ProductListPage/SideBarSection/SideBarSection';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className='m-4 flex flex-col gap-3'>
      <SideBarSection />
  </main>;
}

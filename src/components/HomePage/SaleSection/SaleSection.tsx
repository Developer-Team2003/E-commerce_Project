import React from 'react'
import { saleCards } from '@/constants'
import ProductCard from '../RecommendedItemsSection/ProductCard'
import classNames from 'classnames'

const SaleSection = () => {
  return (
    <div className=' flex m-auto mt-10'>
      {saleCards.map((item) => <ProductCard picUrl={item.srcImg} key={item.id} title={item.Titlename} subtitle={item.sale} className='test flex flex-col justify-center items-center w-[180px] px-3  h-[260px] border-[#d9d9d9] border-2 border-l-0 ' classSubTitle={item.classSubTitle} classnameParent={item.classNameParent} />)}
    </div>
  )
}

export default SaleSection
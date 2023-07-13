import React from 'react'
// import CategoryList from './CategoryList'
import Button from '@/components/Global/Button/Button'
import SearchForm from '../SearchForm/SearchForm'

const SearchBar = () => {
  return (
    <div className='flex'>
      <SearchForm/>
      {/* <CategoryList title='All category' isBordered={true}/> */}
      <Button type='button' className='w-[100px] h-[40px] text-white rounded-r-lg bg-blue-600' label="Search"  />
    </div>
  )
}

export default SearchBar
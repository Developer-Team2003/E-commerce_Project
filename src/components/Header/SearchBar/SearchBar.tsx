import React from 'react'
import Button from '@/components/Global/Button/Button'
import SearchForm from '../SearchForm/SearchForm'
import DropDownList from '@/components/Global/DropDownList/dropDownList'

const SearchBar = () => {
  return (
    <div className='flex'>
      <SearchForm/>
      {/* <DropDownList option={[]}  title="All Category" className="border-blue-600 w-[145px] h-[40px] border-y-2" /> */}
      <Button type='button' className='w-[100px] h-[40px] text-white rounded-r-lg bg-blue-600' label="Search"  />
    </div>
  )
}

export default SearchBar
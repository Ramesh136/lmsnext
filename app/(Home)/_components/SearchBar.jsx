import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex gap-3 items-center text-[14px] border rounded-md p-2  bg-gray-50 text-gray-500'>
        <Search />
        <input type='text' placeholder='search' className='p-[10.5px] bg-transparent outline-none'/>
    </div>
  )
}

export default SearchBar
"use client"
import React, { useState } from 'react'

const SearchFilter = ({selectedCategory}) => {

    const filterList = [
        {
            id : 1,
            name : 'all',
        },
        {
            id : 2,
            name : 'Python',
        },
        {
            id : 3,
            name : 'JavaScript',
        },
        {
            id : 4,
            name : 'Java',
        },
        {
            id : 5,
            name : 'Data Analysis',
        },
        
    ]
    const [activeIndex , setActiveIndex] = useState(0)

  return (
    <div className='flex gap-6 mt-20 py-5'>
        {filterList.map((item ,index)=>(
            <button className={'rounded-md border p-2 hover:border-purple-600'+(activeIndex==index?' bg-purple-100 text-purple-800':'')} 
            key={index}
            onClick={()=>{
                selectedCategory(item.name)
                setActiveIndex(index)}}>
            {item.name}</button>
        
        ))}
    </div>
  )
}

export default SearchFilter
import React from 'react'
import SideBarNav from './_components/SideBarNav'
import Header from './_components/Header'

const HomeLayout = ({children}) => {
  return (
    <div>
      <div className='h-full w-64 flex-col fixed inset-y-0 z-50'>
        <SideBarNav />
      </div>
      <div className='fixed inset-x-0 bg-white'>
      <Header />
      </div>
      
      <div className='ml-64 p-5'>{children}</div>
    </div>
    
  )
}

export default HomeLayout
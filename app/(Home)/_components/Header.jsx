"use client"
import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Header = () => {
const {user} = useUser()
const router = useRouter()

useEffect(()=>{
},[])
  return (
    <div className='ml-64 border-b p-5 flex items-center justify-between'>
        <SearchBar />
        {!user ? <button
        onClick={()=>router.push('/sign-in')}
        >Login</button> :
        <UserButton />}
    </div>
  )
}

export default Header
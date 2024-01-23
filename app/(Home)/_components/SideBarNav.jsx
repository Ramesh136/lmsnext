"use client"
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SideBarNav = () => {

    const navList = [
        {
            id : 1,
            name : 'Browse',
            icon : Search ,
            path : '/browse'
        },
        {
            id : 2,
            name : 'Dashboard',
            icon : Layout ,
            path : '/dashboard'
        },
        {
            id : 3,
            name : 'Upgrade',
            icon : Shield ,
            path : '/upgrade'
        },
        {
            id : 4,
            name : 'NewsLetter',
            icon : Mail ,
            path : '/newsletter'
        },
        
    ]

    const [activeIndex , setActiveIndex] = useState(0)
  return (
    <div className='h-full bg-white border-r overflow-y-auto shadow-md flex flex-col'>
        <Link href={'/'}>
        <div className='p-5 border-b'>
            <Image 
            src='/main-logo.png'
            alt = 'logo'
            width={60}
            height={60}
            />
        </div>
        </Link>
        
        {
            navList.map((item , index)=>(
                <Link href ={item.path} key={index}>
                    <div className={'flex gap-2 items-center p-4 px-6 hover:bg-gray-100  cursor-pointer' + (activeIndex==index ? ' text-purple-800':'')}  
                
                onClick={()=>setActiveIndex(index)}
                >
                    <item.icon/>
                    <h2>{item.name}</h2>

                </div>
                </Link>
                
            ))
        }
    </div>
  )
}

export default SideBarNav
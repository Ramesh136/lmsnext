import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseList = ({courses}) => {
  return (
    <div className='grid grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-5'>
        {courses.map((item , index)=>{
           return <Link key={index} href={'/course-preview/'+item.id}>
                <div className=''>
                    <Image
                        alt={item.name}
                        src={item.thumbnail}
                        width={500}
                        height={100} />
                    <h2>{item.name}</h2>
                    <h2 className='text-gray-400 text-[13px]'>{item.instructor}</h2>
                    <h2 className='text-gray-400 text-[13px]'>{item.duration}</h2>
                </div>
                
            </Link>
        })}
    </div>
  )
}

export default CourseList
"use client"
import { myEnrollments } from '@/app/_services/constants'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const{user} = useUser({})
    const [enrolls,setEnrolls] = useState([])
    useEffect(()=>{
        getEnrolls()
        
    },[user])

    const getEnrolls =()=>{
        myEnrollments(user?.primaryEmailAddress?.emailAddress).then(res=>{
            setEnrolls(res?.userEnrollCourses)
            console.log(res?.userEnrollCourses)})
    }

  return (
    <div className='mt-20 pt-2'>
        <h3 className='text-black font-bold text-2xl'>My Enrollments :</h3>
        {enrolls.length!=0?
        <div className='mt-5 space-y-4 w-1/3'>
            {enrolls.map((item , index)=>{
                return <div key={index} className=' border border-b shadow-md p-4 rounded-md'>
                    {item.course}  :  In Progress ....

                </div>

            })}
        </div>: <h4 className='mt-5'>You dont have any couse Enrolled . Head to Browse </h4>}
        </div>
  )
}

export default Dashboard
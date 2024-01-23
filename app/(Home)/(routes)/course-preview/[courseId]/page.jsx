"use client"
import { getCourseById, getEnrolled, publishEnroll, userEnroll } from '@/app/_services/constants'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CourseSyllabus from './_components/CourseSyllabus'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const CoursePreview = ({params}) => {

const [course ,setCourse] = useState()   
const [userEmail , setUserEmail] = useState()
const [enrolled , setEnrolled] = useState([])
const {user} = useUser()
const router = useRouter()

useEffect(()=>{
    setUserEmail(user?.primaryEmailAddress?.emailAddress)
    getCourse()
    getEnroll()
    console.log(user?.primaryEmailAddress?.emailAddress)
    
},[user])

const getEnroll = ()=>{
    getEnrolled(params.courseId , user?.primaryEmailAddress?.emailAddress).then(res=>{
        setEnrolled(res?.userEnrollCourses[0])
        console.log(res)
        console.log(enrolled)})
}

const getCourse = ()=>{
    getCourseById(params.courseId, userEmail).then(res=>{
        setCourse(res.courseList)
    })
}

const enrollCourse = ()=>{
    if(user){
        userEnroll(params.courseId ,userEmail ,course.name).then(async(res)=>{
            if(res)
                await publishEnroll(res.createUserEnrollCourse.id).then(res=>console.log(res))
        })
    }
    else
        router.push('/sign-in')

    
}
if(!course)
    return null
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-20'>
            <div className='col-span-2 '>
            <Image
            className='border rounded-md mt-3'
                alt={course.name}
                src={course.thumbnail}
                width={800}
                height={450} />
            </div>
            <div className='p-2 col-span-1 mt-3'>
                <h2 className='text-[22px] font-black'>{course.name}</h2>
                <h2 className='mt-2'>Instructor : {course.instructor}</h2>
                <h2>Duration : {course.duration}</h2>
                <h2>Schedule :{course.schedule}</h2>
                <h2>Description : {course.description}</h2>

                {enrolled?.courseId===params.courseId?<h2 className='p-2 mt-5 border rounded-lg bg-gray-300'>Already Enrolled - Proceed to dashboard</h2>:<button
                className='border rounded-lg bg-purple-500 text-white p-2 mt-5 hover:bg-purple-700'
                onClick={()=>{enrollCourse()}}>Enroll Now</button>}


                <div className='mt-5'>
                    <h3 className='mb-5'>Enrolled people to connect :   </h3>
                    {course.students.map((item , index)=>{
                        return <h2 key={index}>{item.name} - {item.email}</h2>
                    })}
                </div>
            </div>
        </div>

        <CourseSyllabus syllabus ={course.syllabus}/>
    </div>
  )
}

export default CoursePreview
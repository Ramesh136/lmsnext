"use client"
import React, { useEffect, useState } from 'react'
import SearchFilter from './_components/SearchFilter'
import { getCourseList } from '@/app/_services/constants'
import CourseList from './_components/CourseList'

const Browse = () => {

  const [courses ,setCourses] = useState([])
  const [orgCourse,setOrgCourse] = useState([])

  useEffect(()=>{
    getcourses()
  },[])

  const getcourses = ()=>{
    getCourseList().then(res=>{
      console.log(res.courseLists)
      setCourses(res.courseLists)
      setOrgCourse(res.courseLists)
    })
  }
  const filteredCourse = (category)=>{

    if(category==='all'){
      setCourses(orgCourse)
      return
}
    const fileredList = orgCourse.filter((course)=>{
      return course.preRequisites.includes(category)
    })

    setCourses(fileredList)
  }
  return (
    <div>
      <SearchFilter selectedCategory={(category)=>filteredCourse(category)}/>
      <CourseList courses = {courses}/>
    </div>
  )
}

export default Browse
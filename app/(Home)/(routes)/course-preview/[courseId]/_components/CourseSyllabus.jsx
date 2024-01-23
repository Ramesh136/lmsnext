import React from 'react'

const CourseSyllabus = ({syllabus}) => {
  return (
    <div className='mt-10'>
        <h4>PreView</h4>
        <div className='mt-5 space-y-3'>
            {syllabus.map((item , index)=>{
                return <div key={index}>
                    Week {item.week} : {item.topic}
                </div>
            })}
            <div>Enroll to Know More</div>
        </div>
    </div>
  )
}

export default CourseSyllabus
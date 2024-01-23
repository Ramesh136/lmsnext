import request, { gql } from "graphql-request"

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_HYGRAPH_KEY+'/master'

export const getCourseList = async()=>{

    const query = gql`
    query courses {
        courseLists {
          id
          name
          instructor
          description
          thumbnail
          duration
          preRequisites
        }
      }
    `
    const result = await request(MASTER_URL , query)
    return result
}

export const getCourseById = async (id )=>{

    const query = gql` 
        query Course {
            courseList(where: {id: "`+id+`"}) {
                name
                instructor
                thumbnail
                description
                id
                duration
                schedule
                students {
                    ... on Students {
                    email
                    name
                    uid
                    }
                }
                syllabus {
                    ... on Syllabus {
                    id
                    week
                    topic
                    }
                }
            }
            
        }`
    const result = await request(MASTER_URL , query)
    return result
}

export const getEnrolled = async(id ,email)=>{

    const query = gql`
    query New { 
    userEnrollCourses(
        where: {courseId: "`+id+`",userEmail: "`+email+`"}
      ) {
        id
        userEmail
        courseId
      }
    }`

    const result = await request(MASTER_URL , query)
    return result
}

export const userEnroll = async(id , email , course)=>{

    const query = gql`
    mutation createUserEnroll {
        createUserEnrollCourse(data: {courseId: "`+id+`", userEmail: "`+email+`",course: "`+course+`"}) {
          id
        }
      }
      `
     const result = await request(MASTER_URL ,query)
     return result   
}

export const publishEnroll = async(id)=>{

    const query = gql`
    mutation createUserEnroll {
        publishUserEnrollCourse(where: {id: "`+id+`"}) {
          id
        }
      }
    `
    const result = await request(MASTER_URL ,query)
    return result  
}

export const myEnrollments = async(email)=>{

  const query = gql`
  query MyQuery {
    userEnrollCourses(where: {userEmail: "`+email+`"}) {
      course
    }
  }
  `
  const result = await request(MASTER_URL , query)
  return result
} 


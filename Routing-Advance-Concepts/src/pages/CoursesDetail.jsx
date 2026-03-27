import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {

  const params=useParams()
    console.log(params)
  
  return (
    <div>
      <h2> {params.courseId}Courses Details</h2>
    </div>
  )
}

export default CoursesDetail

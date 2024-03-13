'use client';
import { view_career } from '@/api/careerAPI';
import React, { useEffect, useState } from 'react'

const Careers = () => {
  let [careers, setCareers] = useState([])

  useEffect(() => {
    view_career()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data)
          setCareers(data)
        }
      })
  }, [])

  return (
    <div className='ms-1 w-4/6 m-auto'>
      <h1 className='font-bold text-3xl'>Careers</h1>
      <div className='text-black flex flex-col'>
        {
          careers.map(career => {
            return <div key={career._id} className='p-5 border-2 border-black rounded-lg m-5 '>
              <h1>Title: {career.career_title}</h1>
              <h1>No. of Positions: {career.vacancyNumber}</h1>
              <h1>Offered Salary: {career.offered_salary}</h1>
              <h1>Job Description: {career.job_description}</h1>
              <h1>Required Qualifications: {career.qualification}</h1>
              <h1>Posted Date: {career.posted_date}</h1>
              <h1>Application Deadline: {career.deadline}</h1>
              <h1>Status: </h1>
              <button className='border-2 border-none bg-blue-500 hover:bg-blue-700 hover:text-white w-14 h-8 rounded-md mr-5 my-2'> Edit </button>
              <button className='border-2 border-none bg-blue-500 hover:bg-blue-700 hover:text-white w-20 h-8 rounded-md'> Remove </button>

            </div>
          })
        }
      </div>
    </div>
  )
}

export default Careers
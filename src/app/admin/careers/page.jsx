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
    <div className='mt-28 ms-28 bg-slate-300 w-full m-auto'>
      <h1>Careers</h1>
      <div className='text-black flex flex-col'>
        {
          careers.map(career => {
            return <div key={career._id} className='p-5 border border-3 border-blue-700 m-5 '>
              <h1>Title: {career.career_title}</h1>
              <h1>No. of Positions: {career.vacancyNumber}</h1>
              <h1>Offered Salary: {career.offered_salary}</h1>
              <h1>Job Description: {career.job_description}</h1>
              <h1>Required Qualifications: {career.qualification}</h1>
              <h1>Posted Date: {career.posted_date}</h1>
              <h1>Application Deadline: {career.deadline}</h1>
              <h1>Status: </h1>
              <button className='border border-2 bg-blue-500 w-14 rounded-md mr-5'> Edit </button>
              <button className='border border-2 bg-blue-500 w-14 rounded-md mr-5'> Remove </button>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Careers
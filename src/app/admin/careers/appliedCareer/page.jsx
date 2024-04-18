'use client'
import { getAppliedCareer } from '@/api/applyCareerAPI'
import { API } from '@/config'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const AppliedCareer = () => {
  let [appliedcareer, setAppliedCareer] = useState()
  let [success, setSuccess] = useState(false)
  let token


  useEffect(() => {
    if (typeof window !== "undefined") {
      token = localStorage.getItem('token')
    }

    getAppliedCareer(token)
      .then(data => {
        if (data?.error) {
          console.log(data.error)
        }
        else {
          setAppliedCareer(data)
          console.log(data)

        }
      })
  }, [success])



  return (
    <>
      <div className='ms-8 md:w-4/6 w-10/12'>
        <button className='rounded-md bg-blue-600 my-5 px-3 py-2 hover:text-white hover:bg-blue-700'>
          <Link href={"/admin/careers/new"}>Add New Career</Link>
        </button>
        <h1 className='font-bold text-3xl'>Applied Careers</h1>
        <div className='text-black flex flex-col'>
          {
            appliedcareer?.length > 0 &&
            appliedcareer.map(applied => {
              return <div key={applied._id} className='p-5 border-2 bg-white rounded-md shadow-lg  my-3'>
                <h1>
                  <img src={`${API}/${applied.image}`} alt={applied.image} style={{ height: "100px" }} />
                </h1>
                <h1>Name: {applied.first_name} {applied.last_name}</h1>
                <h1>Email:{applied.email} </h1>
                <h1>Phone Number {applied.Phone_number}</h1>
                <h1>Required Qualifications: {applied.qualification}</h1>
                <h1>Experience: {applied.experience}</h1>
                <h1>Reference:{applied.reference}</h1>
                <h1>Status: </h1>
                {/* <Link href={`/admin/careers/update/${applied._id}`}>
                  <span className='border-2 border-none bg-yellow-500  hover:text-white h-8 p-1.5 text-center rounded-md mr-5 '>Update</span>
                </Link> */}

                {/* <button className='border-2 border-none bg-red-500 hover:text-white w-20 h-8 rounded-md ' onClick={handleDelete(career._id)}> Delete </button> */}

              </div>
            })
          }
        </div>
      </div>

    </>
  )
}

export default AppliedCareer
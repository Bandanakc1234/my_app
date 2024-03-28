'use client';
import { deleteCareer, view_career } from '@/api/careerAPI';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Careers = () => {
  let [careers, setCareers] = useState([])
  let [success, setSuccess] = useState(false)

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
  }, [success])

  let token = localStorage.getItem('token')

  const handleDelete = id => (event) => {
    event.preventDefault()
    setSuccess(false)
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3138D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      width: "35%"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCareer(id, token)
          .then(data => {
            if (data.error) {
              Swal.fire({
                title: "Error!",
                text: data.error,
                icon: "error",
                showConfirmButton: false,
                timer: 3000
              })
            }
            else {
              Swal.fire({
                title: "Success!",
                text: data.msg,
                icon: "success",
                showConfirmButton: false,
                timer: 3000
              })
            }
          })
          .catch(
            Swal.fire("something went wrong!")
          )
        setSuccess(true)
      }
    });
  }



  return (
    <div className='ms-8 md:w-4/6 w-10/12'>
      <button className='rounded-md bg-blue-600 my-5 px-3 py-2 hover:text-white hover:bg-blue-700'>
        <Link href={"/admin/careers/new"}>Add New Career</Link>
      </button>
      <h1 className='font-bold text-3xl'>Careers</h1>
      <div className='text-black flex flex-col'>
        {
          careers.map(career => {
            return <div key={career._id} className='p-5 border-2 bg-white rounded-md shadow-lg  my-3'>
              <h1>Title: {career.career_title}</h1>
              <h1>No. of Positions: {career.vacancyNumber}</h1>
              <h1>Offered Salary: {career.offered_salary}</h1>
              <h1>Job Description: {career.job_description}</h1>
              <h1>Required Qualifications: {career.qualification}</h1>
              <h1>Posted Date: {career.posted_date}</h1>
              <h1>Application Deadline: {career.deadline}</h1>
              <h1>Status: </h1>
              <Link href={`/admin/careers/update/${career._id}`}>
                <span className='border-2 border-none bg-yellow-500  hover:text-white h-8 p-1.5 text-center rounded-md mr-5 '>Update</span>
              </Link>

              <button className='border-2 border-none bg-red-500 hover:text-white w-20 h-8 rounded-md ' onClick={handleDelete(career._id)}> Delete </button>

            </div>
          })
        }
      </div>
    </div>
  )
}

export default Careers
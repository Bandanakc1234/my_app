'use client';
import { deleteProject, viewProject } from '@/api/projectAPI';
import { API } from '@/config';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


const Projects = () => {
  let [projects, setProjects] = useState([])
  let [success, setSuccess] = useState(false)

  useEffect(() => {
    viewProject()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data)
          setProjects(data)
        }
      })
  }, [success])
  let token = localStorage.getItem("token")

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
        deleteProject(id, token)
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
      <h1 className='font-bold text-3xl'>Projects</h1>
      <div className='text-black flex flex-col'>
        {
          projects && projects.map(project => {
            return <div key={project._id} className='p-5 border-2 bg-white rounded-md shadow-lg  my-3'>
              <h1>Title: {project.project_title}</h1>
              <h1>category: {project.category?.category_title}</h1>
              <h1>language: {project.language}</h1>
              <h1>tools: {project.tools}</h1>
              <h1>
                <img src={`${API}/${project.project_image}`} alt={project.project_image} style={{height:"100px"}}/>
              </h1>
              <h1>Status: </h1>
              <Link href={`/admin/projects/update/${project._id}`}>
                <span className='border-2 border-none bg-yellow-500  hover:text-white h-8 p-1.5 text-center rounded-md mr-5 '>Update</span>
              </Link>
              <button className='border-2 border-none bg-red-500 hover:text-white w-20 h-8 rounded-md' onClick={handleDelete(project._id)}> Delete </button>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Projects
'use client';
import { view_project } from '@/api/projectAPI';
import React, { useEffect, useState } from 'react'

const Projects = () => {
  let [projects, setProjects] = useState([])

  useEffect(() => {
    view_project()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data)
          setProjects(data)
        }
      })
  }, [])

  return (
    <div className='ms-8 md:w-4/6 w-10/12'>
      <h1 className='font-bold text-3xl'>Projects</h1>
      <div className='text-black flex flex-col'>
        {
          projects.map(project => {
            return <div key={project._id} className='p-5 border-2 bg-white rounded-md shadow-lg  my-3'>
              <h1>Title: {project.project_title}</h1>
              <h1>category: {project.category?.category_title}</h1>
              <h1>language: {project.language}</h1>
              <h1>tools: {project.tools}</h1>
              {/* <h1>project_image: {project.project_image}</h1> */}
              <h1>Status: </h1>
              <button className='border-2 border-none bg-yellow-500  hover:text-white w-14 h-8 rounded-md mr-5 my-2'> Edit </button>
              <button className='border-2 border-none bg-red-500 hover:text-white w-20 h-8 rounded-md'> Remove </button>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Projects
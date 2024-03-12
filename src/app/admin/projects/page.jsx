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
    <div className='mt-28 ms-28 bg-slate-300 w-full m-auto'>
      <h1>Projects</h1>
      <div className='text-black flex flex-col'>
        {
          projects.map(project => {
            return <div key={project._id} className='p-5 border border-3 border-blue-700 m-5 '>
              <h1>Title: {project.project_title}</h1>
              <h1>category: {project.category?.category_title}</h1>
              <h1>language: {project.language}</h1>
              <h1>tools: {project.tools}</h1>
              {/* <h1>project_image: {project.project_image}</h1> */}
              <h1>Status: </h1>
              <button className='border-2 bg-blue-500 w-14 rounded-md mr-5'> Edit </button>
              <button className='border-2 bg-blue-500 w-14 rounded-md mr-5'> Remove </button>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Projects
'use client'
import { getProjectDetails } from '@/api/projectAPI'
import { API } from '@/config'
import Aos from 'aos'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const projectDetail = () => {
    let [project, setProject] = useState({})
    const params = useParams()
    const id = params.projectId

    useEffect(()=>{
        Aos.init()
        getProjectDetails(id)
        .then(data => {
            if(data?.error){
                console.log(data.error)
            }   
            else{
                console.log(data)
                setProject(data)
            }
        })
    },[id])
    

  return (
    <>
        <div className="flex justify-center p-10">
            <div className="bg-white md:w-5/12 rounded-md py-5 flex flex-col items-center shadow-xl " data-aos="zoom-in" data-aos-duration="000">
                <h1 className='text-center md:text-xl font-bold'>Title: {project.project_title}</h1>
                <h1 className='text-center md:text-lg md:m-2 m-1 text-sm'>Category: {project.category?.category_title}</h1>
                <h1 className='text-center md:text-lg md:m-2 m-1 text-sm'>Language: {project.language}</h1>
                <h1 className='text-center md:text-lg md:m-2 m-1 text-sm'>Tools: {project.tools}</h1>
                <h1 className='flex justify-center w-1/2'>
                    <img src={`${API}/${project.project_image}`} alt={project.project_title} className="w-full rounded-md" style={{height:"250px"}}/>
                </h1>
                <h1 className="text-center md:text:lg md:m-2 m-1 text-sm">Status: </h1>
            </div>
        </div>
    </>
  )
}

export default projectDetail

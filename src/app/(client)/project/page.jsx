'use client';
import { CgPathTrim } from "react-icons/cg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import { getAllCategories } from "@/api/categoryAPI";
import { viewProject } from "@/api/projectAPI";
import { API } from "@/config";
import Link from 'next/link';


const project = () => {
    let [cat, setCat] = useState([])
    let [projects, setProjects] = useState([])
    let [filteredResult, setFilteredResult] = useState([])
    let [filter, setFilter] = useState('')

    useEffect(() => {
        Aos.init()
        getAllCategories()
            .then(data => setCat(data))
        viewProject()
            .then(data => {
                console.log(data)
                setFilteredResult(data)
                setProjects(data)})
    }, [])

    const handleFilter = (id) => {
        console.log(id, filteredResult)
        setFilter(id)

        setFilteredResult(
            projects.filter(proj=>proj.category?._id === id)
        )
    }
    return (
        <div>
            <div className='contact-img text-center p-16 text-white'>
                <div className='career lg:text-4xl text-2xl font-bold' data-aos="zoom-in" data-aos-duration="2000" >Our Project</div>
                <div className='flex justify-center p-3' data-aos="fade-up" data-aos-duration="2000">
                    <a href="/" className='pr-2 hover:text-blue-800'>Home</a> /
                    <p className='pl-5'>Project</p>
                </div>
            </div>
            <div className='w-full py-5 bg-white' >
                <div className='w-full' data-aos="fade-up" data-aos-duration="2000">
                    <div className='relative text-center font-bold'>
                        <div className='flex justify-center'>
                            <CgPathTrim size={35} className='text-blue-500 pb-3 pt-1' />
                            <h1>Our Project</h1>
                        </div>
                        <h1 className='text-2xl'>Recently Launched Projects</h1>
                    </div>

                    <div className="m-10">
                        <ul className='flex justify-center text-sm'>
                            <li className='hover:bg-blue-700  hover:text-white  py-2 px-4 active:bg-blue-400 rounded-l-full'>All</li>

                            {
                                cat?.length > 0 &&
                                cat.map(c => {

                                    return <li className='hover:bg-blue-700  hover:text-white  py-2 px-4 hover:cursor-pointer'
                                        onClick={()=>handleFilter(c._id)}>
                                        {c.category_title}</li>
                                })
                            }

                            {/* <li className='hover:bg-blue-700  hover:text-white  py-2 px-4 active:bg-blue-400 rounded-l-full'>All</li>
                            <li className='hover:bg-blue-700  hover:text-white  py-2 px-4'> Web Design</li>
                            <li className='hover:bg-blue-700  hover:text-white  py-2 px-4'>Graphic Design</li>
                            <li className="hover:bg-blue-700  hover:text-white  py-2 px-4 rounded-r-full">Digital Marketing</li> */}
                        </ul>
                    </div>
                    {/* <div className="px-10">
                    <div className="flex flex-wrap  w-full justify-evenly p-5">
                    {
                        filteredResult.map(project => {
                            return <div key={project._id} className='p-5 hover:bg-blue-200 rounded-md w-64 shadow-lg my-3'>
                            <h1 className='text-center md:text-xl font-bold'>Title: {project.project_title}</h1>
                            <h1 className='text-center md:text-lg md:m-2 m-1 text-sm'>category: {project.category?.category_title}</h1>
                            <h1 className='text-center md:text-lg md:m-2 m-1 text-sm'>language: {project.language}</h1>
                            <h1 className='text-center md:text-lg md:m-2 m-1 text-sm'>tools: {project.tools}</h1>
                            <h1 className='flex justify-center'>
                              <img src={`${API}/${project.project_image}`} alt={project.project_image} style={{height:"100px"}}/>
                            </h1>
                            <h1 className="text-center md:text:lg md:m-2 m-1 text-sm">Status: </h1>
                      
                            </div>
                        })
                    }
                    </div>

                    </div> */}
                    <div className="px-10">
                        <div className="flex flex-wrap w-full justify-evenly">
                            {
                                filteredResult.map(project =>{
                                    return <div key={project._id} className="project-div py-5 px-2 hover:bg-blue-200 rounded-md shadow-lg my-3 " >
                                        <h1 className="text-center md:text-xl">
                                            Title:- {project.project_title}
                                        </h1>
                                        <div className="flex justify-center py-3 px-5">
                                            <img src= {`${API}/${project.project_image}`} alt={project.project_title} className="w-full rounded-md" style={{height:"250px"}}/>
                                        </div>
                                        <div className="project-btn flex justify-center pt-1">
                                            <Link href={`/project/${project?._id}`}>
                                                <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer w-28 hover:bg-blue-700 text-white"> Read More
                                                </button>
                                            </Link>
                                        </div>
                                    
                                    </div>
    
                                })

                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default project
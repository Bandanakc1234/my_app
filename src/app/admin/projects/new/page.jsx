'use client';
import { getAllCategories } from '@/api/categoryAPI';
import { addProject } from '@/api/projectAPI';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';


const AddProject = () => {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState({
        project_title: '',
        category: '',
        language: '',
        tools: '',
        product_image: '',
        formdata: new FormData
    })
    let sel_ref = useRef()
    let file_ref = useRef()

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)
    
    let router = useRouter()
    let token = localStorage.getItem('token')

    let { project_title, category, language, tools, project_image, formdata } = project

    useEffect(() => {
        getAllCategories()
            .then(data => setCategories(data))
        setProject({ 
            ...project, formdata: new FormData })
    }, [])


    const handleChange = (event) => {
        let value
        if (event.target.name === 'project_image') {
            value = event.target.files[0]
        }
        else {
            value = event.target.value
            setProject({
                ...project,
                [event.target.name]: value
            })
        }
        console.log(value)
        formdata.set(event.target.name, value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        addProject(formdata, token)
            .then(data => {
                if (data.error) {
                    setSuccess(false)
                    console.log(data.error)
                    setError(data.error)
                }
                else {
                    setError('')
                    setSuccess(true)
                    console.log("project added")
                    setProject({
                        project_title: "",
                        category: "",
                        language: "",
                        tools: "",
                        project_image: "",
                        formdata: new FormData
                    })
                    sel_ref.current.value = "",
                    file_ref.current.value = ""
                }
            })
            .catch(error => console.log(error))
    }

    const showError = () => {
        if (error) {
            Swal.fire({
                icon: "error",
                toast: true,
                title: "error",
                text: error,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                color: "#d33"
            })
            setError('')
            return <div>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            Swal.fire({
                icon: "success",
                toast: true,
                title: "success",
                text: 'Project added successfully.',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                color: "#64DD17"
            })
            setSuccess('')
            return router.push("/admin/projects")
        }
    }



    return (
        <div className='bg-blue-200' style={{ minHeight: "82.3vh" }}>

            <div className='border-2 shadow-lg bg-white rounded-md mb-10 ms-7 lg:w-3/5 md:w-5/6 w-full xl:p-10 md:p-5 p-2'>
                <h1 className='font-bold lg:text-3xl lg:text-left text-center md:text-2xl'>Add Projects</h1>
                {showError()}
                {showSuccess()}
                <table className='lg:w-full w-11/12 md:text-xl text-sm'>
                    <tr className='flex md:flex-row flex-col '>
                        <td className=''>
                            <label className=' md:text-lg text-sm'>project_title:</label>
                        </td>
                        <td className=''>
                            <input type="text" name="project_title" value={project_title} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className='flex md:flex-row flex-col '>
                        <td>
                            <label className='md:text-lg text-sm'>category:</label>
                        </td>
                        <td className=''>
                            <select type="text" name="category"  className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} ref={sel_ref} >
                                <option>Select Category</option>
                                {
                                    categories.length>0 && categories.map(cat => {
                                        return <option key={cat._id} value={cat._id}>{cat.category_title}</option>
                                    })
                                }

                            </select>
                        </td>
                    </tr>
                    <tr className='flex md:flex-row flex-col '>
                        <td>
                            <label className='md:text-lg'>language:</label>
                        </td>
                        <td>
                            <input type="text" name="language" value={language} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />

                        </td>
                    </tr>
                    <tr className='flex md:flex-row flex-col '>
                        <td>
                            <label className='md:text-lg'>tools:</label>
                        </td>
                        <td>
                            <input type="text" name="tools" value={tools} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className='flex md:flex-row flex-col '>
                        <td>
                            <label htmlFor='image' className='md:text-lg'>project_image:</label>
                        </td>
                        <td>
                            <input type="file" id='image' name="project_image" className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} ref={file_ref} />
                        </td>
                    </tr>
                </table>
                <button onClick={handleSubmit} className="border border-none bg-blue-600 rounded-md md:w-20 md:h-10 w-14 h-7 lg:mt-8 mt-3 md:text-lg text-sm"><a href="#" className=' hover:text-white'>Add</a></button>
            </div>
        </div>
    )
}

export default AddProject
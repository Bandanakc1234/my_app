'use client';
import { addProject } from '@/api/projectAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';


const AddProject = () => {
    const [formData, setFormData] = useState({})

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let router = useRouter()


    let { project_title, category, language, tools, project_image } = formData


    let token = localStorage.getItem('token')
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        addProject(formData, token)
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
                    setFormData({
                        project_title: "",
                        category: "",
                        language: "",
                        tools: "",
                        project_image: ""

                    })
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
                text: 'Career added successfully.',
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
        <div className='bg-blue-200 h-screen'>
            {showError()}
            {showSuccess()}
            <div className='border-2 shadow-lg bg-white rounded-md mb-10 ms-7 lg:w-3/5 md:w-5/6 w-10/12 xl:p-10 md:p-5 p-2'>
                <h1 className='font-bold lg:text-3xl lg:text-left text-center md:text-2xl'>Add Projects</h1>

                <table className='lg:w-full w-10/12 md:text-xl text-sm'>
                    <tr className=''>
                        <td className=''>
                            <label className=' md:text-lg text-sm'>project_Title:</label>
                        </td>
                        <td className=''>
                            <input type="text" name="project_title" value={project_title} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className=''>
                        <td>
                            <label className='md:text-lg text-sm'>category:</label>
                        </td>
                        <td className=''>
                            <input type="text" name="category" value={category} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='md:text-lg'>language:</label>
                        </td>
                        <td>
                            <input type="text" name="language" value={language} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='md:text-lg'>tools:</label>
                        </td>
                        <td>
                            <input type="text" name="tools" value={tools} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='md:text-lg'>project_image:</label>
                        </td>
                        <td>
                            <input type="file" name="project_image" value={project_image} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />
                        </td>
                    </tr>
                </table>
                <button onClick={handleSubmit} className="border border-none bg-blue-600 rounded-md md:w-20 md:h-10 w-14 h-7 lg:mt-8 mt-3 md:text-lg text-sm"><a href="#" className=' hover:text-white'>Add</a></button>
            </div>
        </div>
    )
}

export default AddProject
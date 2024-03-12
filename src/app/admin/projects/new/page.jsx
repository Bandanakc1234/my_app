'use client';
import { addCareer } from '@/api/careerAPI';
// import Sidebar from '@/components/Sidebar'
// import Navbar from '@/components/navbar'
// import Navbar from './../../component/Navbar'
import React, { useReducer } from 'react'


const Career = () => {
    let careerReducer = (state, action) => {
        return { ...state, [action.target.name]: action.target.value }
    }

    let [career, setCareer] = useReducer(careerReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault()
        addCareer(career)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log(data)
                }
            })
    }

    console.log(career)
    return (
        <div className='bg-blue-200'>
        <div className='border-2 shadow-lg bg-white rounded-md mb-10 lg:w-3/5 md:w-5/6 w-11/12 xl:p-10 md:p-5 p-2'>
            <h1 className='font-bold lg:text-3xl lg:text-left text-center md:text-2xl'>Add Project</h1>
            <table className='lg:w-full w-10/12 md:text-xl text-sm'> 
                <tr className=''>
                    <td className=''>
                        <label className=' md:text-lg text-sm'>project_title:</label>
                    </td>
                    <td className=''>
                        <input type="text" name="title" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                    </td>
                </tr>
                <tr className=''>
                    <td>
                        <label className='md:text-lg text-sm'>category:</label>
                    </td>
                    <td className=''>
                        <input type="text" name="category" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className='md:text-lg'>language:</label>
                    </td>
                    <td>
                        <input type="text" name="language" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />

                    </td>
                </tr>
                <tr>
                    <td>
                        <label className='md:text-lg'>tools:</label>
                    </td>
                    <td>
                        <input type="text" name="tools" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className='md:text-lg'>project_image:</label>
                    </td>
                    <td>
                        <input type="text" name="project_image" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                    </td>
                </tr>
            </table>
            <button onClick={handleSubmit} className="border border-none bg-blue-600 rounded-md md:w-20 md:h-10 w-14 h-7 lg:mt-8 mt-3 md:text-lg text-sm"><a href="#" className=' hover:text-white'>Add</a></button>
        </div>
    </div>
    )
}

export default Career
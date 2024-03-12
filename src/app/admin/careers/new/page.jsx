'use client';
import { addCareer } from '@/api/careerAPI';
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
        <div className='flex justify-center h-screen bg-blue-200 w-full'>
            <div className='border-2 shadow-lg bg-white rounded-md xl:mt-16 md:mt-12 mt-5 xl:ml-80 lg:ml-56 md:ml-28 ml-20 lg:w-2/5 md:w-4/6 w-4/6 xl:p-10 md:p-6 p-2 h-max'>
                <h1 className='font-bold pb- lg:text-3xl lg:text-left text-center md:text-2xl'>Add Career</h1>
                <table className='lg:w-full w-10/12 md:text-xl text-sm'> 
                    <tr className=''>
                        <td className=''>
                            <label className=' md:text-lg text-sm'>Career_Title:</label>
                        </td>
                        <td className=''>
                            <input type="text" name="title" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                    <tr className=''>
                        <td>
                            <label className='md:text-lg text-sm'>vacancyNumber:</label>
                        </td>
                        <td className=''>
                            <input type="text" name="vacancyNumber" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='md:text-lg'>offered_salary:</label>
                        </td>
                        <td>
                            <input type="text" name="offered_salary" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='md:text-lg'>posted_date:</label>
                        </td>
                        <td>
                            <input type="text" name="posted_date" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='md:text-lg'>deadline:</label>
                        </td>
                        <td>
                            <input type="text" name="deadline" className='border-2 border-black rounded-md md:h-8 h-7 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                </table>
                <button onClick={handleSubmit} className="border border-none bg-blue-600 rounded-md md:w-20 md:h-10 w-14 h-7 lg:mt-8 mt-3 md:text-lg text-sm"><a href="#" className=' hover:text-white'>Add</a></button>
            </div>
        </div>
    )
}

export default Career
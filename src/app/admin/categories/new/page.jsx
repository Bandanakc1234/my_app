'use client'
import { addCategory } from '@/api/categoryAPI'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Category = () => {
    let [category_title, setCategoryTitle] = useState('')
   
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let router = useRouter()

    let token = localStorage.getItem('token')
    const handleChange = (event) =>{
        setCategoryTitle(
             event.target.value
        )
    }


    // let categoryReducer = (state, action) => {
    //     return { ...state, [action.target.name]: action.target.value }
    // }
    // let [category, setCategory] = useReducer(categoryReducer, {})

    const handlesubmit = (event) => {
        event.preventDefault()
        addCategory(category_title,token)
            .then(data => {
                if (data.error) {
                    setSuccess(false)
                    console.log(data.error)
                    setError(data.error)
                }
                else {
                    setError('')
                    setSuccess(true)
                    console.log("category added")
                    setCategoryTitle(""                    )
                }
            })
            .catch(error => console.log(error))
    }

    const showError = () =>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () =>{
        if(success){
            return <div className='alert alert-success'>category added successfully.</div>
        }
    }


    return (
        <div className='bg-blue-200 h-screen'>
            <div className='border-2 shadow-lg bg-white rounded-md mb-10 ms-7 lg:w-3/5 md:w-5/6 w-10/12 xl:p-10 md:p-5 p-2'>
                <h1 className='font-bold lg:text-3xl lg:text-left text-center md:text-2xl'>Add categories</h1>
                {showSuccess()}
                {showError()}
                <table className='lg:w-full w-10/12 md:text-xl text-sm'>
                    <tr>
                        <td>
                            <label className=' md:text-lg text-sm'>category_title:</label>
                        </td>
                        <td>
                            <input type="text" name="category_title" value={category_title} className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' onChange={handleChange} />
                        </td>
                    </tr>
                </table>
                <button onClick={handlesubmit} className="border border-none bg-blue-600 rounded-md md:w-20 md:h-10 w-14 h-7 lg:mt-8 mt-3 md:text-lg text-sm"><a href="#" className=' hover:text-white'>Add</a></button>
            </div>
        </div>
    )
}

export default Category
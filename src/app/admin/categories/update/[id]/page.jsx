'use client' 
import { getCategoryDetails, updateCategory } from '@/api/categoryAPI'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const UpdateCategory = () => {
    let[category_title, setCategoryTitle] = useState('') 
    let [error, setError] = useState('')
    let[success, setSuccess] = useState(false)
    let {id} = useParams()

    let router = useRouter()

    let token = localStorage.getItem('token')

    useEffect(() => {
      getCategoryDetails(id).then(data => setCategoryTitle(data.category_title)
      )
  }, [])

    const handleChange = (event) => {
        setCategoryTitle(
          event.target.value
        )
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      updateCategory(id, category_title, token)
          .then(data => {
              if (data.error) {
                  setError(data.error)
                  setSuccess(false)
                  console.log(data.error)
              }
              else {
                  setError('')
                  setSuccess(true)
                  console.log("category updated")
                  setCategoryTitle('')
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
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            color: "#d33"
        });
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
            text: 'Category updated successfully.',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            color: "#64DD17"
        })
        setSuccess('')
        return router.push("/admin/categories");
    }
}


  return (
    <>
    <div className='bg-blue-200 h-screen'>
            {showSuccess()}
            {showError()}
            <div className='border-2 shadow-lg bg-white rounded-md mb-10 ms-7 lg:w-3/5 md:w-5/6 w-10/12 xl:p-10 md:p-5 p-2'>
                <h1 className='font-bold lg:text-3xl lg:text-left text-center md:text-2xl'>Update category</h1>
                <table className='lg:w-full w-10/12 md:text-xl text-sm'>
                    <tr>
                        <td>
                            <label htmlFor='category_title' className=' md:text-lg text-sm'>category_title:</label>
                        </td>
                        <td>
                            <input type="text" name="category_title"  className='border-2 border-black p-1 md:text-lg rounded-md md:h-8 h-7 w-full' 
                            onChange={handleChange}
                            value={category_title} />
                        </td>
                    </tr>
                </table>
                <button onClick={handleSubmit} className="border border-none bg-blue-600 rounded-md md:w-20 md:h-10 w-14 h-7 lg:mt-8 mt-3 md:text-lg text-sm"><a href="#" className=' hover:text-white'>update</a></button>
            </div>
        </div>
    
    </>
  )
}

export default UpdateCategory
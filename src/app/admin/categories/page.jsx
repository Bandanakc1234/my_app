'use client'
import { deleteCategory, getAllCategories } from '@/api/categoryAPI'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Category = () => {
  let [categories, setCategory] = useState([])
  let [success, setSuccess] = useState(false)

  useEffect(() => {

    getAllCategories()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data)
          setCategory(data)
        }
      })
  }, [success])

  let token 
  if (typeof window !== "undefined") {
    token = localStorage.getItem('token')
  }

  const handleDelete = id => (event) => {
    event.preventDefault()
    setSuccess(false)
    Swal.fire({
      icon: "warning",
      title: "are you sure?",
      text: "you won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3138D6",
      confirmButtonText: "Delete",
      width: "35%"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(id, token)
          .then(data => {
            if (data.error) {
              Swal.fire({
                title: "Error!",
                text: data.error,
                icon: "error",
                showConfirmButton: false,
                timer: 3000
              })
            }
            else {
              Swal.fire({
                title: "Success!",
                text: data.msg,
                icon: "success",
                showConfirmButton: false,
                timer: 3000
              })
            }
          })
          .catch(
            Swal.fire("something went wrong!")
          )
        setSuccess(true)
      }
    });
  }

  return (
    <div className='ms-8 md:w-4/6 w-10/12'>
      <button className='rounded-md bg-blue-600 my-5 px-3 py-2 hover:text-white hover:bg-blue-700'>
        <Link href={"/admin/categories/new"}>Add New Categories</Link>
      </button>
      <h1 className='font-bold text-3xl'>Categories</h1>
      <div className='text-black flex flex-col'>
        {
          categories.map(category => {
            return <div key={category._id} className='p-5 border-2 bg-white rounded-md shadow-lg  my-3'>
              <h1>Title: {category.category_title}</h1>
              <div dangerouslySetInnerHTML={{ __html: category.icon }} className="w-24 p-4"></div>


              <h1>Description:{category.description}</h1>
              <h1>Status: </h1>
              <Link href={`/admin/categories/update/${category._id}`}>
                <button className='border-2 border-none bg-yellow-500  hover:text-white h-8 w-20 text-center rounded-md mr-5 my-2 sm:my-0'>Update</button>
              </Link>
              <button className='border-2 border-none bg-red-500 hover:text-white w-20 h-8 rounded-md ' onClick={handleDelete(category._id)}> Delete </button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Category
/*




*/
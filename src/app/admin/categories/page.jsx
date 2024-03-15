'use client'
import { view_category } from '@/api/categoryAPI'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Category = () => {
    let [categories, setCategory] =useState([])

    useEffect(() =>{
        view_category()
        .then(data =>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log(data)
                setCategory(data)
            }
        })
    },[])

  return (
    <div className='m-s md:w-4/6 w-10/12'>
        <button className='rounded-md bg-blue-600 my-5 px-3 py-2 hover:text-white hover:bg-blue-700'>
        <Link href={"/admin/categories/new"}>Add New Categories</Link>
        </button>
        <h1 className='font-bold text-3xl'>Categories</h1>
        <div className='text-black flex flex-col'>
        {
          categories.map(category => {
            return <div key={category._id} className='p-5 border-2 bg-white rounded-md shadow-lg  my-3'>
              <h1>Title: {category.category_title}</h1>
              <h1>Status: </h1>
              <button className='border-2 border-none bg-yellow-500  hover:text-white w-14 h-8 rounded-md mr-5 my-2'> Edit </button>
              <button className='border-2 border-none bg-red-500 hover:text-white w-20 h-8 rounded-md'> Remove </button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Category
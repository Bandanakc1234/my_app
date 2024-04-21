'use client'
import { getAllCategories, getCategoryDetails } from '@/api/categoryAPI'
import Aos from 'aos'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const serviceDetail = () => {
  const [service, setService] = useState({})

  const params = useParams()
  const id = params.serviceId

  useEffect(() => {
    Aos.init()
    // setService(Services.find(item => item.id == id))
    getCategoryDetails(id)
    .then(data =>{
      if(data?.error){
        console.log(data.error)
      }
      else{
        console.log(data)
        setService(data)
      }
    })
  }, [id])

  return (
    <>
  <div className='flex justify-center'>
      <div className="bg-white md:w-2/3 w-11/12 rounded-md p-5 flex flex-col shadow-xl gap-5 my-10" data-aos="zoom-in" data-aos-duration="000">
        <div className="flex justify-center">
        <h1  className="w-24 p-4" dangerouslySetInnerHTML={{ __html: service.icon }}></h1></div>
        <div className="text-2xl font-bold flex justify-center">
          <h2>{service.category_title}</h2>
        </div>
        <div className="text-justify">
          <p>{service.description} </p>
        </div>
      </div>
  </div>
    </>
  )
}
export default serviceDetail

// import { useParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// const serviceId = () => {
//     const[product, setProduct] = useState({})
//     const{id} = useParams('')

//     useEffect(()=>{
//         get
//     })
//   return (
//     <>
//         <div className='container my-5 shadow-lg m-auto p-5'>
//         </div>
//     </>
//   )
// }
// export default serviceId


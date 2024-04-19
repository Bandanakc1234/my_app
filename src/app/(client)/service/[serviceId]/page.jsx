'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Services } from '../StaticData/page'
import { BiWebcam } from 'react-icons/bi'
import Link from 'next/link'
import { getCategoryDetails } from '@/api/categoryAPI'
import Aos from 'aos'

const serviceDetail = () => {
  const [service, setService] = useState({})

  const params = useParams()
  const id = params.serviceId

  useEffect(() => {
    // setService(Services.find(item => item.id == id))
    getCategoryDetails(id)
    .then(data => {
      Aos.init()
      if (data?.error){
        console.log(data.error)
      }
      else{
        setService(data)
        console.log(data)
      }
    })
  }, [id])

  return (
    <>
  <div className='flex justify-center'>
      <div className="bg-white md:w-1/2 rounded-md px-8 py-10 flex flex-col shadow-xl gap-5 m-10 text-center" data-aos="zoom-in" data-aos-duration="000">
        <div className="flex justify-center">
          <div dangerouslySetInnerHTML={{ __html: service.icon }}></div>                      
        </div>
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


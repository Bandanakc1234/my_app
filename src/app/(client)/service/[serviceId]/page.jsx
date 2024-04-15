'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Services } from '../StaticData/page'
import { BiWebcam } from 'react-icons/bi'
import Link from 'next/link'

const serviceDetail = () => {
  const [service, setService] = useState({})

  const params = useParams()
  const id = params.serviceId

  useEffect(() => {
    setService(Services.find(item => item.id == id))

  }, [])

  return (
    <>
  <div className='flex justify-center'>
      <div className="bg-white md:w-5/12 rounded-md p-5 flex flex-col  shadow-xl gap-5 m-10" data-aos="zoom-in" data-aos-duration="000">
        <div className="flex justify-center">{service.icon}</div>
        <div className="text-2xl font-bold flex justify-center">
          <h2>{service.title}</h2>
        </div>
        <div className="text-center">
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


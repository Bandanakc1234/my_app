'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Services } from '../StaticData/page'

const serviceDetail = () => {
    const[service, setService] = useState({})

    const params = useParams()
    const id = params.serviceId

    useEffect(()=>{
      setService(Services.find(item=>item.id == id))
      
    },[])

  return (
    <>
       <h1>{service.title}</h1>
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


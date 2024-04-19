"use client"
import React, { useState } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Link from 'next/link';
import { getAllCategories } from '@/api/categoryAPI';


const Services = () => {
  let [services, setServices] = useState([])
  let [success, setSuccess] = useState(false)

  useEffect(() => {
    Aos.init()
    getAllCategories()
    .then(data => {
      if (data?.error) {
        console.log(data.error)
      }
      else {
        console.log(data)
        setServices(data)
      }
    })
}, [success])



  return (
    <div>
      <div className='contact-img text-center p-16 text-white'>
        <div className='career lg:text-4xl text-2xl font-bold' data-aos="zoom-in" data-aos-duration="2000" >Service</div>
        <div className='flex justify-center p-3' data-aos="fade-up" data-aos-duration="2000">
          <a href="/" className='pr-2 hover:text-blue-800'>Home</a> /
          <p className='pl-2'>Services</p>
        </div>
      </div>

      {/* <div className="lfooter bg-white md:p-10">
        <h1 className="md:text-5xl text-3xl text-center font-bold p-10" data-aos="fade-up" data-aos-duration="2000">Our Services</h1>
        <div className="topbuttom flex flex-col gap-5 pb-7">
          <div className="top flex-wrap justify-evenly lg:flex lg:justify-evenly">
            {
              services?.length > 0 &&
            services.map(service => {
              return <div key={services._id} className="topfirst bg-white md:w-96 w-80 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200 m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="000">
                <div className="icondiv flex justify-center">
                  <h1 dangerouslySetInnerHTML={{ __html: service.icon }}  className="w-24 p-4"></h1>
                  </div>
                <div className="h2div md:text-2xl text-xl font-bold flex justify-center">
                  <h2>{service.category_title}</h2>
                </div>
                
                <div className="buttondiv flex justify-center">
                  <Link href= {`/service/${service?._id}`}>
                  <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">Read more</button>
                  </Link>
                </div>
              </div>
            })
            }

          </div>
        </div>

      </div> */}

      <div className="lfooter bg-white md:p-10">
          <div className="flex flex-wrap w-full justify-evenly">
            {
              services?.length > 0 && 
              services.map (service => {
                return <div key={service._id} className="flex-col-3 justify-between lg:flex lg:justify-between">
                  <div className="topfirst bg-white md:w-96 w-52 rounded-md px-2 py-6 flex flex-col justify-center shadow-xl hover:bg-blue-200 m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="icondiv flex justify-center" >
                      <div dangerouslySetInnerHTML={{ __html: service.icon }}></div>                      
                    </div>
                    <div className="h2div text-2xl font-bold flex justify-center">
                      <h2 className="text-center">{service.category_title}</h2>
                    </div>
                    {/* <div className="pdiv text-center">
                      <p>{service.description}</p>
                    </div> */}
                    <div className="buttondiv flex justify-center">
                      <Link href={`/service/${service?._id}`}>
                        <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white" >Read More</button>
                      </Link>
                    </div>
                  </div>

                  </div>
              })
            }
                
          </div>
      </div>   

    </div>
  )
}

export default Services
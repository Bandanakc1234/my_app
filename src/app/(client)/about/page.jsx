"use client"

import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const about = () => {
  useEffect(() => {
    Aos.init()
}, [])
  return (
         <div>
             <div className='contact-img text-center p-16 text-white'>
                    <div className='career lg:text-4xl text-2xl font-bold' data-aos="zoom-in" data-aos-duration="2000" >About Us</div>
                    <div className='flex justify-center p-3' data-aos="fade-up" data-aos-duration="2000">
                        <a href="/" className='pr-2 hover:text-blue-800'>Home</a> /
                        <p className='pl-2'>About</p>
                    </div>
                </div>

            <div className="body_mid h-auto bg-white w-full md:p-9 lg:flex lg:justify-between ">
          <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="zoom-in" data-aos-duration="2000">
            <h1 className="lg:text-4xl text-3xl text-blue-500 font-bold md:p-5 p-3">Learn</h1>
            <p className="lg:p-12 lg:text-xl lg:w-full md:text-base md:w-5/6 md:p-10 p-3 text-sm w-full ">
            Index IT Hub pioneers innovative IT solutions for businesses worldwide. Our company specializes in a comprehensive array of services, including software development, web development, mobile application development, graphics design, digital marketing strategies, IT consultation services, and search engine optimization (SEO) With a focus on client success and technical excellence, we deliver tailored solutions to drive growth and efficiency in the digital age. Partner with Index IT Hub to elevate your business to new heights in technology and innovation.
            <br/> <br/>
            Partner with Index IT Hub today and discover how our commitment to technology and innovation can elevate your business to new heights of success. Let us be your trusted partner in navigating the complexities of the digital age, and together, we'll pave the way for a brighter future.
            </p>
          </div>
          <div className="right m-5 lg:w-1/2">
            <img src={"/download1.png"} alt="" className="w-full h-full" data-aos="fade-up" data-aos-duration="2000"/>
          </div>
        </div>


    </div>
  )
}

export default about
"use client"
import React, { useState } from 'react'
import { CgPathTrim } from "react-icons/cg";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { view_career } from '@/api/careerAPI';
import CareerCard from '../component/CareerCard';


const career = () => {
    let [careers, setCareers] = useState([])

    useEffect(() => {
        Aos.init()
        view_career()
            .then(data => setCareers(data))
    }, [])
    
    return (
        <div>
            <div className='contact-img text-center p-16 text-white'>
                <div className='career lg:text-4xl text-2xl font-bold' data-aos="zoom-in" data-aos-duration="2000" >Career</div>
                <div className='flex justify-center p-5' data-aos="fade-up" data-aos-duration="2000">
                    <a href="/" className='pr-2 hover:text-blue-800'>Home</a>/
                    <p className='pl-2'>Career</p>
                </div>
            </div>

            <div className='lg:flex lg:p-10 justify between w-full bg-white'>
                <div className='lg:w-1/2 lg:m-14 pt-10' data-aos="fade-up" data-aos-duration="2000">
                    <div className='lg:flex lg:justify-start flex  justify-center'>
                        <CgPathTrim className='m-1 text-blue-500 size-6' />
                        <p className='font-semibold'>BE PART OF OUR TEAM</p>
                    </div>
                    <p className='lg:text-3xl text-xl lg:text-left text-center font-bold pt-3'>Career and Culture at Index IT Hub</p>
                    <p className='lg:pl-0 pt-5 pl-3'>
                    Discover the vibrant culture at Index IT Hub, where collaboration, innovation, and personal growth are paramount. Join our diverse team and unleash your creativity in an environment that not only values your contributions but also empowers your development. Enjoy competitive compensation, comprehensive benefits, and abundant opportunities for advancement in the dynamic field of IT. Here, we believe in the power of collective wisdom, where sharing knowledge, expertise, and creativity fuels the emergence of the best ideas. Our collaborative environment fosters not just professional growth, but also a sense of camaraderie and teamwork essential for success. 
                    <br/> <br/>
                    Join us at Index IT Hub, where collaboration, innovation, and excellence converge in project development. Together, we'll push the boundaries of technology and create impactful solutions that shape the future
                    </p>
                </div>
                <div className='lg:p-10 lg:w-1/2 p-5'>
                    <img src={"/career2.jpg"} alt="" className='h-full w-full rounded-2xl opacity-80' data-aos="zoom-in" data-aos-duration="2000" />
                </div>
            </div>

            <div className='bg-white p-10'>
                <div className='text-center' data-aos="fade-up" data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <CgPathTrim className='m-1 text-blue-500 md:size-6' />
                        <p className='font-semibold'>Our Job vacancies</p>
                    </div>
                    <p className='md:text-3xl text-2xl font-bold pt-3'>Our Latest Job Vacancy</p>
                </div>
                <div className='flex flex-wrap justify-evenly'>
                    {
                        careers?.length > 0 &&
                        careers.map(career => {
                            console.log(career)
                            return <CareerCard career={career} />
                        })
                    }
                </div>

                {/* <div className='md:w-96 h-auto rounded-lg flex flex-col text-center pt-12 mt-10 shadow-xl hover:bg-blue-200 lg:mb-24 mb-14' data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-center md:text-xl font-bold'>Frontend Developer</h1>
                    <p className='md:text-lg text-sm font-semibold md:m-4 m-1'>Functional Title: Developer Team</p>
                    <p className='md:text-lg md:m-2 m-1 text-sm'>No. of Vacancies:[3]</p>
                    <p className='md:text-lg md:m-2 m-1 text-sm'>offered salary: Negotiable</p>
                    <p className='md:text-lg md:m-2 m-1 text-sm'>Posted Date: 2024 4th feb</p>
                    <p className='md:text-lg md:m-2 m-1 text-sm'>Apply Before(Deadline):2024 4th march</p>
                    <div className='flex justify-center'>
                        <button className='md::m-5 m-3 bg-blue-500 text-white md:w-28 w-24 rounded-2xl md:h-9 h-7 hover:bg-blue-700 md:text-lg text-sm'>Read More</button>
                    </div>
                </div> */}

            </div>
        </div>
    )
}


export default career
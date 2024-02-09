'use client';
import { CgPathTrim } from "react-icons/cg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const project = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className='px-6 md:px-16'>
                <div className='contact-img text-center p-16 text-white'>
                    <div className='career lg:text-4xl text-2xl font-bold' data-aos="zoom-in" data-aos-duration="2000" >Our Project</div>
                    <div className='flex justify-center p-3' data-aos="fade-up" data-aos-duration="2000">
                        <a href="/" className='pr-2 hover:text-blue-800'>Home</a> /
                        <p className='pl-2'>Project</p>
                    </div>
                </div>
                <div className='container-xxl py-5 bg-white' >
                    <div className='container px-lg-5' data-aos="fade-up" data-aos-duration="2000">
                        <div className='relative text-center font-bold'>
                            <div className='flex justify-center'>
                                <CgPathTrim size={35} className='text-blue-500 pb-3 pt-1' />
                                <h1>Our Project</h1>
                            </div>
                            <h1 className='text-2xl'>Recently Launched Projects</h1>
                        </div>
                        <div className="m-16">
                            <ul className='flex justify-center text-sm'>
                                <li className='hover:bg-blue-400 py-2 px-4  active:bg-blue-400 rounded-l-full'>All</li>
                                <li className='hover:bg-blue-400 py-2 px-4'> Web Design</li>
                                <li className='hover:bg-blue-400 py-2 px-4'>Graphic Design</li>
                                <li className="hover:bg-blue-400 py-2 px-4 rounded-r-full">Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default project
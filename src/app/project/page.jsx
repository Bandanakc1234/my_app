'use client';
import { CgPathTrim } from "react-icons/cg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const project = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <div className='pl-16 pr-16'>
                <div className='contact-img h-52 w-100%' >
                    <h1 className=' font-bold text-3xl text-center pt-14' data-aos="zoom-in" data-aos-duration="2000">Our Project</h1>
                    
                    <div className='flex justify-center pt-2'data-aos="fade-up" data-aos-duration="2000">
                        <a href="/" className='hover:text-blue-800' >Home  /</a>

                        <p className='pl-1'>Project</p>
                    </div>
                </div>
                <div className='container-xxl py-5 bg-white' >
                    <div className='container px-lg-5' data-aos="fade-up" data-aos-duration="2000">
                        <div className='relative text-center font-bold'>
                            <div className='flex justify-center'>
                                <CgPathTrim size={35} className='text-blue-500 pb-3 pt-1'/>
                            <h1>Our Project</h1>
                            </div>
                            <h1 className='text-2xl'>Recently Launched Projects</h1>
                        </div>
                        <div className="m-16">
                        <ul className='flex justify-center'>
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
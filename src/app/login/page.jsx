import React from 'react'
import { GiThreeLeaves } from 'react-icons/gi';
import { FaUnlockKeyhole } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";


const login = () => {
    return (
        <div>
        <div className='log_in h-screen flex justify-center text-center items-center font-serif '>
            <div className='circle lg:border-8 border-4 border-gray-600  bg-black opacity-70 rounded-full lg:p-20 md:p-10 p-5'>
                <div className='flex justify-center lg:text-3xl md:text-2xl text-xl text-white font-bold md:m-0'>Log < GiThreeLeaves className='text-blue-500 ml-1 mr-1' /> In</div>
                <label className='m-2'>
                    <div className='flex text-white p-1 font-3 md:text-[17px] text-[14px]'>
                        Username: <IoPerson className='mt-1 ml-2' />
                    </div>
                    <input type="text" name="firstName" placeholder="Enter username or email.." className='bg-transparent border-2 rounded-md h-10 md:w-80 w-50 px-4 text-white' />
                </label>
                <br />
                <label className='m-2'>
                    <div className='flex text-white p-1 md:text-[17px] text-[14px]'>
                        Password: <FaUnlockKeyhole className='mt-1 ml-2' />
                    </div>
                    <input type="text" name="password" placeholder="Enter password here..." className='bg-transparent border-2 rounded-md h-10 md:w-80 w-50 px-4 text-white' />
                </label>
                <br />
                <div className=' flex justify-between'>
                    <div>
                        <input type="checkbox" name="" id="html"  className='md:m-1' />
                        <label className='text-white md:text-[15px] text-[12px] md:m-1'>REMEMBER</label>
                    </div>
                    <a href="#" className='text-white md:text-[15px] text-[12px]'>FORGET PASSWORDS</a>
                </div>
                <button className="border border-none bg-blue-600 hover:bg-white rounded-md w-16 h-8 m-5"><a href="#" className='text-white hover:text-black '>Login</a></button>
            </div>
        </div >
        </div>
    )
}

export default login

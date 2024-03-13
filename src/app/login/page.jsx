import React from 'react'
import { GiThreeLeaves } from 'react-icons/gi';
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';


const login = () => {
    return (
        <div>
        <div className='log_in flex justify-center text-center items-center font-serif '>
            <div className='circle lg:border-8 border-4 bg-blue-200 opacity-80 rounded-full lg:p-20 md:p-10 p-5'>
                <div className='flex justify-center lg:text-3xl md:text-2xl text-xl font-bold md:m-0'>Log < GiThreeLeaves className='text-blue-700 ml-1 mr-1' /> In</div>
                <label className='m-2'>
                    <div className='flex p-1 font-3 md:text-[17px] text-[14px]'>
                        Email: <MdEmail className='mt-1 ml-2' />
                    </div>
                    <input type="text" name="firstName" placeholder="Enter your email.." className=' rounded-md py-1.5 w-full placeholder:p-1 p-4 bg-white' />
                </label>
                <br />
                <label className='m-2'>
                    <div className='flex p-1 md:text-[17px] text-[14px]'>
                        Password: <FaUnlockKeyhole className='mt-1 ml-2' />
                    </div>
                    <input type="password" name="password" placeholder="Enter your password..." className=' rounded-md py-1.5 w-full bg-white placeholder:p-1 p-4' />
                </label>
                <br />
                <div className=' flex justify-between mt-2'>
                    <div>
                        <input type="checkbox" name="remember" id="remember"  className='md:m-1' />
                        <label htmlFor='remember' className='md:text-[15px] text-[12px] md:m-1' >REMEMBER</label>
                    </div>
                    <a href="#" className=' md:text-[15px] text-[12px]'>FORGET PASSWORDS</a>
                </div>
                <button className="rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-indigo-500 mt-4 font-semibold text-sm md:text-md"><a href="#" className='text-white hover:text-black '>Login</a></button>
                <p>Don't have an account? <Link href={"/register"} className='text-blue-500 font-semibold text-sm md:text-md'>Register</Link></p>
            </div>
        </div >
        </div>
    )
}

export default login

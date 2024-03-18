'use client'
import React, { useState } from 'react'
import { GiThreeLeaves } from 'react-icons/gi';
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authenticate, userLogin } from '@/api/userApi';

const login = () => {
    const [formData, setFormData] = useState({})

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)


    let router = useRouter()

    let { email, password } = formData

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        // console.log(formData)
        event.preventDefault()

        if (email == null || password == null) {
            setError("Please enter all required fields")
        }
        else {
            userLogin(formData)
                .then(data => {
                    if (data.error) {
                        setSuccess(false)
                        console.log(data.error)
                        setError(data.error)
                    }
                    else {
                        setError('')
                        setSuccess(true)
                        console.log(data)
                        setFormData({
                            email: "",
                            password: ""
                        })
                        authenticate(data)
                    }
                })
                .catch(error => console.log(error))

        }

    }


    const showError = () => {
        if (error) {
            return <div>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return router.push('/admin')
            // <div>user Login.</div>
        }
    }

    return (
        <div>
            {showError()}
            {showSuccess()}
            <div className='log_in flex justify-center text-center items-center font-serif '>
                <div className='circle lg:border-8 border-4 bg-blue-200 opacity-80 rounded-full lg:p-20 md:p-10 p-5' >
                    <div className='flex justify-center lg:text-3xl md:text-2xl text-xl font-bold md:m-0'>Log < GiThreeLeaves className='text-blue-700 ml-1 mr-1' /> In</div>
                    <label htmlFor="email" className='m-2'>
                        <div className='flex p-1 font-3 md:text-[17px] text-[14px]'>
                            Email: <MdEmail className='mt-1 ml-2' />
                        </div>
                        <input type="text" name="email" id="email" placeholder="Enter your email.." onChange={handleChange} className=' rounded-md py-1.5 w-full placeholder:p-1 p-4 bg-white' required />
                    </label>
                    <br />
                    <label htmlFor="password" className='m-2'>
                        <div className='flex p-1 md:text-[17px] text-[14px]'>
                            Password: <FaUnlockKeyhole className='mt-1 ml-2' />
                        </div>
                        <input type="password" name="password" id="password" placeholder="Enter your password..." onChange={handleChange} className=' rounded-md py-1.5 w-full bg-white placeholder:p-1 p-4' required />
                    </label>
                    <br />
                    <div className=' flex justify-between mt-2'>
                        <div>
                            <input type="checkbox" name="remember" onChange={handleChange} id="remember" className='md:m-1' />
                            <label htmlFor='remember' className='md:text-[15px] text-[12px] md:m-1' >REMEMBER</label>
                        </div>
                        <a href="#" className=' md:text-[15px] text-[12px]'>FORGET PASSWORDS</a>
                    </div>
                    <button onClick={handleSubmit} className="rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-indigo-500 mt-4 font-semibold text-sm md:text-md"><a href="#" className='text-white hover:text-black '>Login</a></button>
                    <p>Don't have an account? <Link href={"/register"} className='text-blue-500 font-semibold text-sm md:text-md'>Register</Link></p>
                </div>
            </div >
        </div>
    )
}

export default login

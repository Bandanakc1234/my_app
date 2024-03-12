import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className='log_in h-full '>
                <form action="" className='m-50'>
                    <div className='pb-8 bg-blue-200 ml-20'>
                    <h1 className='text-base text-center leading-10'>Register Here</h1>

                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ml-20'>

                        <div className='sm:col-span-4'>
                            <label htmlFor="firstname" className='block text-sm font-medium leading-6'>Firstname:</label>
                            <div className='mt-2'>
                                <input type="text" id='firstname' className='block w-full rounded-md border-0 py-1.5 sm:text-lg sm:leading-6' name="firstname" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="lastname" className='block text-sm font-medium leading-6'>Lastname:</label>
                            <div className='mt-2'>
                                <input type="text" id='lastname' className='block w-full rounded-md border-0 py-1.5 sm:text-lg sm:leading-6' name="lastname" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="username" className='block text-sm font-medium leading-6'>Username:</label>
                            <div className='mt-2'>
                                <input type="text" id='username' className='block w-full rounded-md border-0 py-1.5 sm:text-lg sm:leading-6' name="username" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="email" className='block text-sm font-medium leading-6'>Email:</label>
                            <div className='mt-2'>
                                <input type="email" id='email' className='block w-full rounded-md border-0 py-1.5 sm:text-lg sm:leading-6' name="email" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="password" className='block text-sm font-medium leading-6'>Password:</label>
                            <div className='mt-2'>
                                <input type="password" id='password' className='block w-full rounded-md border-0 py-1.5 sm:text-lg sm:leading-6' name="password" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="conformpassword" className='block text-sm font-medium leading-6'>Conform Password:</label>
                            <div className='mt-2'>
                                <input type="password" id='conformpassword' className='block w-full rounded-md border-0 py-1.5 sm:text-lg sm:leading-6' name="conformpassword" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="gender" className='block text-sm font-medium leading-6'>Gender:</label>
                            <span className="flex flex-row rounded-md border-0 py-1.5 sm:text-lg sm:leading-6 bg-white text-black">
                                <input type="radio" name="gender" id="male" className='ml-2' />
                                <label htmlFor="male" className="">male</label>
                                <input type="radio" name="gender" id="female" />
                                <label htmlFor="female" className="">female</label>
                                <input type="radio" name="gender" id="others" />
                                <label htmlFor="others" className="">other</label>
                            </span>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="age" className=''>Age:</label>
                            <div className='mt-2'>
                                <input type="number" id='age' className='border-2 border-black rounded-md mb-4' name="age" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="phonenumber" className=''>Phone Number:</label>
                            <div className='mt-2'>
                                <input type="tel" id='phonenumber' className=' border-2 border-black rounded-md mb-4' name="phonenumber" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="tempAddress" className=''>Temporary Address:</label>
                            <div className='mt-2'>
                                <input type="text" id='tempAddress' className=' border-2 border-black rounded-md mb-4' name="tempAddress" />
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label htmlFor="permanentAddress" className=''>Permanent Address:</label>
                            <div className='mt-2'>
                                <input type="text" id='permanentAddress' className=' border-2 border-black rounded-md' name="permanentAddress" />
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='text-center pb-10'>
                    <button className='border-2 bg-blue-600 rounded-md p-1'>Register</button>
                    <p>Already have an Account? <Link href={"/login"} className='text-blue-500 '>Login</Link></p>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Register
import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className='register flex justify-center'>
                <form action="" className=' bg-blue-200 my-10 opacity-80'>
                    <div className=' pb-8 mt-5'>
                    <h1 className='text-2xl text-center'>Register Here</h1>

                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-20 place-items-center'>

                        <div className='sm:col-span-3'>
                            <label htmlFor="firstname" className='block text-md font-medium'>Firstname:</label>
                            <div className='mt-2'>
                                <input type="text" id='firstname' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="firstname" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="lastname" className='block text-md font-medium'>Lastname:</label>
                            <div className='mt-2'>
                                <input type="text" id='lastname' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="lastname" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="username" className='block text-md font-medium'>Username:</label>
                            <div className='mt-2'>
                                <input type="text" id='username' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="username" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="email" className='block text-md font-medium'>Email:</label>
                            <div className='mt-2'>
                                <input type="email" id='email' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="email" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="password" className='block text-md font-medium'>Password:</label>
                            <div className='mt-2'>
                                <input type="password" id='password' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="password" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="conformpassword" className='block text-md font-medium'>Conform Password:</label>
                            <div className='mt-2'>
                                <input type="password" id='conformpassword' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="conformpassword" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="age" className='block text-md font-medium'>Age:</label>
                            <div className='mt-2'>
                                <input type="number" id='age' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="age" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="phonenumber" className='block text-md font-medium'>Phone Number:</label>
                            <div className='mt-2'>
                                <input type="tel" id='phonenumber' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="phonenumber" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="tempAddress" className='block text-md font-medium'>Temporary Address:</label>
                            <div className='mt-2'>
                                <input type="text" id='tempAddress' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="tempAddress" />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor="permanentAddress" className='block text-md font-medium'>Permanent Address:</label>
                            <div className='mt-2'>
                                <input type="text" id='permanentAddress' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="permanentAddress" />
                            </div>
                        </div>

                        <div className='sm:col-span-4 md:ms-2 ms-24'>
                            <label htmlFor="gender" className='block text-md font-medium'>Gender:</label>
                            <span className="flex rounded-md py-1.5 md:px-14 px-5 text-sm md:text-lg mt-2 bg-white text-black">
                                <div className='flex flex-row'>
                                <input type="radio" name="gender" id="male" className='mr-2' />
                                <label htmlFor="male" className="mr-2">male</label>
                                </div>
                                <div className='flex flex-row'>
                                <input type="radio" name="gender" id="female" className='mr-2'/>
                                <label htmlFor="female" className="mr-2">female</label>
                                </div>
                                <div className='flex flex-row'>
                                <input type="radio" name="gender" id="others" className='mr-2'/>
                                <label htmlFor="others" className="mr-2">other</label>
                                </div>
                            </span>
                        </div>
                    </div>
                    </div>

                    <div className='text-center pb-10 text-md font-semibold'>
                    <button className='rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-indigo-500'>Register</button>
                    <p>Already have an Account? <Link href={"/login"} className='text-blue-500 '>Login</Link></p>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Register
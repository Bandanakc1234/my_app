import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className='flex justify-center bg-blue-200'  >
                <form action="" className={`mt-10 p-10 mb-9 bg-blue-300 text-center`}>
                    <h1 className='mb-7 text-center text-xl'>Register Here</h1>
                    <div>
                        <div>
                            <label htmlFor="firstname" className='mb-3'>Firstname:</label>
                            <div>
                                <input type="text" id='firstname' className=' border-2 border-black rounded-md mb-2 ml-3 px-14' name="firstname" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastname" className='mb-3'>Lastname:</label>
                            <div>
                                <input type="text" id='lastname' className=' border-2 border-black rounded-md mb-2 ml-3' name="lastname" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="username" className='mb-3'>Username:</label>
                            <div>
                                <input type="text" id='username' className=' border-2 border-black rounded-md mb-2 ml-3' name="username" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className='mb-3'>Email:</label>
                            <div>
                                <input type="email" id='email' className=' border-2 border-black rounded-md mb-2 ml-3' name="email" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className='mb-3'>Password:</label>
                            <div>
                                <input type="password" id='password' className=' border-2 border-black rounded-md mb-2 ml-3' name="password" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="conformpassword" className='mb-3'>Conform Password:</label>
                            <div>
                                <input type="password" id='conformpassword' className=' border-2 border-black rounded-md mb-2 ml-3' name="conformpassword" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="gender" className='mb-3'>Gender:</label>
                            <span class="flex flex-row border-2 border-black rounded-md mb-2 ml-3 justify-evenly bg-white">
                                <input type="radio" name="gender" id="male" />
                                <label for="male" class="custom-label">male</label>
                                <input type="radio" name="gender" id="female" />
                                <label for="female" class="custom-label">female</label>
                                <input type="radio" name="gender" id="others" />
                                <label for="others" class="custom-label">other</label>
                            </span>
                        </div>

                        <div>
                            <label htmlFor="age" className='mb-3'>Age:</label>
                            <div>
                                <input type="number" id='age' className=' border-2 border-black rounded-md mb-2 ml-3' name="age" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phonenumber" className='mb-3'>Phone Number:</label>
                            <div>
                                <input type="tel" id='phonenumber' className=' border-2 border-black rounded-md mb-2 ml-3' name="phonenumber" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tempAddress" className='mb-3'>Temporary Address:</label>
                            <div>
                                <input type="text" id='tempAddress' className=' border-2 border-black rounded-md mb-2 ml-3' name="tempAddress" />
                            </div>
                        </div>

                        <div>
                        <label htmlFor="permanentAddress" className='mb-3'>Permanent Address:</label>
                        <div>
                        <input type="text" id='permanentAddress' className=' border-2 border-black rounded-md mb-2 ml-3' name="permanentAddress" />
                        </div>
                        </div>
                    </div>
                    {/* <div className='flex flex-row'>
                        <div className='flex flex-col text-left mr-24'>
                        </div>
                        <div className='flex flex-col justify-between text-black  text-center '>
                           
                        </div>
                    </div> */}
                    <button className='border-2 bg-blue-600 rounded-md p-1 mt-4'>Register</button>
                    <p>Already have an Account? <Link href={"/login"} className='text-blue-500'>Login</Link></p>
                </form>
            </div>

        </>
    )
}

export default Register
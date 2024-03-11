import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className=' bg-blue-200'  >
                <form action="" className={`max-w-md mx-auto bg-blue-300 text-center`}>
                    <h1 className='mb-7 text-center text-xl'>Register Here</h1>
                    <div className='mb-5'>
                        <div>
                            <label htmlFor="firstname" className=''>Firstname:</label>
                            <div>
                            <input type="text" id='firstname' className=' border-2 border-black rounded-md mb-2 ml-3 px-14' name="firstname" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastname" className=''>Lastname:</label>
                            <div>
                                <input type="text" id='lastname' className=' border-2 border-black rounded-md mb-2 ml-3' name="lastname" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="username" className=''>Username:</label>
                            <div>
                                <input type="text" id='username' className=' border-2 border-black rounded-md mb-2 ml-3' name="username" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className=''>Email:</label>
                            <div>
                            <input type="email" id='email' className=' border-2 border-black rounded-md mb-2 ml-3' name="email" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className=''>Password:</label>
                            <div>
                                <input type="password" id='password' className=' border-2 border-black rounded-md mb-2 ml-3' name="password" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="conformpassword" className=''>Conform Password:</label>
                            <div>
                                <input type="password" id='conformpassword' className=' border-2 border-black rounded-md mb-2 ml-3' name="conformpassword" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="gender" className=''>Gender:</label>
                            <span className="flex flex-row border-2 border-black rounded-md mb-2 ml-3 justify-evenly bg-white">
                                <input type="radio" name="gender" id="male" />
                                <label for="male" className="custom-label">male</label>
                                <input type="radio" name="gender" id="female" />
                                <label for="female" className="custom-label">female</label>
                                <input type="radio" name="gender" id="others" />
                                <label for="others" className="custom-label">other</label>
                            </span>
                        </div>

                        <div>
                            <label htmlFor="age" className=''>Age:</label>
                            <div>
                                <input type="number" id='age' className=' border-2 border-black rounded-md mb-2 ml-3' name="age" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phonenumber" className=''>Phone Number:</label>
                            <div>
                                <input type="tel" id='phonenumber' className=' border-2 border-black rounded-md mb-2 ml-3' name="phonenumber" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tempAddress" className=''>Temporary Address:</label>
                            <div>
                                <input type="text" id='tempAddress' className=' border-2 border-black rounded-md mb-2 ml-3' name="tempAddress" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="permanentAddress" className=''>Permanent Address:</label>
                            <div>
                                <input type="text" id='permanentAddress' className=' border-2 border-black rounded-md mb-2 ml-3' name="permanentAddress" />
                            </div>
                        </div>
                    </div>
                    <button className='border-2 bg-blue-600 rounded-md p-1 mt-4'>Register</button>
                    <p>Already have an Account? <Link href={"/login"} className='text-blue-500'>Login</Link></p>
                </form>
            </div>

        </>
    )
}

export default Register
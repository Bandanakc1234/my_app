import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className='w-full' >
                <form action="" className='border-2 p-9 bg-blue-500 text-white text-center'>
                    <h1 className='mb-7 text-center text-xl'>Register Here</h1>
                    <div className='flex flex-row'>
                        <div className='flex flex-col text-left'>
                            <label htmlFor="firstname" className='mb-3'>Firstname :</label>
                            <label htmlFor="lastname" className='mb-3'>Lastname :</label>
                            <label htmlFor="username" className='mb-3'>Username :</label>
                            <label htmlFor="email" className='mb-3'>Email :</label>
                            <label htmlFor="password" className='mb-3'>Password :</label>
                            <label htmlFor="conformpassword" className='mb-3'>Conform Password :</label>
                            <label htmlFor="gender" className='mb-3'>Gender :</label>
                            <label htmlFor="age" className='mb-3'>Age :</label>
                            <label htmlFor="phonenumber" className='mb-3'>Phone Number :</label>
                            <label htmlFor="tempAddress" className='mb-3'>Temporary Address :</label>
                            <label htmlFor="permanentAddress" className='mb-3'>Permanent Address :</label>
                        </div>
                        <div className='flex flex-col justify-between text-black'>
                            <input type="text" id='firstname' className=' border-2 border-black rounded-md mb-2 ml-3 px-10' name="firstname" />
                            <input type="text" id='lastname' className=' border-2 border-black rounded-md mb-2 ml-3' name="lastname" />
                            <input type="text" id='username' className=' border-2 border-black rounded-md mb-2 ml-3' name="username" />
                            <input type="email" id='email' className=' border-2 border-black rounded-md mb-2 ml-3' name="email" />
                            <input type="password" id='password' className=' border-2 border-black rounded-md mb-2 ml-3' name="password" />
                            <input type="password" id='conformpassword' className=' border-2 border-black rounded-md mb-2 ml-3' name="conformpassword" />
                            <span class="flex flex-row border-2 border-black rounded-md mb-2 ml-3 justify-evenly bg-white">
                                <input type="radio" name="gender" id="male" />
                                <label for="male" class="custom-label">male</label>
                                <input type="radio" name="gender" id="female" />
                                <label for="female" class="custom-label">female</label>
                                <input type="radio" name="gender" id="others" />
                                <label for="others" class="custom-label">other</label>
                            </span>
                            <input type="number" id='age' className=' border-2 border-black rounded-md mb-2 ml-3' name="age" />
                            <input type="tel" id='phonenumber' className=' border-2 border-black rounded-md mb-2 ml-3' name="phonenumber" />
                            <input type="text" id='tempAddress' className=' border-2 border-black rounded-md mb-2 ml-3' name="tempAddress" />
                            <input type="text" id='permanentAddress' className=' border-2 border-black rounded-md mb-2 ml-3' name="permanentAddress" />
                        </div>
                    </div>
                    <button className='border-2 bg-blue-600 rounded-md p-1 mt-4'>Register</button>
                    <p>Already have an Account? <Link href={"/login"} className='text-blue-900'>Login</Link></p>
                </form>
            </div>

        </>
    )
}

export default Register
import React from 'react'

const ForgetPassword = () => {
  return (
   <div className='forget_password flex justify-center text-center items-center'>
    <form action="" className='lg:border-8 border-4 bg-blue-200 opacity-80 rounded-full lg:p-15 md:p-10 p-5'>
        <label htmlFor="email" className='p-1 font-3 md:text-[17px] text-[14px]'>Email:</label>
        <input type="email" id='email' name='email' className=' rounded-md py-1.5 w-full p-4 bg-white'/>
        <button className='btn btn-bg-danger '>Forget Password</button>
    </form>
   </div>
  )
}

export default ForgetPassword
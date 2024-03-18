import React from 'react'

const ForgetPassword = () => {
  return (
    <div className='forget_password'>
        <form action="" className=''>
            <label htmlFor='email'>Email</label>
            <input type="text" id='email' className='form-control'/>
            <button className='btn btn-warning w-100 mt-3'>Forget Password</button>
        </form>
    </div>
  )
}

export default ForgetPassword
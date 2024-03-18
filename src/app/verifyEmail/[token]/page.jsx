'use client'
import { emailConfirmation } from '@/api/userApi'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyEmail = () => {
  //get token from url
  let params = useParams()
  let {token} = params

  useEffect(() =>{
    emailConfirmation(token)
    .then(data =>{
      if (data.error){
        toast.error(data.error, {autoClose: 2000})
      }
      else {
        toast.success(data.msg)
      }
    })
  }, [])

  
  return (
    <>
    <ToastContainer/>
    </>
  )
}

export default VerifyEmail
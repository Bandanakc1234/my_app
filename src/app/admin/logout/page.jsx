"use client"
import { userlogout } from '@/api/userApi'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Logout = () => {

    let router = useRouter()

    const handleLogout = () =>{
        userlogout()
        .then(()=>{
            router.push('/login')
        })
    }

    useEffect(() => {
        handleLogout();
      }, []);
      
  return null;
}

export default Logout
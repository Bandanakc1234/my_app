'use client'
// import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='sticky w-full py-4 top-0 bg-black z-20 text-gray-300 pt-3 pl-4'>
        <div className='flex gap-4 text-xl uppercase font-sans items-center'>
        <button className='p-1  rounded-lg' onClick={handleMenuToggle}>
        <AiOutlineMenu size={28}  />
        </button>
        <Image alt='' src='/logo.png' width={35} height={35}/>
        <span>Admin</span>
      </div>
    </nav>
  )
}

export default Navbar
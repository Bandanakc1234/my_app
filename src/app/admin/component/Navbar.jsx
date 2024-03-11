'use client'
// import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './Sidebar'


const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
    <nav className='fixed bg-black text-gray-300 w-full h-16 shadow-2xl pt-3 pl-4 z-10'>
        <div className='flex gap-4 text-xl uppercase font-sans items-center'>
        <button className='p-1  rounded-lg' onClick={handleMenuToggle}>
        <AiOutlineMenu size={28}  />
        </button>
        <Image alt='' src='/logo.png' width={35} height={35}/>
        <span>Admin</span>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
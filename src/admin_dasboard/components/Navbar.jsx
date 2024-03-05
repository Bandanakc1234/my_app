'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Sidebar from './Sidebar'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to manage menu open/close

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };
  return (
    <div>
    <nav className='fixed bg-black text-gray-300 w-full h-16 shadow-2xl pt-3 pl-4'>
        <div className='sidebar_top flex gap-4 text-xl uppercase font-sans items-center'>
        <Image alt='' src='/logo.png' width={35} height={35} />
        <span>Admin</span>
        <button className='p-1 ml-auto rounded-lg' onClick={handleMenuToggle}>
          {isMenuOpen ? <AiOutlineMenu size={32} /> : <AiOutlineMenu size={32} />}
        </button>
      </div>
    </nav>
    {isMenuOpen && (
        <div >
          <Sidebar/>
        </div>
      )}
    </div>
  )
}

export default Navbar
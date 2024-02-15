'use client';
import React from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai'
import { IoIosMail, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

import { useState } from 'react';
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return (
            <nav className="sticky w-full py-6 top-0 shadow-md bg-blue-100 z-10"  >
                <div className='flex justify-between items-center h-full w-full px-4 2xl:px:16'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Index It Hub</h1>
                        {/* <Link>
                    <Image src={Logo} alt='Logo' width={205} height={75} className='cursor-pointer' priority/>
                    <a href="#!">Index It Hub</a>
                    </Link> */}
                    </div>
                    <div className='hidden md:flex '>
                        <ul className='hidden md:flex'>
                            <Link href={'/'}>
                                <li className={`ml-10 font-bold text-xl ${pathname === '/' ? 'text-blue-500' : 'hover:text-blue-500'}`}>Home</li>
                            </Link>
                            <Link href={'/about'}>
                                <li className={`ml-10 font-bold text-xl ${pathname === '/about' ? 'text-blue-500' : 'hover:text-blue-500'}`}>About</li>
                            </Link>
                            <Link href={'/service'}>
                                <li className={`ml-10 font-bold text-xl ${pathname === '/service' ? 'text-blue-500' : 'hover:text-blue-500'}`}>Service</li>
                            </Link>
                            <Link href={'/project'}>
                                <li className={`ml-10 font-bold text-xl ${pathname === '/project' ? 'text-blue-500' : 'hover:text-blue-500'}`}>Project</li>
                            </Link>
                            <Link href={'/career'}>
                                <li className={`ml-10 font-bold text-xl ${pathname === '/career' ? 'text-blue-500' : 'hover:text-blue-500'}`}>Career</li>
                            </Link>
                            <Link href={'/contact'}>
                                <li className={`ml-10 font-bold text-xl ${pathname === '/contact' ? 'text-blue-500' : 'hover:text-blue-500'}`}>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className={
                    menuOpen ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-blue-500 p-10 ease-in duration-100"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
                }>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='flex-col py-4'>
                        <ul>
                            <Link href={'/'}>
                                <li className={`py-4 cursor-pointer font-bold ${pathname === '/' ? 'text-white' : 'hover:text-white'}`}>Home</li>
                            </Link>
                            <Link href={'/about'}>
                                <li className={`py-4 cursor-pointer font-bold ${pathname === '/about' ? 'text-white' : 'hover:text-white'}`}>About</li>
                            </Link>
                            <Link href={'/service'}>
                                <li className={`py-4 cursor-pointer font-bold ${pathname === '/service' ? 'text-white' : 'hover:text-white'}`}>Services</li>
                            </Link>
                            <Link href={'/project'}>
                                <li className={`py-4 cursor-pointer font-bold ${pathname === '/project' ? 'text-white' : 'hover:text-white'}`}>Project</li>
                            </Link>
                            <Link href={'/career'}>
                                <li className={`py-4 cursor-pointer font-bold ${pathname === '/career' ? 'text-white' : 'hover:text-white'}`}>Career</li>
                            </Link>
                            <Link href={'/contact'}>
                                <li className={`py-4 cursor-pointer font-bold ${pathname === '/contact' ? 'text-white' : 'hover:text-white'}`}>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='flex flex-row, justify-around pt-7 item-center'>
                        <IoLogoInstagram size={50} className='cursor-pointer hover:text-white' />
                        <IoLogoFacebook size={50} className='cursor-pointer hover:text-white' />
                        <IoLogoTwitter size={50} className='cursor-pointer hover:text-white' />
                        <IoIosMail  size={50} className='cursor-pointer hover:text-white ' />
                        <IoLogoLinkedin size={50} className='cursor-pointer hover:text-white' />
                    </div>
                </div>
            </nav>
    );
}

export default Navbar
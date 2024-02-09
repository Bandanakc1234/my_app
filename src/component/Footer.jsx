import React from 'react'
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import { IoIosMail, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";



const Footer = () => {
  return (
    <footer className='bg-blue-200 md:px-16  px-6' >
      <div className='bg-gray-800 text-gray-200'>
        <div className='max-w-7xl mx-auto p-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <div className=' p-4' >
              <h1 className='uppercase mb-3 text-xl'>Index it hub</h1>
              <p>Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className=' p-4'>
              <h1 className='uppercase mb-3 text-xl'>Quick link</h1>
              <ul >
                <li className='flex pb-2 hover:text-blue-500'>
                  <FaChevronRight size={15} className='m-1' />
                  <a href="/about" className='ml-1'>About</a>

                </li>
                <li className='flex pb-2 hover:text-blue-500'>
                  <FaChevronRight size={15} className='m-1' />
                  <a href="/contact" className='ml-1'>Contact</a>
                </li>
                <li className='flex pb-2 hover:text-blue-500'>
                  <FaChevronRight size={15} className='m-1' />
                  <a href="/career" className='ml-1'>Career</a>
                </li>
              </ul>
            </div>
            <div className=' p-3'>
              <h1 className='uppercase mb-3 text-xl'>Contact</h1>
              <ul className='flex flex-col'>
                <li className='flex pb-2'>
                  <FaMapMarkerAlt size={15} className='m-1' />
                  <span className='ml-1'>Kathmandu, Nepal</span>
                </li>
                <li className='flex pb-2'>
                  <IoIosMail size={17} className='m-1' />
                  <span className='ml-1'>info@indexithub.com</span>
                </li>
                <li className='flex pb-2'>
                  <FaPhoneAlt size={15} className='m-1' />
                  <span className='ml-1'>977-9860113289</span>
                </li>
              </ul>
            </div>
            <div className=' p-2'>
              <h1 className='mb-3 text-xl'>Subscribe to our newsletter</h1>
              <p className='mb-2'>Monthly digest of what's new and exciting from us.</p>
              <form className='flex flex-row flex-wrap'>
                <input type="text" placeholder='Email address' className='text-black w-2/3 text-center mr-1' />
                <button className='p-1 rounded-md bg-blue-500 hover:bg-blue-700'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex flex-col border-t p-0'>
          <ul className='flex justify-end space-x-2 m-4'>
            <li className='hover:text-blue-500'>
              <IoLogoInstagram size={30} />
            </li>
            <li className='hover:text-blue-500'>
              <IoLogoFacebook size={30} />
            </li>
            <li className='hover:text-blue-500'>
              <IoLogoTwitter size={30} />
            </li>
            <li className='hover:text-blue-500'>
              <IoLogoLinkedin size={30} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
'use client'
import { userDetail } from '@/api/userApi'
import { API } from '@/config'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [activeSection, setActiveSection] = useState('overview')
    const [user, setUser] = useState({})
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ""

    let { id } = useParams()

    useEffect(() => {
        userDetail(id, token)
            .then(data => {
                setUser(data)
            })
    }, [])

    if (!user) {
        return <div>Loading user</div>
    }

    const handleSectionChange = (section) => {
        setActiveSection(section)
    }

    let sectionContent = null;

    switch (activeSection) {
        case 'overview':
            sectionContent = (
                <>
                    <div className='mt-6 ' >
                        <h1 className='font-bold'>General Information</h1>
                        <div className='lg:columns-3 mt-5 md:columns-2 columns-1 font-light mx-16'>
                            <div className='mb-5'>Full Name:
                                <h1 className='capitalize font-bold'>{user.firstname} {user.lastname}</h1>
                            </div>
                            <div className='mb-5'>Username:
                                <h1 className='capitalize font-bold'>{user.username}</h1>
                            </div>
                            <h1 className='mb-5'>Position:
                                <h1 className='capitalize font-bold'>{user.position}</h1>
                            </h1>
                            <div className='mb-5'>Age:
                                <h1 className='font-bold'>{user.age}</h1>
                            </div>
                            <div className='mb-5'>Gender:
                                <h1 className='capitalize font-bold'>{user.gender}</h1>
                            </div>
                            <div className='mb-5'>Mobile:
                                <h1 className='font-bold'>{user.phonenumber}</h1>
                            </div>
                            <div className='mb-5'>Email:
                                <h1 className='font-bold'>{user.email}</h1>
                            </div>
                            <div className='mb-5'>Temporary Address:
                                <h1 className='capitalize font-bold'>{user.address?.tempAddress}</h1>
                            </div>
                            <div className='mb-5'>Permanent Address:
                                <h1 className='capitalize font-bold'>{user.address?.permanentAddress}</h1>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        case 'editprofile':
            sectionContent = (
                <>
                <div className='mt-6'>
                <form action="" className=' rounded-3xl'>
                    <div className=' pb-5 mt-5'>
                        <h1 className='font-bold'>Update Profile</h1>

                        <div className='mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-6 mx-16 place-items-start'>

                            <div className='sm:col-span-3'>
                                <label htmlFor="firstname" className='block text-md font-medium'>Firstname:</label>
                                <div className='mt-2'>
                                    <input type="text" id='firstname' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="first_name" />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="lastname" className='block text-md font-medium'>Lastname:</label>
                                <div className='mt-2'>
                                    <input type="text" id='lastname' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="last_name"/>
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="username" className='block text-md font-medium'>Username:</label>
                                <div className='mt-2'>
                                    <input type="text" id='username' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="username" />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="email" className='block text-md font-medium'>Email:</label>
                                <div className='mt-2'>
                                    <input type="email" id='email' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="email" />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="password" className='block text-md font-medium'>Password:</label>
                                <div className='mt-2'>
                                    <input type="password" id='password' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="password" />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="confirmpassword" className='block text-md font-medium'>Confirm Password:</label>
                                <div className='mt-2'>
                                    <input type="password" id='confirmpassword'className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="confirm_password" />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="age" className='block text-md font-medium'>Age:</label>
                                <div className='mt-2'>
                                    <input type="number" id='age' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="age"/>
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="phonenumber" className='block text-md font-medium'>Phone Number:</label>
                                <div className='mt-2'>
                                    <input type="tel" id='phonenumber' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="phone_number" />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="tempAddress" className='block text-md font-medium'>Temporary Address:</label>
                                <div className='mt-2'>
                                    <input type="text" id='tempAddress' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="temporary_address"  />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label htmlFor="permanentAddress" className='block text-md font-medium'>Permanent Address:</label>
                                <div className='mt-2'>
                                    <input type="text" id='permanentAddress' className='block w-full rounded-md border-0 py-1.5 sm:text-md' name="permanent_address" />
                                </div>
                            </div>

                            <div className='sm:col-span-4'>
                                <label htmlFor="gender" className='block text-md font-medium'>Gender:</label>
                                <span className="flex flex-col md:flex-row rounded-md py-1.5 md:px-12 px-4 text-sm md:text-lg mt-2 bg-white text-black">
                                    <div className='flex flex-row'>
                                        <input type="radio" name="gender" id="male" value='male' className='mr-2' />
                                        <label htmlFor="male" className="mr-3">male</label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <input type="radio" name="gender" id="female" value='female' className='mr-2' />
                                        <label htmlFor="female" className="mr-3">female</label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <input type="radio" name="gender" id="others" value='others' className='mr-2' />
                                        <label htmlFor="others" className="mr-2">other</label>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='text-center pb-5 text-md font-semibold'>
                        <button className='rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-500'>Save Change</button>
                    </div>
                </form>
                </div>
                </>
            )
            break;
        case 'changepassword':
            sectionContent = (
                <>
                    <div className='mt-6'>
                        <h1 className='font-bold'>Change Password</h1>
                        <div>
                            <form action="" className='row-span-3 mb-5 mx-0 lg:mx-16'>
                                <div className='mt-6'>
                                    <label htmlFor="password" className='block mb-2 text-sm lg:text-lg font-medium text-gray-900'>Old Password:</label>
                                    <input type="password" id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded-lg block w-full p-1.5' name="password" />
                                </div>
                                <div className='mt-6'>
                                    <label htmlFor="password" className='block mb-2 text-sm lg:text-lg font-medium text-gray-900'>New Password:</label>
                                    <input type="password" id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded-lg block w-full p-1.5' name="password" />
                                </div>
                                <div className='mt-6'>
                                    <label htmlFor="confirmpassword" className='block mb-2 text-sm lg:text-lg font-medium text-gray-900'>Confirm New Password:</label>
                                    <input type="password" id='confirmpassword' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded-lg block w-full p-1.5' name="confirm_password" />
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )
            break;
        default:
            sectionContent = null;
    }

    return (
        <>
            <div className='ms-8'>
                <div className='bg-gray-200 p-2 rounded-lg'>
                    <div className='flex-wrap text-xs lg:text-lg lg:columns-2 ml-3 columns-1'>
                        <h1>Profile</h1>
                        <ol className='flex lg:ml-80 ml-0'>
                            <li>
                                <Link href={'#'}>Dashboard</Link>
                            </li>
                            <li className='mr-2 ml-2'>/</li>
                            <li>User Profile</li>
                        </ol>
                    </div>
                </div>

                <div className='flex mt-5 '>
                    <div className='mb-2 '>
                        <div className='text-center p-5 bg-gray-200 rounded-lg'>
                            <img src={`${API}/${user.image}`} alt={user.image} className='h-56 rounded-md' />
                            <h1 className='mb-1 mt-2 capitalize'>{user.firstname} {user.lastname}</h1>
                            <h1 className='capitalize'>{user.position}</h1>
                        </div>
                    </div>
                    <div className='bg-gray-200 ms-5 p-5 rounded-xl lg:w-9/12 text-sm md:text-md lg:text-lg'>
                        <div className='columns-1 lg:columns-3 border-b border-dashed border-b-gray-700 pb-2'>
                            <h1 className='hover:text-blue-600 hover:underline hover:underline-offset-2' onClick={() => handleSectionChange('overview')}>Overview</h1>
                            <h1 className='hover:text-blue-600 hover:underline hover:underline-offset-2' onClick={() => handleSectionChange('editprofile')}>Edit Profile</h1>
                            <h1 className='hover:text-blue-600 hover:underline hover:underline-offset-2' onClick={() => handleSectionChange('changepassword')}>Change Password</h1>
                        </div>
                        {sectionContent}
                    </div>
                </div>
            </div>



        </>
    )
}

export default Profile
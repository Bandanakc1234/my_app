'use client'
import { userDetail } from '@/api/userApi'
import { API } from '@/config'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Profile = () => {
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

    return (
        <>
        <div className='bg-red-200'>
            <div className='bg-green-200 grid grid-cols-2'>
                <div className='bg-gray-200'>left</div>
                <div className='bg-pink-200'>right</div>
            </div>
            <div className='-bg-yellow-200'>buttom</div>
        </div>



            {/* <div className=' p-3 bg-slate-200'>
                <h1 className='font-bold'>Profile</h1>
                <nav className=' mb-4'>
                    <ol className='mb-0 flex flex-row font-light'>
                        <li className='mr-3'>Dashboard</li>
                        <li className='mr-3'>/</li>
                        <li>User Profile</li>
                    </ol>
                </nav>
            </div>
            <div className='flex flex-row justify-evenly h-full bg-red-50'>
                <div className=' bg-slate-200 mx-10 w-1/4'>
                    <div className='p-10 flex flex-col items-center'>
                        <h1>
                            <img src={`${API}/${user.image}`} alt={user.image}  className='rounded-full' />
                        </h1>
                        <h1 className='capitalize mt-5 font-bold'>{user.firstname} {user.lastname}</h1>
                        <h1 className='capitalize'>{user.position}</h1>
                    </div>
                </div>
                <div className='flex flex-col bg-slate-200 rounded-md w-2/3 py-5 px-10 h-11/12'>
                    <div className='border-b-2 border-black'>
                        <ol className='flex flex-row justify-evenly font-light ml-2'>
                            <li>
                                <Link href={'#'}>Overview</Link>
                            </li>
                            <li>
                                <Link href={'#'}>Edit Profile</Link>
                            </li>
                            <li>
                                <Link href={'#'}>Change Password</Link>
                            </li>
                        </ol>
                    </div>
                    <h1 className='font-bold'>Profile Details</h1>
                    <div className='flex mt-3'>
                        <div className='mr-16'>
                            <h1>Full Name:</h1>
                            <h1>Username:</h1>
                            <h1>Position:</h1>
                            <h1>Temporary Address:</h1>
                            <h1>Permanent Address:</h1>
                            <h1>Phone:</h1>
                            <h1>Email:</h1>
                        </div>
                        <div>
                            <h1 className='capitalize'>{user.firstname} {user.lastname}</h1>
                            <h1>{user.username}</h1>
                            <h1 className='capitalize'>{user.position}</h1>
                            <h1 className='capitalize'>{user.address?.tempAddress}</h1>
                            <h1 className='capitalize'>{user.address?.permanentAddress}</h1>
                            <h1>{user.phonenumber}</h1>
                            <h1>{user.email}</h1>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Profile
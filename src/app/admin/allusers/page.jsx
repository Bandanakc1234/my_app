'use client'
import { alluser, isAuthenticated } from '@/api/userApi'
import React, { useEffect, useState } from 'react'

const AllUsers = () => {
    let [users, setUsers] = useState([])

    // let token = isAuthenticated()

    useEffect(() => {
        alluser()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    console.log(data)
                    setUsers(data)
                }
            })
    }, [])


    return (
        <>
            <div className='ms-8 md:w-4/6 w-10/12'>
                <h1 className='font-bold text-3xl text-center'>All Users</h1>
                <div className='flex flex-col'>
                    {
                        users && users.map((user, i) => {
                            return <div key={user._id} className='p-5 border-2 bg-white rounded-md shadow-lg  my-3'>
                                <h1 className='bg-blue-200 w-1/6 pl-4'>S.No.: {i + 1}</h1>
                                <h1>Name: {user.firstname} {user.lastname}</h1>
                                <h1>Username: {user.username}</h1>
                                <h1>Email: {user.email}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AllUsers
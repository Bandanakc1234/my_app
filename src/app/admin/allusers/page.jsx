'use client'
import { alluser, deleteUser, isAuthenticated } from '@/api/userApi'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const AllUsers = () => {
    let [users, setUsers] = useState([])
    let [success, setSuccess] = useState(false)

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
    }, [success])

    let token = localStorage.getItem('token')

    const handleDelete = id => (event) => {
        event.preventDefault()
        setSuccess(false)
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3138D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
            width: "35%"
        }).then(result => {
            if (result.isConfirmed) {
                deleteUser(id, token)
                    .then(data => {
                        if (data.error) {
                            Swal.fire({
                                title: "Error!",
                                text: data.error,
                                icon: "error",
                                showConfirmButton: false,
                                timer: 3000
                            })
                        }
                        else {
                            Swal.fire({
                                title: "Success!",
                                text: data.msg,
                                icon: "success",
                                showConfirmButton: false,
                                timer: 3000
                            })
                        }
                    })
                    .catch(
                        Swal.fire("Something went wrong!")
                    )
                setSuccess(true)
            }
        })

    }

    return (
        <>
            <div className='ms-8 md:w-4/6 w-10/12'>
                <h1 className='font-bold text-3xl text-center'>All Users</h1>
                <div className='flex flex-col'>
                    {
                        users && users.map((user, i) => {
                            return <div key={user._id} className=' border-2 bg-white rounded-md shadow-lg  my-3 flex justify-between'>
                                <div className='p-5'>
                                    <h1 className='bg-blue-200 w-1/2 text-center rounded-md'>S.No. {i + 1}</h1>
                                    <h1>Name: {user.firstname} {user.lastname}</h1>
                                    <h1>Username: {user.username}</h1>
                                    <h1>Email: {user.email}</h1>
                                </div>
                                <button className='bg-red-600 p-2 m-12 rounded-lg' onClick={handleDelete(user._id)}>Delete</button>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AllUsers
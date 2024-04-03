'use client'
import { alluser, deleteUser } from '@/api/userApi'
import { API } from '@/config'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const AllUsers = () => {
    let [users, setUsers] = useState([])
    let [success, setSuccess] = useState(false)

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ""

    useEffect(() => {
        alluser(token)
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
            <div className='shadow-md bg-white rounded-lg h-fit ms-8'>
                <h1 className='border-b border-dashed py-3 px-6 text-lg font-semibold'>User Details</h1>
                    <div className='p-4 '>
                        <table className='w-full inline-block align-middle border rounded-md divide-y divide-gray-200'>
                            <thead className='bg-red-50 w-full'>
                                <tr className='w-full'>
                                    <th className='py-3 ps-4 text-md font-medium w-1/12'>S.No.</th>
                                    <th className='px-6 py-3 text-left text-md font-medium uppercase w-1/6'>Name</th>
                                    <th className='px-6 py-3 text-left text-md font-medium uppercase w-1/12'>Age</th>
                                    <th className='px-6 py-3 text-left text-md font-medium uppercase w-1/6'>Address</th>
                                    <th className='px-6 py-3 text-left text-md font-medium uppercase w-1/6'>Position</th>
                                    <th className='px-6 py-3 text-left text-md font-medium uppercase w-1/12'>Action</th>
                                </tr>
                            </thead>

                            <tbody className='divide-y divide-gray-200'>
                                {
                                    users && users.map((user, i) => {
                                        return <tr key={user._id}>
                                            <td className='py-3 ps-4 w-1/12'>{i + 1}</td>
                                            <td className='tracking-tight px-6 py-3 w-1/6 text-sm capitalize'>
                                                <img src={`${API}/${user.image}`} alt={user.image} className='rounded-full h-10' />
                                                {user.firstname} {user.lastname}</td>
                                            <td className='tracking-tight px-6 py-3 text-sm w-1/12'>{user.age}</td>
                                            <td className='tracking-tight px-6 py-3 text-sm w-1/6'>{user.address.tempAddress}</td>
                                            <td className='tracking-tight px-6 py-3 text-sm capitalize w-1/6'>{user.position}</td>
                                            <td className='px-6 py-3 text-sm w-1/12'>
                                                <button className='text-red-600' onClick={handleDelete(user._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    )
}

export default AllUsers

"use client";

import { view_career } from "@/api/careerAPI";
import { useEffect, useState } from "react";
import career from "../(client)/career/page";
import { API } from "@/config";
import { viewProject } from "@/api/projectAPI";
import Link from "next/link";
import { getAppliedCareer } from "@/api/applyCareerAPI";
import { userDetail } from "@/api/userApi";
import { useParams } from "next/navigation";

export default function Home() {
  // const [limit, setLimit] = useState(2)
  const limit = 3
  const [careers, setCareers] = useState([])
  const [projects, setProjects] = useState([])
  const [applicants, setApplicants] = useState([])
  const [userImage, setUserImage] = useState(null)
  const [userfirstname, setUserFirstname] = useState(null)
  const [userlastname, setUserLastname] = useState(null)
  const [userposition, setUserPosition] = useState(null)
  // const showMore = () => {
  //   setLimit(limit+2) 
  // }

  useEffect(() => {
    // recent job posts
    view_career()
      .then(data => {
        if (data?.error) {
          console.log(error)
        }
        else {
          setCareers(data)
          // console.log(careers)
        }
      })
    // view projects
    viewProject()
      .then(data => {
        if (data?.error) {
          console.log(error)
        }
        else {
          setProjects(data)
        }
      })
    // view applied persons
    getAppliedCareer(token)
      .then(data => {
        if (data?.error) {
          console.log(data.error)
        }
        else {
          setApplicants(data)
        }
      })
    // view user profile
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUserImage(user.image)
      setUserFirstname(user.firstname)
      setUserLastname(user.lastname)
      setUserPosition(user.position)
    }

  }, [])

  let token
  if (typeof window !== "undefined") {
    token = localStorage.getItem('token')
  }

  return (
    <>
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="recentjobs w-3/4 ">
          <h1 className="text-2xl">Recent Job Posts</h1>
          {
            careers?.length > 0 &&
            careers.slice(1, limit).map(career => {
              return <div key={career._id} className="w-4/5 p-5 border-2 bg-white rounded-md shadow-lg my-2 ">
                <h1>{career.career_title}</h1>
                <h2>No. Of Positions: {career.vacancyNumber}</h2>
                <h1>Posted Date: {career.posted_date}</h1>
                <h1>Application Deadline: {career.deadline}</h1>
                <h1>Status: </h1>
              </div>
            })
          }
        </div>
        <div className="profile w-1/4 bg-gray-50">
          <div className="profile-pic flex flex-col justify-center items-center h-80 w-80 font-bold">
            <h1>
              <img src={`${API}/${userImage}`} alt='' className='h-64 border mt-12 rounded-md' />
            </h1>
            <h1 className="capitalize mt-2">{userfirstname} {userlastname}</h1>
            <h1 className="capitalize">{userposition}</h1>
            <button className="bg-blue-600 rounded-md p-2 mt-2">Edit Profile</button>
          </div>
        </div>
      </div>
      <div className="projects  w-11/12 mx-auto">
        <h1 className="text-2xl">Projects</h1>
        {
          projects?.length > 0 &&
          projects.slice(1, limit).map(project => {
            return <div key={project._id} className="w-1/4 p-5 border-2 bg-white rounded-md shadow-lg my-2 ">
              <h1>
                <img src={`${API}/${project.project_image}`} alt={project.project_image} className="w-full" style={{ height: "150px" }} />
              </h1>
              <h1>{project.project_title}</h1>
              <h2>Category: {project.category}</h2>
              <Link href={`/admin/projects`}>
                <button className='bg-blue-500 h-9 text-lg rounded-md cursor-pointer w-28 hover:bg-blue-700 text-white'>Read More</button>
              </Link>
            </div>
          })
        }
      </div>
      <div className="applications w-11/12 mx-auto">
        <h1 className="text-2xl">Applicants</h1>
        <div className="w-1/4 p-5 border-2 bg-white rounded-md shadow-lg my-2">
          {
            applicants?.length > 0 &&
            applicants.map(applicant => {
              return <div key={applicant._id} className="">
                <Link href="/admin/careers/appliedCareer">
                  <li> Name: {applicant.first_name} {applicant.last_name} </li>
                </Link>
              </div>
            })
          }
        </div>
      </div>

    </>
  );
}

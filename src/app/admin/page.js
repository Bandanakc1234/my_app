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
  const limit = 3;
  const [careers, setCareers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [id, setId] = useState(null)
  const [userImage, setUserImage] = useState(null);
  const [userfirstname, setUserFirstname] = useState(null);
  const [userlastname, setUserLastname] = useState(null);
  const [userposition, setUserPosition] = useState(null);
  // const showMore = () => {
  //   setLimit(limit+2)
  // }

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    // recent job posts
    view_career().then((data) => {
      if (data?.error) {
        console.log(error);
      } else {
        setCareers(data);
        // console.log(careers)
      }
    });
    // view projects
    viewProject().then((data) => {
      if (data?.error) {
        console.log(error);
      } else {
        setProjects(data);
      }
    });
    // view applied persons
    getAppliedCareer(token).then((data) => {
      if (data?.error) {
        console.log(data.error);
      } else {
        setApplicants(data);
      }
    });
    // view user profile
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setId(user._id)
      setUserImage(user.image)
      setUserFirstname(user.firstname)
      setUserLastname(user.lastname)
      setUserPosition(user.position)
    }
  }, []);

  return (
    <>
      {/* Recent Job Posts */}
      <div className="flex justify-between w-11/12 mx-auto pb-8">
        <div className="recentjobs w-3/4 ">
          <h1 className="text-2xl font-bold py-1">Recent Job Posts</h1>
          {careers?.length > 0 &&
            careers.slice(1, limit).map((career) => {
              return (
                <div
                  key={career._id}
                  className="w-4/5 p-5 border-2 bg-white rounded-md shadow-lg my-2 "
                >
                  <h1 className="text-2xl font-semibold capitalize py-1">
                    {career.career_title}
                  </h1>
                  <h2 className="text-lg font-medium py-1">
                    No. Of Positions:
                    <span className="text-base capitalize">
                      {" "}
                      {career.vacancyNumber}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium py-1">
                    Posted Date:
                    <span className="text-base capitalize">
                      {" "}
                      {career.posted_date}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium py-1">
                    Application Deadline:
                    <span className="text-base capitalize">
                      {" "}
                      {career.deadline}
                    </span>
                  </h2>
                  {/* <h2 className="text-lg font-medium">Status: </h2> */}
                </div>
              );
            })}
          <Link href={`/admin/careers`} className="py-2">
            <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer w-28 hover:bg-blue-700 text-white">
              Read More
            </button>
          </Link>
        </div>
        {/*user profile */}
        <div className="profile w-1/4 bg-gray-50">
          <div className="profile-pic font-semibold text-lg">
            <div className="flex flex-col justify-center items-center"> 
            <h1>
              <img
                src={`${API}/${userImage}`}
                alt=""
                className="h-64 border mt-12 rounded-md"
              />
            </h1>
            <h1 className="capitalize mt-2">
              {userfirstname} {userlastname}
            </h1>
            <h1 className="capitalize">{userposition}</h1>
            <Link href={`/admin/userprofile/${id}`}>
            <button className="bg-blue-600 rounded-md p-2 mt-2">
              Edit Profile
            </button>
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="projects w-11/12 mx-auto pb-8">
        <h1 className="text-2xl font-bold py-1">Projects</h1>
        <div className="w-full flex flex-col items-center">
          {projects?.length > 0 &&
            projects.slice(1, limit).map((project) => {
              return (
                <div
                  key={project._id}
                  className="p-5 bg-white border-2 rounded-md shadow-lg my-2 flex w-full items-center "
                >
                  <h1 className="w-1/3">
                    <img
                      src={`${API}/${project.project_image}`}
                      alt={project.project_image}
                      className="rounded-md w-full"
                      style={{ height: "300px" }}
                    />
                  </h1>
                  <div className="w-3/5 flex flex-col justify-center px-9">
                    <h1 className="text-2xl font-semibold capitalize py-1">
                      {project.project_title}
                    </h1>
                    <h2 className="text-lg font-medium py-1">
                      Category:
                      <span className="text-base capitalize">
                        {" "}
                        {project.category}{" "}
                      </span>{" "}
                    </h2>
                    <h2 className="text-lg font-medium py-1">
                      Language:
                      <span className="text-base font-normal capitalize">
                        {" "}
                        {project.language}{" "}
                      </span>
                    </h2>
                  </div>
                </div>
              );
            })}
          <Link href={`/admin/projects`} className="py-2">
            <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer w-28 hover:bg-blue-700 text-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
      

      {/* Applicants */}
      <div className="applications w-11/12 mx-auto pb-8">
        <h1 className="text-2xl font-bold py-1">Applicants</h1>
        <div className="w-full p-5 border-2 bg-white rounded-md shadow-lg my-2">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">White</td>
                  <td class="px-6 py-4">Laptop PC</td>
                  <td class="px-6 py-4">$1999</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">Black</td>
                  <td class="px-6 py-4">Accessories</td>
                  <td class="px-6 py-4">$99</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {applicants?.length > 0 &&
            applicants.map((applicant) => {
              return (
                <div key={applicant._id} className="">
                  <table className="border-4">
                    <thead className="border-4">
                      <tr className="border-4">
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody className="border-4">
                      <tr className="border-4">
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                      </tr>
                      <tr className="border-4">
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                      </tr>
                      <tr className="border-4">
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

{
  /* <Link href="/admin/careers/appliedCareer">
                  <li> Name: {applicant.first_name} {applicant.last_name} </li>
                </Link> */
}

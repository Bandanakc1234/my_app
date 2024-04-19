// // 'use client'
// // import React from "react"
// import { AiOutlineBarChart } from "react-icons/ai";
// import { SiTaichigraphics } from "react-icons/si";

// // services = category
// export const Services = [
//     {
//         id: 1,
//         title: "Web Development",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-browser-edge" viewBox="0 0 16 16">
//             <path d="M9.482 9.341c-.069.062-.17.153-.17.309 0 .162.107.325.3.456.877.613 2.521.54 2.592.538h.002c.667 0 1.32-.18 1.894-.519A3.84 3.84 0 0 0 16 6.819c.018-1.316-.44-2.218-.666-2.664l-.04-.08C13.963 1.487 11.106 0 8 0A8 8 0 0 0 .473 5.29C1.488 4.048 3.183 3.262 5 3.262c2.83 0 5.01 1.885 5.01 4.797h-.004v.002c0 .338-.168.832-.487 1.244l.006-.006z" />
//             <path d="M.01 7.753a8.14 8.14 0 0 0 .753 3.641 8 8 0 0 0 6.495 4.564 5 5 0 0 1-.785-.377h-.01l-.12-.075a5.5 5.5 0 0 1-1.56-1.463A5.543 5.543 0 0 1 6.81 5.8l.01-.004.025-.012c.208-.098.62-.292 1.167-.285q.194.001.384.033a4 4 0 0 0-.993-.698l-.01-.005C6.348 4.282 5.199 4.263 5 4.263c-2.44 0-4.824 1.634-4.99 3.49m10.263 7.912q.133-.04.265-.084-.153.047-.307.086z" />
//             <path d="M10.228 15.667a5 5 0 0 0 .303-.086l.082-.025a8.02 8.02 0 0 0 4.162-3.3.25.25 0 0 0-.331-.35q-.322.168-.663.294a6.4 6.4 0 0 1-2.243.4c-2.957 0-5.532-2.031-5.532-4.644q.003-.203.046-.399a4.54 4.54 0 0 0-.46 5.898l.003.005c.315.441.707.821 1.158 1.121h.003l.144.09c.877.55 1.721 1.078 3.328.996" />
//         </svg>,
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fuga
//         consectetur hic quam dolore ea beatae consequatur excepturi ratione deserunt earum ut animi amet
//         eligendi suscipit quidem dignissimos debitis sunt, et harum perspiciatis neque! Animi, obcaecati
//         reiciendis ipsam incidunt laudantium architecto exercitationem nostrum numquam ex nesciunt illum
//         quia vero reprehenderit voluptatum dignissimos pariatur accusantium explicabo porro! Odit,
//         deleniti Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fuga
//         consectetur hic quam dolore ea beatae consequatur excepturi ratione deserunt earum ut animi amet
//         eligendi suscipit quidem dignissimos debitis sunt, et harum perspiciatis neque! Animi, obcaecati
//         reiciendis ipsam incidunt laudantium architecto exercitationem nostrum numquam ex nesciunt illum
//         quia vero reprehenderit voluptatum dignissimos pariatur accusantium explicabo porro! Odit,
//         deleniti`
//     },
//     {
//         id: 3,
//         title: "Graphics design",
//         icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-alt" viewBox="0 0 16 16">
//         <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5m10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5"/>
//       </svg>,
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fuga
//         consectetur hic quam dolore ea beatae consequatur excepturi ratione deserunt earum ut animi amet
//         eligendi suscipit quidem dignissimos debitis sunt, et harum perspiciatis neque! Animi, obcaecati
//         reiciendis ipsam incidunt laudantium architecto exercitationem nostrum numquam ex nesciunt illum
//         quia vero reprehenderit voluptatum dignissimos pariatur accusantium explicabo porro! Odit,
//         deleniti`
//     },
//     {
//         id: 5,
//         title: "Digital Marketing",
//         icon:<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
//         <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
//       </svg>,
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fuga
//         consectetur hic quam dolore ea beatae consequatur excepturi ratione deserunt earum ut animi amet
//         eligendi suscipit quidem dignissimos debitis sunt, et harum perspiciatis neque! Animi, obcaecati
//         reiciendis ipsam incidunt laudantium architecto exercitationem nostrum numquam ex nesciunt illum
//         quia vero reprehenderit voluptatum dignissimos pariatur accusantium explicabo porro! Odit,
//         deleniti`
//     }
// ]






// /*

// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
// </svg>


// */
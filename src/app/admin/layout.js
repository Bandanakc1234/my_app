'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./component/Navbar";
import { useState } from "react";
import Sidebar from "./component/Sidebar";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Height } from "@mui/icons-material";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col ">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="flex bg-blue-200" >
            <Sidebar isMenuOpen={isMenuOpen} />
            <div className={`transition-all duration-300 ease-in-out me-14 mt-14 ${isMenuOpen ? `md:w-5/6 w-10/12 md:ms-44 ms-16 ` : `md:w-11/12 w-10/12 md:ms-32 ms-16`}`}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

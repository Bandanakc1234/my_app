'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./component/Navbar";
import { useState } from "react";
import Sidebar from "./component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <html lang="en">
      <body className={inter.className}>


        <div className=" ">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <div className="flex bg-blue-200 " >
            <Sidebar isMenuOpen={isMenuOpen} />
            <div className={`transition-all duration-300 ease-in-out mt-20 ${isMenuOpen ? `w-5/6 md:ms-72 ms-44` : `w-11/12 md:ms-40 ms-16`}`}>

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

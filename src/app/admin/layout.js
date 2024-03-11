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

        {/* <div className="flex items-center justify-center w-full bg-blue-200">
          <div className="flex items-center justify-center p-24 w-full mt-16" style={{height: '100vh'}}> */}

        <div className=" ">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="flex pt-16" >
            <Sidebar isMenuOpen={isMenuOpen} />
            <div className={`transition-all duration-300 ease-in-out ${isMenuOpen ? `w-3/4` : `w-10/12`}`}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

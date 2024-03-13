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
        <div className="flex flex-col ">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <div className="flex bg-blue-200" >
            <Sidebar isMenuOpen={isMenuOpen} />
            <div className={`transition-all duration-300 ease-in-out mt-14 ${isMenuOpen ? `lg:w-4/6 w-7/12 md:ms-44 ms-16 ` : `md:w-11/12 w-7/12 md:ms-32 ms-16`}`}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

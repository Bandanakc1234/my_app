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
          <div className="flex pt-16" >
            <Sidebar isMenuOpen={isMenuOpen}/>
            <div className={`mt-14 transition-all duration-300 ease-in-out ${isMenuOpen ? 'ml-64' : 'ml-20'}`}>
          {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./component/Navbar";
// import PageWapper from "./component/PageWapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
          < HEAD />
          <div className="flex items-center justify-center w-full bg-blue-200">

          <div className="flex items-center justify-center p-24 w-full mt-16" style={{height: '100vh'}}>

          {children}
          </div>
        </div>
      </body>
    </html>
  );
}

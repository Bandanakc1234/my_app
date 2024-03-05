'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Navbar/>
          <div className="flex items-center justify-center p-24 w-full" style={{height: '100vh'}}>
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}

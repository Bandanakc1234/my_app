'use client';
import Image from "next/image";
import { BiWebcam } from 'react-icons/bi';
import React, { useEffect } from 'react';

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});



export default function Home() {
  const settings = {
    loop: true,
    margin: 10,
    items: 4,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:4
      }
    }
  }

  const settings2 = {
    loop: true,
    margin: 10,
    items: 5,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:3,
      },
      1000:{
          items:5
      }
    }
  }

  

  return (

    <div className="bg-blue-200">
      <div className="main ml-16 mr-16 bg-white ">
          <div className="head bg-white">
            <h1 className="text-5xl text-orange-500 font-bold pl-10 pt-10">learn</h1>
            <div className="lg:p-20 lg:text-lg lg:w-3/5  md:p-10 md:text-base md:w-5/6 sm:p-5 sm:w-full sm:text-sm">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, voluptatem provident. Corporis
                dolores nisi cupiditate sunt minus voluptas molestiae necessitatibus voluptates, consequuntur,
                non rem optio nemo quam sit quis accusantium quas omnis. Molestiae voluptatem officia nesciunt,
                blanditiis aperiam eligendi adipisci.</p>
            </div>

            <div className="cn">
              <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-10 hover:bg-white"><a href="#" className="p-3">Free Quote</a></button>
              <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-10 hover:bg-white"><a href="contact.html" className="p-3">Contact Us</a></button>
            </div>
          </div>
       
        {/*  first content end */}

        {/* second content start */}
        <div className="body_mid h-auto bg-white w-full p-9 xl:flex xl:justify-between">
          <div className="left lg:w-1/2 md:w-full sm:w-full">
            <h1 className="text-5xl text-orange-500 font-bold p-5">learn</h1>
            <p className="lg:p-12 lg:text-xl lg:w-full md:text-base md:w-5/6 md:p-10 sm:p-5 sm:text-sm sm:w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fuga
              consectetur hic quam dolore ea beatae consequatur excepturi ratione deserunt earum ut animi amet
              eligendi suscipit quidem dignissimos debitis sunt, et harum perspiciatis neque! Animi, obcaecati
              reiciendis ipsam incidunt laudantium architecto exercitationem nostrum numquam ex nesciunt illum
              quia vero reprehenderit voluptatum dignissimos pariatur accusantium explicabo porro! Odit,
              deleniti
              officiis laudantium nesciunt quidem tenetur officia debitis magnam odio ab, quod perferendis
              saepe
              quibusdam impedit porro quaerat sunt assumenda aliquam fuga quisquam ipsam. Et, nam enim? Modi,
              numquam enim veniam, facilis mollitia rem ratione similique quia ullam pariatur atque? Esse,
              fugit
              doloribus.</p>

            <div className="cn">
              <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-4 hover:bg-white "><a href="" className="p-3">Read more</a></button>
            </div>
          </div>
          <div className="right m-5 lg:w-1/2">
            <img src={"/download1.png"} alt="" className="w-full h-full" />

          </div>
        </div>
        {/* second content end */}


        {/* third content start */}
    
        <div className="footer bg-blue-950 text-white p-14">
          <h1 className="text-4xl font-bold">Ready to get started</h1>
          <p className="mr-5">Enter you email address</p>
          <input type="email" id="email" name="email" placeholder="enter your email..." className="text-black sm:w-3/5 h-5 font-2xl rounded-md p-5" />
          <div className="flex justify-start">
            <button className="bg-orange-400 h-9 text-lg text-black rounded-md cursor-pointer mt-4 w-28 hover:bg-white hover:text-black flex items-center justify-center"><a href="">submit</a></button>
          </div>

        </div>

        {/* third content end */}

        {/* fourth content start */}

        <div className="lfooter bg-white p-10">

          <h1 className="text-5xl text-center font-bold p-10">our services</h1>

          <div className="topbuttom flex flex-col gap-5 pb-7">
            <div className="top flex-col-3 justify-between lg:flex lg:justify-between">
              <div className="topfirst bg-white w-96 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200 m-auto gap-5 mb-10 lg:m-10">
                <div className="icondiv flex justify-center">
                  <BiWebcam size={50}/>
                </div>
                <div className="h2div text-2xl font-bold flex justify-center">
                  <h2>Web Desiging</h2>
                </div>
                <div className="pdiv text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum quidem </p>
                </div>
                <div className="buttondiv flex justify-center">
                  <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-white hover:text-black">see more</button>
                </div>
              </div>

              <div className="topsecond  bg-white w-96 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10">
                <div className="icondiv flex justify-center">
                  <BiWebcam size={50}/>
                </div>
                <div className="h2div text-2xl font-bold flex justify-center">
                  <h2>Web Desiging</h2>
                </div>
                <div className="pdiv text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum quidem </p>
                </div>
                <div className="buttondiv flex justify-center">
                  <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-white hover:text-black">see more</button>
                </div>
              </div>
              <div className="topthird  bg-white w-96 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10">
                <div className="icondiv flex justify-center">
                  <BiWebcam size={50}/>
                </div>
                <div className="h2div text-2xl font-bold flex justify-center">
                  <h2>Web Desiging</h2>
                </div>
                <div className="pdiv text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum quidem </p>
                </div>
                <div className="buttondiv flex justify-center">
                  <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-white hover:text-black">see more</button>
                </div>
              </div>
            </div>

            <div className="buttom flex-col-3 lg:flex lg:justify-between">
              <div className="buttomfirst  bg-white w-96 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10">
                <div className="icondiv flex justify-center">
                  <BiWebcam size={50} />
                </div>
                <div className="h2div text-2xl font-bold flex justify-center">
                  <h2>Web Desiging</h2>
                </div>
                <div className="pdiv text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum quidem </p>
                </div>
                <div className="buttondiv flex justify-center">
                  <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-white hover:text-black">see more</button>
                </div>
              </div>
              <div className="buttomsecond  bg-white w-96 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10">
                <div className="icondiv flex justify-center">
                  <BiWebcam size={50} />
                </div>
                <div className="h2div text-2xl font-bold flex justify-center">
                  <h2>Web Desiging</h2>
                </div>
                <div className="pdiv text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum quidem </p>
                </div>
                <div className="buttondiv flex justify-center">
                  <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-white hover:text-black">see more</button>
                </div>
              </div>
              <div className="buttomthird  bg-white w-96 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200 m-auto gap-5 mb-10 lg:m-10">
                <div className="icondiv flex justify-center">
                  <BiWebcam size={50}/>
                </div>
                <div className="h2div text-2xl font-bold flex justify-center">
                  <h2>Web Desiging</h2>
                </div>
                <div className="pdiv text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum quidem </p>
                </div>
                <div className="buttondiv flex justify-center">
                  <button className="bg-orange-400 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-white hover:text-black">see more</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* fourth content end */}

        {/* carousel start  */}

        <OwlCarousel {...settings} className="border border-t-4 border-b-4">
          <div >
          <div className="border border-solid border-l-white shadow-2xl text-center p-5 m-10 rounded-xl bg-white" >
            <div className="imgprofile w-20 mx-auto">
              <img src="./download2.jpg" alt="" className="rounded-circle w-20 h-20"/>
            </div>
            <div>
              <h3 className="font-bold text-xl">Bandana kc</h3>
              <p className="font-bold">student</p>
            </div>
            <div className="pdiv">
              <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis tempora minima
                totam
                nesciunt cum quaerat
              </blockquote>
            </div>
          </div>

          
          </div>
        </OwlCarousel >


        
          <div className="text-center p-12 bg-white">
            <h3 className="text-2xl ">Our Clients</h3>
            <p className="text-3xl p-5 font-bold">Some of our happy Clients</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam nesciunt, ducimus
              praesentium placeat debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      

        <OwlCarousel {...settings2} className="border border-t-4 border-b-4">
          
        <div className="owlcarousel_logo p-20">
              <div className="logo border border-solid shadow-2xl border-white h-48 w-48 mx-auto rounded-xl">
                <img src="./logo6.jpg" className="rounded-xl"/>
              </div>
            </div>

            <div className="owlcarousel_logo p-20">
              <div className="logo border border-solid shadow-2xl border-white h-48 w-48 mx-auto  rounded-xl">
                <img src="./logo1.png" className="rounded-xl"/>
              </div>
            </div>
            
            <div className="owlcarousel_logo p-20">
              <div className="logo border border-solid shadow-2xl border-white h-48 w-48 mx-auto  rounded-xl">
                <img src="./logo2.png" className="h-full rounded-xl"/>
              </div>
            </div>
            
            <div className="owlcarousel_logo p-20">
              <div className="logo border border-solid shadow-2xl border-white h-48 w-48 mx-auto  rounded-xl">
                <img src="./logo3.png" className="h-full rounded-xl" />
              </div>
            </div>
            
            <div className="owlcarousel_logo p-20">
              <div className="logo border border-solid shadow-2xl border-white h-48 w-48 mx-auto  rounded-xl">
                <img src="./logo4.jpg" className="h-full rounded-xl"/>
              </div>
            </div>
            
            <div className="owlcarousel_logo p-20">
              <div className="logo border border-solid shadow-2xl border-white h-48 w-48 mx-auto  rounded-xl">
                <img src="./logo5.jpg" className="h-full rounded-xl" />
              </div>
            </div>
        
        </OwlCarousel >


      </div >
    </div>

  );
}

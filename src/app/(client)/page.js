'use client';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";


if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import { getAllCategories } from "@/api/categoryAPI";
import { alluserclient } from "@/api/userApi";
import { API } from "@/config";
import { sendEmail } from "@/api/normalUserAPI";
import Swal from "sweetalert2";
import { Service } from "./service/StaticData/page";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Home() {
  let [users, setUsers] = useState([])
  let [services, setServices] = useState([])
  let [email, setEmail] = useState("")
  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  const settings = {
    loop: true,
    margin: 10,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4
      }
    }
  }

  const settings2 = {
    loop: true,
    margin: 10,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3
      }
    }
  }

  const settings3 = {
    items: 1,
    loop: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 3000,
  }

  // const settings3 = {
  //   items: 1,
  //   // nav : true,
  //   loop: true,
  //   autoHeight: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  // }

  useEffect(() => {
    Aos.init()
    alluserclient()
      .then(data => {
        if (data?.error) {
          console.log(data.error)
        }
        else {
          setUsers(data)
        }
      })
    getAllCategories()
      .then(data => {
        if (data?.error) {
          console.log(data.error)
        }
        else {
          setServices(data)
        }
      })
  }, [])

  const handleChange = (event) => {
    setEmail(
      event.target.value
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendEmail(email)
      .then(data => {
        if (data.error) {
          setSuccess(false)
          setError(data.error)
        }
        else {
          setError('')
          setSuccess(true)
          setEmail("")
        }
      })
      .catch(error => console.log(error))
  }

  const showError = () => {
    if (error) {
      Swal.fire({
        icon: "error",
        toast: true,
        title: "error",
        text: error,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        color: "#d33"
      })
      setError('')
      return <div>{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
      Swal.fire({
        icon: "success",
        toast: true,
        title: "success",
        text: 'Thank you for your Interest',
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        color: "#64DD17"
      })
      setSuccess('')
      return <div>{success}</div>
    }
  }


  return (

    <div>
      {showError()}
      {showSuccess()}
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between ">
        <div className="w-1/2 bg-cyan-500 ">
          lorem lorem lorem lorem
        </div>
        <div className="w-full lg:w-1/2 h-full p-5">
          <OwlCarousel {...settings3}>
            <div className="w-full">
              <img src="/career1.webp" className="w-full h-full rounded-md" />
              
            </div>
            <div className="w-full">
              <img src="/career2.jpg" className="w-full h-full rounded-md" />
              
            </div> 
            <div className="w-full">
              <img src="/contact1.jpg" className="w-full h-full rounded-md" />
              
            </div>                     
          </OwlCarousel>
        </div>

      </div>
      <div className="main  bg-white ">
        <div className="head bg-white">
          <h1 className="lg:text-4xl text-3xl text-blue-950 font-bold md:pl-10 p-3 pt-10" data-aos="zoom-in" data-aos-duration="1000">Learn</h1>
          <div className="lg:p-20 lg:text-xl lg:w-3/5  md:p-10 md:text-base md:w-5/6 p-3 w-full text-sm text-black" data-aos="zoom-in" data-aos-duration="1000">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, voluptatem provident. Corporis
              dolores nisi cupiditate sunt minus voluptas molestiae necessitatibus voluptates, consequuntur,
              non rem optio nemo quam sit quis accusantium quas omnis. Molestiae voluptatem officia nesciunt,
              blanditiis aperiam eligendi adipisci.</p>
          </div>

          <div className="cn">
            {/* <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer md:m-10 m-5 text-white hover:bg-blue-700"  data-aos="fade-right" data-aos-duration="1000"><a href="#" className="p-3">Free Quote</a></button> */}
            <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer md:m-10 m-5 text-white hover:bg-blue-700" data-aos="fade-right" data-aos-duration="2000"><a href="/contact" className="p-3">Contact Us</a></button>
          </div>
        </div>

        {/*  first content end */}

        {/* second content start */}
        <div className="body_mid h-auto bg-white w-full md:p-9  lg:flex lg:justify-between ">
          <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="lg:text-4xl text-3xl text-blue-500 font-bold md:p-5 p-3">About Us</h1>
            <p className="lg:p-12 lg:text-xl lg:w-full md:text-base md:w-5/6 md:p-10 p-3 text-sm w-full">
            Index IT Hub pioneers innovative IT solutions for businesses worldwide. Our company specializes in a comprehensive array of services, including software development, web development, mobile application development, graphics design, digital marketing strategies, IT consultation services, and search engine optimization (SEO) With a focus on client success and technical excellence, we deliver tailored solutions to drive growth and efficiency in the digital age. Partner with Index IT Hub to elevate your business to new heights in technology and innovation.
              </p>

            <div className="cn">
              <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 text-white hover:bg-blue-700 "><a href="/about" className="md:p-3 p-2">Learn More</a></button>
            </div>
          </div>
          <div className="right m-5 lg:w-1/2">
            <img src={"/download1.png"} alt="" className="w-full h-full" data-aos="zoom-in" data-aos-duration="2000" />

          </div>
        </div>
        {/* second content end */}


        {/* third content start */}

        <div className="footer bg-gray-800 text-white md:p-14 p-3">
          <h1 className="md:text-4xl md:font-bold text-2xl font-semibold">Ready to get started</h1>
          <label htmlFor="email" className="m-1">Enter you email address</label>
          <br />
          <input type="email" id="email" name="email" value={email} placeholder="enter your email..." className="text-black md:w-4/5 w-4/5 h-5 font-2xl rounded-md p-5" onChange={handleChange} />
          <div className="flex justify-start">
            <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer mt-4 w-28 hover:bg-blue-700  flex items-center justify-center" onClick={handleSubmit}><a href="">Send</a></button>
          </div>

        </div>

        {/* third content end */}

        {/* fourth content start */}

        <div className="lfooter bg-white md:p-10">

          <h1 className="md:text-5xl text-3xl text-center font-bold p-10" data-aos="fade-up" data-aos-duration="2000">Why Index IT Hub?</h1>

          <div className="lfooter bg-white md:p-10">
            <div className="flex flex-wrap w-full justify-evenly">
              {
                Service?.length > 0 &&
                Service.map((service, i) => {
                  return <div className="flex justify-evenly items-center" >
                    {/* <div > */}
                    {i%2==0 && 
                      <div data-aos="zoom-in" data-aos-duration="1000">{service.image}</div>
                    }
                    <div className={`text-justify w-1/2`} data-aos="zoom-in" data-aos-duration="1000">
                      <h2 className="text-3xl font-bold underline mb-3">{service.title}</h2>
                      <h2 className="text-justify">{service.description}</h2>
                    </div>
                    {(i+1)%2==0 && 
                     <div data-aos="zoom-in" data-aos-duration="1000"> {service.image} </div>
                    }
                  </div>
                  // </div>

                })
              }

            </div>
          </div>


          {/* <div className="flex flex-wrap w-full justify-evenly">
=======
          <h1 className="md:text-5xl text-3xl text-center font-bold p-10" data-aos="fade-up" data-aos-duration="2000">our services</h1>
          <div className="flex flex-wrap w-full justify-evenly">
>>>>>>> 3e6eac7760ffe572cbd2db1799a2f7004156b1b5
            {
              services?.length > 0 &&
              services.map(service => {
                return <div key={service._id} className="flex-col-3 justify-between lg:flex lg:justify-between">
                  <div className="topfirst bg-white md:w-96 w-52 rounded-md px-2 py-6 flex flex-col justify-center shadow-xl hover:bg-blue-200 m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="icondiv flex justify-center" >
                      <div dangerouslySetInnerHTML={{ __html: service.icon }}></div>
                    </div>
                    <div className="h2div text-2xl font-bold flex justify-center">
                      <h2 className="text-center">{service.category_title}</h2>
                    </div>
                    
                    <div className="buttondiv flex justify-center">
                      <Link href={`/service/${service?._id}`}>
                        <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">Read more</button>
                      </Link>
                    </div>
                  </div>

                </div>
              })
            }

          </div> */}



          {/* <div className="topfirst bg-white md:w-96 w-52 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200 m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
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
                  <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">see more</button>
                </div>
              </div> */}

          {/* <div className="topsecond  bg-white md:w-96 w-52 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
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
                  <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">see more</button>
                </div>
              </div> */}

          {/* <div className="topthird  bg-white md:w-96 w-52 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
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
                  <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">see more</button>
                </div>
              </div> */}


          {/* <div className="buttom flex-col-3 lg:flex lg:justify-between">
              <div className="buttomfirst  bg-white md:w-96 w-52 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
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
                  <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">see more</button>
                </div>
              </div>
              <div className="buttomsecond  bg-white md:w-96 w-52 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200  m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
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
                  <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">see more</button>
                </div>
              </div>
              <div className="buttomthird  bg-white md:w-96 w-52 rounded-md p-2 flex flex-col justify-center shadow-xl hover:bg-blue-200 m-auto gap-5 mb-10 lg:m-10" data-aos="zoom-in" data-aos-duration="1000">
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
                  <button className="bg-blue-500 h-9 text-lg rounded-md cursor-pointer m-4 w-28 hover:bg-blue-700 text-white">see more</button>
                </div>
              </div>
            </div>
          </div> */}

          {/* fourth content end */}

          {/* carousel start  */}

          <div className="border border-t-4 border-b-4">
            <h1 className="md:text-5xl text-3xl text-center font-bold p-10" data-aos="fade-up" data-aos-duration="2000">Our Team Members</h1>

            <OwlCarousel {...settings}>
              {
                users?.length > 0 &&
                users.map(user => {
                  return <div key={user._id} className="border border-solid border-l-white shadow-2xl text-center p-5 m-10 rounded-xl bg-white" data-aos="fade-up" data-aos-duration="2000">
                    <div className="imgprofile w-20 mx-auto">
                      <img src={`${API}/${user.image}`} alt={user.username} className="rounded-circle w-20 h-20" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{user.firstname} {user.lastname} </h3>
                      <p className="font-bold">{user.position}</p>
                    </div>
                  </div>
                })
              }
            </OwlCarousel >
            {/* <OwlCarousel {...settings} className="border border-t-4 border-b-4">
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
          </OwlCarousel > */}
          </div>

          <div className="text-center md:p-12 p-10 bg-white" data-aos="fade-up" data-aos-duration="2000">
            <h3 className="md:text-2xl text-xl ">Our Clients</h3>
            <p className="md:text-3xl text-2xl p-5 font-bold">Some of our happy Clients</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam nesciunt, ducimus
              praesentium placeat debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <OwlCarousel {...settings2} >
            <div className="owlcarousel_logo p-20">
              <div className="logo border border-solid shadow-2xl border-white h-48 w-48 mx-auto  rounded-xl">
                <img src="./evolve.png" className="h-full rounded-xl" />
              </div>
            </div>
          </OwlCarousel >
        </div>
      </div>
    </div>

  );
}

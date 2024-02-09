import React from 'react'

const about = () => {
  return (
         <div className='md:px-16 bg-blue-200 px-6 font-serif'>
             <div className='contact-img text-center p-16 text-white'>
                    <div className='career lg:text-4xl text-2xl font-bold' data-aos="zoom-in" data-aos-duration="2000" >About Us</div>
                    <div className='flex justify-center p-3' data-aos="fade-up" data-aos-duration="2000">
                        <a href="/" className='pr-2 hover:text-blue-800'>Home</a> /
                        <p className='pl-2'>About</p>
                    </div>
                </div>

            <div className="body_mid h-auto bg-white w-full md:p-9  xl:flex xl:justify-between ">
          <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="zoom-in" data-aos-duration="2000">
            <h1 className="lg:text-4xl text-3xl text-blue-500 font-bold md:p-5 p-3">Learn</h1>
            <p className="lg:p-12 lg:text-xl lg:w-full md:text-base md:w-5/6 md:p-10 p-3 text-sm w-full ">
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
              <button className="bg-blue-400 h-9 text-lg rounded-md cursor-pointer m-4 hover:bg-white "><a href="" className="md:p-3 p-2">Read more</a></button>
            </div>
          </div>
          <div className="right m-5 lg:w-1/2">
            <img src={"/download1.png"} alt="" className="w-full h-full" data-aos="fade-up" data-aos-duration="2000"/>

          </div>
        </div>


    </div>
  )
}

export default about
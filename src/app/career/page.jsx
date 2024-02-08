import React from 'react'

const career = () => {
    return (
        <div className='pl-16 pr-16'>
            <div className='careerImage text-center p-16 text-white'>
                <div className='text-4xl font-bold'>Career</div>
                <div className='flex justify-center p-5'> <a href="">Home  /</a>
                <p className='pl-4'>Career</p>
                </div>
            </div>

            <div className='flex justify between w-full m-5'>
                <div className='w-1/2 pt-20 pl-8'>
                    <p className='font-semibold'>BE PART OF OUR TEAM</p>
                    <p className='text-3xl font-bold pt-3'>Career and Culture at Index IT Hub</p>
                    <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quia enim magnam aspernatur nisi hic quisquam facere eius quaerat voluptates voluptas velit, vitae voluptatum at consequatur. Inventore magnam dolorem a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptate! Sapiente, minima labore? Facilis, repellendus. Nihil facilis quae, optio illum ab alias facere, aliquam blanditiis consequuntur adipisci laboriosam, magni tempora?</p>
                </div>

                <div className='m-6 w-1/2'>
                    <img src= {"/career2.jpg"} alt="" className='h-full w-full'/>
                </div>
            </div>


            <div>
                <div>
                    <p>Our Job vacancies</p>
                    <p>Our Latest Job Vacancy</p>
                </div>

                <div>
                    <h1>Frontend Developer</h1>
                    <p>Functional Title: Developer Team</p>
                    <p>No. of Vacancies:[3]</p>
                    <p>offered salary: Negotiable</p>
                    <p>Posted Date: 2024 4th feb</p>
                    <p>Apply Before(Deadline):2024 4th march</p>
                    <button>Read More</button>
                </div>

            </div>
        </div>
    )
}

export default career
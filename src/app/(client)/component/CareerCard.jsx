import React from 'react'

const CareerCard = ({career}) => {


    let {career_title, vacancyNumber, offered_salary, posted_date, deadline} = career
    return (
        <div className='md:w-96 h-auto rounded-lg flex flex-col text-center pt-12 mt-10 shadow-xl hover:bg-blue-200 lg:mb-24 mb-14' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-center md:text-xl font-bold'>{career_title}</h1>
            {/* <p className='md:text-lg text-sm font-semibold md:m-4 m-1'>Functional Title: {career_title}</p> */}
            <p className='md:text-lg md:m-2 m-1 text-sm'>No. of Vacancies:[{vacancyNumber}]</p>
            <p className='md:text-lg md:m-2 m-1 text-sm'>offered salary: {offered_salary}</p>
            <p className='md:text-lg md:m-2 m-1 text-sm'>Posted Date: {posted_date}</p>
            <p className='md:text-lg md:m-2 m-1 text-sm'>Apply Before(Deadline):{deadline}</p>
            <div className='flex justify-center'>
                <button className='md::m-5 m-3 bg-blue-500 text-white md:w-28 w-24 rounded-2xl md:h-9 h-7 hover:bg-blue-700 md:text-lg text-sm'>Read More</button>
            </div>
        </div>
    )
}

export default CareerCard
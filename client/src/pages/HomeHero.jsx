import React from 'react'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <>
         <section className='backgroundImage min-h-[510px] md:min-h-screen bg-cover pb-14 md:bg-center bg-[position:80%_center] max-md:pt-10 md:pt-20 lg:pt-24 xl:pt-28'>
            <div className=' space-y-16 md:space-y-32 mx-auto'>
                <div className='flex text-start items-start flex-col max-md:ps-20 md:ps-18 lg:ps-20 xl:ps-28 max-md:pe-2 md:pe-60 lg:pe-[450px] xl:pe-[500px] px-20 max-sm:px-8 gap-y-3'>
                    <p className='font-bold  md:text-[40px] lg:text-[45px] xl:text-[55px] max-sm:text-[30px] max-md:text-[40px]  font-poppins text-white sm:leading-[45px] max-md:leading-[38px] md:leading-[50px] lg:leading-[60px]'>Connecting Companies <span className='font-extralight text-gray-300'>with</span> <span className='text-[#ff7124]'>Exceptional Talent</span></p>
                    <p className='mb-4 text-white/85 md:leading-7 md:text-[17px]'>Our mission is to bridge the gap between ambitious companies and exceptional talent, helping projects succeed and careers grow.</p>
                    <div className="flex flex-row max-[375px]:flex-col gap-4 w-full max-sm:mt-4 max-md:mt-6">
                        <button className='text-[16px] block font-medium bg-[#fe6411] hover:bg-[#ca5212] transition-all duration-300 text-white rounded-md px-5 max-md:py-[10px] md:py-[13px] capitalize'>explore jobs</button>
                        <button className='text-[16px] block font-medium border-[1.5px] px-7  max-md:py-2 md:py-3.5 rounded-md border-white  text-white hover:bg-white hover:text-black transition-all duration-300'>hire talent</button>
                    </div>
                </div> 

                <div className='grid grid-cols-1 min-[600px]:grid-cols-2 gap-6 mx-auto md:px-20 lg:px-32 xl:px-48 max-md:px-8 mt-12 md:mt-24'>
                    <div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl md:py-4 lg:py-6 max-md:px-5 max-md:py-5 md:px-6 lg:px-10 text-center'>
                        <p className='font-bold capitalize text-[22px] mb-auto'>for developers</p>
                        <p className='pt-1 pb-2 text-[14px] mb-auto'>Show up your skills, find exciting projects, and grow your career skills with top companies throughout the world</p>
                        <button className='mt-auto bg-[#fe6411] text-white py-2.5 px-4 text-[12px]  rounded-md capitalize shadow-lg hover:bg-[#ca5212] transition-all duration-300'>Join as a developer</button>
                    </div>

                    <div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl md:py-4 lg:py-6 max-md:px-5 md:px-6 max-md:py-5 lg:px-10 text-center'>
                        <p className='font-bold capitalize text-[22px] mb-auto'>for employers</p>
                        <p className='pt-1 pb-2 text-[14px] mb-auto'>connect with exceptional talent to compelete your projects efficiently and professionally</p>
                        <Link to='/Dashboard/AddJobPage' className='bg-blue-600 text-white py-2.5 px-12  text-[12px] rounded-md capitalize shadow-lg hover:bg-blue-800/95 transition-all duration-300'>Hire Talent</Link>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default HomeHero
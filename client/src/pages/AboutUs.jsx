import React, { useState } from 'react'
import imageBack from './../assets/good.jpg';
import imageOne from './../assets/ok1.jpg';
import myPhoto from './..//assets/myPhoto.jpg';
import { BiCheckCircle } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { DiJavascript } from 'react-icons/di';
import { SiReact, SiReactrouter, SiSwiper, SiTailwindcss } from 'react-icons/si';
import Teammates from './../../Teammates.js';
import TeammateCard from '../components/TeammateCard.jsx';
import WebsiteFeatures from './../../Features.js';
import FeatureCard from './../components/FeatureCard.jsx'
import techsInMyWebsite from './../../thechInMyApp.js';
import Technology from '../components/Technology.jsx';



const AboutUs = () => {
  return (
    <div>
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center h-[350px] relative'>
                <img src={imageBack} className='h-full w-full object-cover' alt="background" />
                
                {/* overlay */}
                <div className="overlay absolute inset-0 w-full h-full shadow-lg backdrop-blur-sm bg-black/25"></div>
               
                {/* text on the image */}
                <div className="z-10 absolute flex flex-col justify-center text-center items-center h-full px-8">
                  <p className='text-white mb-2 font-bold text-3xl capitalize'>about our project</p>
                  <p className='text-gray-200'>This is a react practice website for managing list of developers and jobs and hiring people.</p>
                  <p className='text-gray-200'>Build with react to practice dynamic data management and state handling.</p>
                </div>
            </div>
        </div>

         <div className='mt-10 mb-12'>
            <div className='md:px-12 max-md:px-6 flex justify-center items-center my-4'>
                <div className='flex-grow h-[1.5px] bg-gray-300 '></div>
                <p className='mx-3 text-gray-700 font-semibold text-[18px] md:text-[22px] capitalize'>overview & <span className='text-orange-500'>purpose</span></p>
                <div className='flex-grow h-[1.5px] bg-gray-300 '></div>
            </div>

            <div className='md:px-12 max-md:px-6 grid grid-cols-1 min-[600px]:grid-cols-2 gap-x-5 gap-y-5'>
                  <div className='w-full h-full md:h-[350px] overflow-hidden rounded-md'>
                      <img src={imageOne} className='size-full object-cover rounded-sm' alt="" />
                  </div>

                  <div className='flex flex-col gap-y-4'>
                    <p className=''>I created this project to promote my skills and knowledge in React program by developing a practical application that simulates managing developers and jobs listings, using Json server as Database. The goal is to pratice working with dynamic data, routing, react hooks and state management in a real-world scenario.</p>
                    <ul className='flex flex-col gap-y-2'>
                      <li className='flex items-center font-poppins font-medium'><span className='text-lg pe-1'><BiCheckCircle/></span> Building dynamic interfaces</li>
                      <li className='flex items-center font-poppins font-medium'><span className='text-lg pe-1'><BiCheckCircle/></span> Managing and displaying data</li>
                      <li className='flex items-center font-poppins font-medium'><span className='text-lg pe-1'><BiCheckCircle/></span> Implementing react hooks and router</li>
                      <li className='flex items-center font-poppins font-medium'><span className='text-lg pe-1'><BiCheckCircle/></span> Responsive and intuitive UI design</li>
                    </ul>
                  </div>
            </div>

            <div className="md:px-12 max-md:px-6 keyFeatures my-16">
              <div className='flex justify-center items-center my-6'>
                    <div className='flex-grow h-[1.5px] bg-gray-300'></div>
                    <p className='capitalize text-center font-poppins font-semibold text-[22px] mx-4'>key featueres of <span className='text-[#0274da]'>this project</span></p>
                    <div className='flex-grow h-[1.5px] bg-gray-300'></div>
              </div>
              <div className=' text-center'>
                    <Swiper
                      modules={[Navigation,Pagination,Scrollbar]}
                      spaceBetween={20}
                      // slidesPerView={2}
                      breakpoints={{
                        0:{
                          slidesPerView:1,
                        },
                        600:{
                          slidesPerView:2,
                        },
                        924:{
                          slidesPerView:3,
                        },
                        1206:{
                          slidesPerView:4,
                        }
                      }}
                      pagination={{clickable:true}}
                      onSlideChange={()=>console.log('slide change')}
                      onSwiper={(swiper)=>console.log(swiper)}
                    >
                        {WebsiteFeatures.map((feature)=>(
                          <SwiperSlide>
                             <FeatureCard  key={feature.id} singleFeature={feature}/>
                          </SwiperSlide> 
                        ))}
                    </Swiper>
              </div>
            </div>

            <div className='md:px-12 max-md:px-6 mb-14 tech'>
               <div className='flex justify-center items-center my-6'>
                    <div className='flex-grow h-[1.5px] bg-gray-300'></div>
                    <p className='capitalize text-center font-poppins font-semibold text-[22px] mx-4'> <span className='text-orange-500'>Technologies </span>used in this project</p>
                    <div className='flex-grow h-[1.5px] bg-gray-300'></div>
              </div>

                <div className='space-x-6'>
                  <Swiper
                   breakpoints={{
                        0:{
                          slidesPerView:1,
                        },
                        450:{
                          slidesPerView:2,
                        },
                        660:{
                          slidesPerView:3,
                        },
                        950:{
                          slidesPerView:4,
                        },
                        1206:{
                          slidesPerView:5,
                        }
                      }}
                    spaceBetween={20}
                    modules={[Navigation,Pagination,Scrollbar]}
                    pagination={{clickable:true}}>
                        {techsInMyWebsite.map((tech)=>(
                          <SwiperSlide className='mb-9'>
                              <Technology key={tech.id} tech={tech}/>
                          </SwiperSlide>
                        ))}
                  </Swiper>
                </div>
            </div>

            <hr className='mb-8'/>

            <div className="aboutMe mb-16 grid grid-cols-12 max-md:mx-auto px-10 md:px-20 max-md:gap-y-4">
              <div className='image capitalize font-bold col-span-full md:col-span-3 lg:col-span-2'>
                  <img src={myPhoto} className='rounded-full object-cover ring-[3px] ring-orange-500 border-[3px] border-white w-36 h-36' alt="" />
              </div>

              <div className='description col-span-full md:col-span-9 lg:col-span-10'>
                <p className='text-[24px] font-medium mb-2'>About <span className='text-blue-600'>myself</span></p>
                <p className=''>This is me Amir Khan Ghulami, an aspiring frontend developer passionate about building well-responsive and interactive web applications using React and Tailwind CSS. This project is a part of my journey to enhance my knowledge and skills in modern web development.</p>
              </div>
            </div>

            <div className='ourteam md:px-12 max-md:px-6 mb-6'>
              <div className='flex justify-center items-center my-6'>
                    <div className='flex-grow h-[1.5px] bg-gray-300'></div>
                    <p className='capitalize text-center font-poppins font-semibold text-[22px] mx-4'>meet our <span className='text-orange-500'> teammates</span></p>
                    <div className='flex-grow h-[1.5px] bg-gray-300'></div>
              </div>

              <div className="team">
                  <Swiper
                    breakpoints={{
                      0:{
                          slidesPerView:1,
                      },
                      450:{
                          slidesPerView:2,
                      },
                      660:{
                          slidesPerView:3,
                      },
                      950:{
                          slidesPerView:4,
                      },
                      1200:{
                          slidesPerView:5,
                      }
                    }}
                    spaceBetween={20}
                    // slidesPerView={4}
                    modules={[Navigation,Pagination,Scrollbar]}
                    pagination={{clickable:true}}
                  >
                  {Teammates.slice().reverse().map((memeber)=>(
                      <SwiperSlide>
                            <TeammateCard detail={memeber} key={memeber.id}/>
                      </SwiperSlide>
                  ))}
                  </Swiper>
              </div>              
            </div>
         </div>
    </div>
  )
}

export default AboutUs
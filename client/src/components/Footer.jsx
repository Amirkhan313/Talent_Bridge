import React from 'react'
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaGithub, FaInstagram } from 'react-icons/fa6'
import image from './../assets/logoo2.png'
import { NavLink } from 'react-router-dom'
import { SiWhatsapp } from 'react-icons/si'

const Footer = ({className}) => {
  return (
    <div>
        <div className={`${className} md:px-12 max-md:px-8 bg-gray-900/90 pb-5 pt-10`}>
            <div className='grid grid-cols-1 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[950px]:grid-cols-4 gap-x-12 font-inter max-md:flex-col max-md:space-y-6'>
                <div className=' space-y-4'>
                    <div className="flex flex-col items-start space-y-1">
                        <img src={image} className="w-[120px] h-10" alt="" />
                        <p className="tracking-[0.3em] text-[12px] capitalize text-white">Talent Bridge</p>
                    </div>
                    <p className='text-start text-[16px] font-inter font-medium text-gray-200'>Where businesses grow, developers thrive, and careers shape a better future.</p>
                </div>

                <div className=" menu text-start">
                    <p className='capitalize font-bold text-lg mb-3 text-white'>links</p>
                    <nav className='flex flex-col text-start font-poppins text-gray-200 space-y-1.5'>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/">Home</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/JobsPage">Jobs</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/PeoplePage">Developers</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/ProductsPage">Products</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/Blogs">Blogs</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/ContactUs">Contact Us</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/AboutUs">About Us</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/PrivacyPolicy">Privacy Policy</NavLink>
                    </nav>
                </div>

                 <div className=" service text-start">
                    <p className='capitalize font-bold text-lg mb-3 text-white'>our services</p>
                    <nav className='text-start flex flex-col gap-x-3 font-poppins text-gray-200 space-y-1.5'>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/webDev">Web development</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/projectManagmet">project management</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/graohicDesign">graphic designing</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/jobOpp">offer great jobs opportunities</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/mobileDev">mobile development</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/netMarketing">network marketing</NavLink>
                        <NavLink className="hover:text-blue-500 hover:font-medium text-[15px] capitalize" to="/UX_UI_Design">UX / UI design</NavLink>
                    </nav>
                </div>

                <div className=' Contact text-start space-y-12'>
                    <div className='flex flex-col gap-y-3'>
                        <p className='text-[20px] font-bold capitalize text-white'>follow us</p>
                        <ul className='socialMedia flex gap-x-4'>
                            <li className='bg-[#0274da] h-6 w-6 rounded-md text-white flex justify-center items-center'><a target="_blank" href="https://www.linkedin.com/in/amir-khan-ghulami-451ab8377/" className='text-[18px] hover:scale-110 transition-all duration-300'><FaLinkedin /></a></li>
                            <li className='bg-[#0274da] h-6 w-6 rounded-md text-white flex justify-center items-center'><a target="_blank" href="https://www.instagram.com/amirkhan_ghulami/" className='text-[18px] hover:scale-110 transition-all duration-300'><FaInstagram /></a></li>
                            <li className='bg-[#0274da] h-6 w-6 rounded-md text-white flex justify-center items-center'><a  target="_blank" href="https://github.com/Amirkhan313" className='text-[18px] hover:scale-110 transition-all duration-300'><FaGithub /></a></li>
                            <li className='bg-[#0274da] h-6 w-6 rounded-md text-white flex justify-center items-center'><a target="_blank" href="https://wa.me/93779521361?text=Hello%20TalentBridge,%20I%20am%20interested%20in%20your%20services." className='text-[18px] hover:scale-110 transition-all duration-300'><SiWhatsapp /></a></li>
                            <li className='bg-[#0274da] h-6 w-6 rounded-md text-white flex justify-center items-center'><a target="_blank" href="https://t.me/@codeDeveloper72" className='text-[18px] hover:scale-110 transition-all duration-300'><FaTelegram /></a></li>
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-[20px] mb-2 font-bold capitalize text-white'>contact us</p>
                        <div className="contact flex flex-col items-start space-y-1">
                            <p className='font-inter text-[14px] text-gray-200'> ghulamiamirkhan1@gmail.com</p>
                            <p className='font-inter text-[14px] text-gray-200'> +93 779 521 361</p>
                            <p className='font-inter text-[14px] text-gray-200'> +93 776 415 371</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className='bg-gray-600 md:px-12 max-md:px-8 pt-2 pb-4'>
            <p className='capitalize text-center text-[14px] font-poppins mt-3 font-medium text-gray-200'>@2026 <span className='text-orange-400'>talent </span> <span className='text-blue-500'>bridge.</span> All rights reserved.</p>
            <p className='capitalize text-center text-[13px] font-poppins mt-1 font-medium text-gray-200'>Designed by <span className='text-blue-500'>amir khan </span><span className='text-orange-400'>ghulami.</span></p>
        </div>
    </div>
  )
}

export default Footer
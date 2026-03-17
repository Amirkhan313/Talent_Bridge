import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import image from './../assets/logoo2.png'
import { IoClose } from "react-icons/io5";
import { SquareArrowRightIcon } from 'lucide-react';
import { IoIosArrowDown } from 'react-icons/io';


const ResponsiveHeader = ({isOpen,handleShowMenu}) => {
    const [showDropwdown,setShowDropdown] = useState(false);
    const dropdownMenu = useRef();
    const closeNavbar = useRef();
    const location = useLocation();
    const moreRoutes = ['/AboutUs','/ContactUs','/Blogs'];
    const isMoreActive = moreRoutes.includes(location.pathname);
    

    useEffect(()=>{
        const handleCloseDropdown = (e)=>{
            if(dropdownMenu.current && !dropdownMenu.current.contains(e.target)){
                setShowDropdown(false);
                setTimeout(() => {
                    handleShowMenu(false)
                }, 100);
            }
        }
            document.addEventListener('mousedown',handleCloseDropdown);
            return ()=>{
                document.removeEventListener('mousedown',handleCloseDropdown);
            }
    },[]);
    
    const handleShowDropdown = ()=>{
        setShowDropdown(prev=>!prev);
    }
  const LinkClass = ({ isActive }) =>
  `inline-block w-fit ${isActive ? 'text-[#0274da] font-medium' : 'hover:border-b-2 transition-all duration-200 border-indigo-700 cursor-pointer'}`;
  const style = "text-[18px] font-medium"

  return (
    <div ref={closeNavbar} className={`${isOpen? 'OpenNav':'closeNav'} fixed shadow-lg  w-full space-y-[5px] md:hidden bg-gray-200  h-fit py-3 
    `}>
        <div className='flex justify-between items-center  text-black pt-2 pb-5 md:px-12 max-md:px-6 border-b-[3px]'>
            <div className="logo space-y-1 flex-col items-center justify-center">
                <img src={image} className='w-24 h-7 ms-1' alt=""/>
                <p className="font-light text-black text-[12px] tracking-[3px] capitalize">Talent Bridge</p>
            </div>

            <div onClick={handleShowMenu}  className='flex cursor-pointer justify-between items-center'>
                <span className='capitalize text-black'>close</span>
                <IoClose className='w-7 h-7 text-black'/>
            </div>
        </div>
        <div className='text-black px-8 py-2 mb-8 flex flex-col'>
            <div  className="bg-blue-600/80 py-1.5 px-3 rounded-md text-white w-28 mb-6"><NavLink onClick={()=>handleShowMenu(false)} to="/Dashboard">Dashboard</NavLink></div>
            <nav className="space-y-4">
                <p className={style}><NavLink onClick={()=>handleShowMenu(false)} className={LinkClass} to="/">Home</NavLink></p>
                <p className={style}><NavLink onClick={()=>handleShowMenu(false)} className={LinkClass} to="/JobsPage">Jobs</NavLink></p>
                <p className={style}><NavLink onClick={()=>handleShowMenu(false)} className={LinkClass} to="/PeoplePage">Developers</NavLink></p>
                <p className={style}><NavLink onClick={()=>handleShowMenu(false)} className={LinkClass} to="/Services">Services</NavLink></p>
                <div ref={dropdownMenu}>
                    <button  className='flex items-center'>
                        <p onClick={handleShowDropdown} className={`text-[18px] font-medium flex items-center justify-center transition-all duration-200 ${isMoreActive? "text-[#0274da] font-semibold": "hover:text-[#0274da] hover:font-medium"}`}>More</p>
                        <IoIosArrowDown className={`${showDropwdown?'rotate-180':'rotate-0'}`}/>
                    </button>
                        { 
                        <div className={`ps-10 flex flex-col DropdownMenu transition-all duration-300 space-y-2.5 ${showDropwdown ? 'block':'hidden'}`}> 
                            <NavLink onClick={()=>handleShowMenu(false)} to="/AboutUs" className={LinkClass}>
                                    <div className='flex items-center text-[13px]'>
                                        <SquareArrowRightIcon className='w-6 h-4'/>
                                        <p>About US</p>
                                    </div>
                            </NavLink>

                            <NavLink onClick={()=>handleShowMenu(false)} to="/ContactUs" className={LinkClass}>
                                    <div className='flex items-center text-[13px]'>
                                        <SquareArrowRightIcon className='w-6 h-4'/>
                                        <p>Contact US</p>
                                    </div>
                            </NavLink>

                            <NavLink onClick={()=>handleShowMenu(false)}  to="/Blogs" className={LinkClass}>
                                    <div className='flex items-center text-[13px]'>
                                        <SquareArrowRightIcon className='w-6 h-4'/>
                                        <p>Blogs</p>
                                    </div>
                            </NavLink>
                        </div>
                        }
                </div>
            </nav>
        </div>
    </div>
  )
}

export default ResponsiveHeader
import { NavLink, useLocation } from "react-router-dom"
import image from './../assets/logoo2.png'
import { FiMenu} from "react-icons/fi";
import { useEffect, useState } from "react";
import ResponsiveHeader from "./ResponsiveHeader";
import {  ArrowDown} from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react";


const Navbar = ({className}) => {
    const [showMenu,setShowMenu] = useState(false);
    const [renderMenu,setRenderMenu] = useState(false);
    const [showDropdown,setShowDropdown] = useState(false);
    const dropdown = useRef();
    const arrowIcon = useRef();
    const location = useLocation();
    const moreRoutes = ["/AboutUs","/ContactUs","/Blogs"];
    const isMoreActive = moreRoutes.includes(location.pathname);

    const handleShowMenu = ()=>{
        setShowMenu(true);
        setRenderMenu(true);
    }

    const handleCloseMenu = () => {
        setShowMenu(false);

        setTimeout(() => {
            setRenderMenu(false);
        }, 500); // same as animation duration
    };

    useEffect(()=>{
        const handleCloseDropdown = (e)=>{
            if(dropdown.current && !dropdown.current.contains(e.target)){
                setShowDropdown(false)
            };
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
  `text-[14px] ${isActive ? 'text-[#0274da] font-poppins font-semibold' : 'hover:text-[#0274da] hover:font-medium  transition-all duration-200'}`;

    return (
        <div className="sticky top-0 z-50">
         {renderMenu && (
    <ResponsiveHeader
        handleShowMenu={handleCloseMenu}
        isOpen={showMenu}
    />
)}
            <div className={`${className} w-full flex items-center justify-between bg-white  md:px-12 max-md:px-8 py-4 font-poppins font-medium text-black border-b-[2px]`}>
                <div className="flex flex-col items-center space-y-1">
                    <img src={image} className="h-[25px] w-[90px]" alt="" />
                    <p className="text-[8px] tracking-[0.3em] capitalize">Talent Bridge</p>
                </div>
                <div className="flex items-center gap-x-10">
                     <FiMenu onClick={handleShowMenu} className="hidden w-8 h-8 max-md:block"/>
                    <nav className="flex items-center justify-center space-x-5 max-md:hidden">
                        <NavLink className={LinkClass} to="/">Home</NavLink>
                        <NavLink className={LinkClass} to="/JobsPage">Jobs</NavLink>
                        <NavLink className={LinkClass} to="/PeoplePage">Developers</NavLink>
                        <NavLink className={LinkClass} to="/ServicesPage">Services</NavLink>
                        <div ref={dropdown}>
                            <button onClick={handleShowDropdown} className={`text-[14px] flex items-center justify-center transition-all duration-200
                                ${isMoreActive? "text-[#0274da] font-semibold": "hover:text-[#0274da] hover:font-medium"}`}>
                                    <p>More</p>
                                    <IoIosArrowDown  ref={arrowIcon} className={`w-4 h-4 ${showDropdown?"rotate-180":"rotate-0"}`}/>    
                            </button> 
                            {showDropdown && (
                                <div  className="bg-white rounded-md border shadow-md ps-5 pe-10 py-3 flex flex-col gap-y-2 absolute right-36 top-20 dropdown">
                                    <NavLink className={LinkClass} onClick={()=>setShowDropdown(false)} to="/AboutUs">About US</NavLink> 
                                    <NavLink className={LinkClass} onClick={()=>setShowDropdown(false)} to="/ContactUs">Contact US</NavLink> 
                                    <NavLink className={LinkClass} onClick={()=>setShowDropdown(false)} to="/Blogs">Blogs</NavLink>
                                </div> 
                            )}
                        </div>
                    </nav>
                    <NavLink className="bg-blue-600/80 hover:bg-orange-500 max-md:hidden hover:text-whi text-[14px] text-white py-1.5 font-poppins font-light px-3 rounded-md transition-all duration-500" to="/Dashboard">Dashboard</NavLink>
               </div>
            </div>
        </div>
    )
}
export default Navbar

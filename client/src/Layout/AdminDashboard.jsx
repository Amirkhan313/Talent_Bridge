import React, { useEffect } from 'react'
import Dashboard from '../pages/AdminDashboardPages/Dashboard'
import { NavLink, Outlet } from 'react-router-dom'
import myPhoto from './../../src/assets/3.png'
import { FaSearch } from 'react-icons/fa'
import { IoNotifications } from 'react-icons/io5'
import {Toaster} from 'sonner'
const AdminDashboard = () => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousHeight = document.body.style.height
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.height = previousHeight
    }
  }, [])

  return (
     <>
     <div className='flex h-screen overflow-hidden'>
        <div className='sticky top-0 left-0 h-full w-3/12 flex-shrink-0 bg-[#103352] overflow-y-auto'> 
            <Dashboard />
        </div>

        <div className='flex w-full min-h-0 flex-col'>
            <div className="Header sticky top-0 z-10 flex justify-between items-center px-8 py-4 capitalize bg-white border-2">
                <div className="search flex items-center gap-x-5 min-w-[400px]">
                    <input type="text" className='text-[14px] px-5 py-2 rounded-[15px] text-white bg-[#173f62] w-full'  placeholder='search here'/>
                    <FaSearch className='bg-[#173f62] cursor-pointer h-9 w-10 p-[11px] rounded-full text-white '/>
                </div>
                <div className='flex gap-5 justify-center items-center text-[#153755] font-medium'>
                    <IoNotifications />
                    <div className='flex items-center gap-x-3'>
                    <p>Amir Khan Ghulami</p>
                    <img src={myPhoto} className='h-10 w-10 rounded-full' alt=""/>
                    </div>
                </div>
            </div>
             <Toaster  richColors toastOptions={{
                classNames:{
                success: "bg-green-500",
                error : "bg-red-500"
                }
                }}
                />
            <div className="content flex-1 min-h-0 overflow-y-auto p-6 bg-blue-50">
                <Outlet/>
            </div>
        </div>
     </div>
     </>
  )
}

export default AdminDashboard

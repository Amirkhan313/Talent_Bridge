import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../../src/assets/logoo2.png'
import { RxDashboard } from 'react-icons/rx'
import { MdDeveloperBoard, MdDeveloperMode} from 'react-icons/md'
import { MdWork } from 'react-icons/md'
import { GrWorkshop } from 'react-icons/gr'
import { MessageSquareTextIcon } from 'lucide-react'
import { LuSettings } from 'react-icons/lu'
import { FiLogOut } from 'react-icons/fi'

const Dashboard = () => {
  const activeClass = ({isActive})=>`rounded-s-md  transition-all duration-300 w-full my-2 flex justify-start items-center px-3 py-2 rounded-s-md  gap-x-2 ${isActive ? 'bg-white text-black':'text-white hover:bg-white hover:text-black'}`
  return (
    <>
      <div className="sidebar bg-[#103352] min-h-full ps-6 py-5 flex flex-col justify-between w-full text-white">
        <div className='space-y-10'>
            <div className="logo">
              <img src={logo} className='h-10 w-[130px]' alt="logo" />
              <p className='capitalize tracking-[0.2em] text-[13px]'>talent bridge</p>
            </div>

            <div className="menu space-y-3">
                  <NavLink  to="/Dashboard" end className={activeClass}>
                      <RxDashboard/>
                      <p> Dashboard</p>
                  </NavLink>

                  <NavLink to="/Dashboard/AddNewDeveloper" className={activeClass}>
                      <MdDeveloperMode/>
                      <p>Add Developer</p>
                  </NavLink>

                  <NavLink to="/Dashboard/DevelopersList" className={activeClass}>
                      <MdDeveloperBoard/>
                      <p >View Developers</p>
                  </NavLink>

                  <NavLink to="/Dashboard/AddJobPage" className={activeClass}>
                      <MdWork/>
                      <p>Add Job</p>
                  </NavLink>

                  <NavLink to="/Dashboard/JobsList" className={activeClass}>
                      <GrWorkshop/>
                      <p >View Jobs</p>
                  </NavLink>

                  <NavLink to="/Dashboard/Messages" className={activeClass}>
                      <MessageSquareTextIcon/>
                      <p>Messages</p>
                  </NavLink>

                  <NavLink to="/Dashboard/Settings" className={activeClass}>
                      <LuSettings/>
                      <p>Settings</p>
                  </NavLink>
            </div>
        </div>
          <NavLink className={activeClass} to="/">
            <FiLogOut/>
            <p>Log Out</p>
          </NavLink>
    </div>
    </>
  )
}

export default Dashboard

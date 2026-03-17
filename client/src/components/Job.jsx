import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Job = ({job}) => {
  const description = job.description
  const [showAllDescription,setShowAllDescription] = useState(false);
  // const handleShowMoreDescription = ()=>{
  //     // if(!showAllDescription) 
  //     //   setShowAllDescription(true)
  //     // else
  //     //   setShowAllDescription(false)
  //     setShowAllDescription(prev=>!prev);
  // }
  
  return (
    <div className='mb-8 bg-white shadow-lg text-black flex flex-col max-[480px]:h-[400px] pb-4 rounded-lg overflow-hidden w-full'>
      <div className="h-36 max-[480px]:h-80 w-full overflow-hidden">
        <img
            src={job.image}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            alt=""
          />
      </div>

       <div className="flex flex-col px-4 mt-2">
          <div className="flex items-center gap-x-1">
              <p className='font-bold my-1 max-[540px]:text-[12px] max-[520px]:text-[14px] text-[14px]'>{job.title}</p>
              <p className='text-gray-700 text-[12px]'>( {job.type} )</p>
          </div>
          <p
          className={`text-[14px] ${
            showAllDescription ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
          {/* <p onClick={()=>handleShowMoreDescription()} className='text-indigo-700 text-[11px] text-start capitalize mt-2 cursor-pointer rounded-md'>more</p> */}
          {/* <p onClick={()=>setShowAllDescription(!showAllDescription)} className='text-indigo-700 text-[11px] text-start capitalize mt-2 cursor-pointer rounded-md'>more</p> */}
          <p onClick={()=>setShowAllDescription(prev=>!prev)} className='text-blue-600 text-[11px] text-start capitalize mt-2 cursor-pointer rounded-md hover:font-bold'>{!showAllDescription? "more":"less"}</p>
          <p className='text-[#0274da] text-[11px] mb-0 mt-4 '>{job.sallery} | monthly</p>
          <hr className='my-2 mt-auto'/>
          <div className='flex items-center justify-between mt-auto'>
              <p className='text-[#fe6411] text-sm font-semibold'>{job.location}</p>
              <Link to={`/job/${job.id}`} className='text-xs py-1.5 px-3 bg-[#0274da] hover:bg-[#0274da] border-0 text-white font-normal rounded-md text-center transition-all duration-200'>see more</Link>
          </div>
       </div>
    </div>
  )
}

export default Job
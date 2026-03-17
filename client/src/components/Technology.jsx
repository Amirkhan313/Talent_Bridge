import React from 'react'

const Technology = ({tech}) => {
  return (
    <div className='flex justify-center items-center font-poppins font-medium bg-white rounded-md shadow-xl py-8 min-[450px]:py-6  gap-x-2 mb-0.5'>
        <tech.icon className='text-red-400 w-12 h-12 min-[450px]:w-10 min-[450px]:h-10'/>
        <span className='text-[30px] min-[450px]:text-[20px]'>{tech.name}</span>
    </div>
  )
}

export default Technology
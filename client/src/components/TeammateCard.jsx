import React from 'react'

const TeammateCard = ({detail}) => {
  return (
    <>
        <div className='flex flex-col rounded-md overflow-hidden bg-white items-center justify-center shadow-[0_0_10px_#ccc] text-center xl:h-[300px] h-[360px] mb-10'>
            <div className='mb-5 h-full w-full overflow-hidden'>
                <img src={detail.image} alt=""  className='size-full object-top object-cover transition-all duration-300 hover:scale-110 overflow-hidden'/>
            </div>
            <p className='font-medium text-[18px]'>{detail.fullName}</p>
            <p className='text-[12px] text-gray-600 mb-4'>{detail.field}</p>
        </div>
    </>
  )
}

export default TeammateCard
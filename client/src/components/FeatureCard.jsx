import React from 'react'

const FeatureCard = ({singleFeature}) => {
  return (
    <>
        <div className='shadow-md mb-10 border-[1px] border-gray-200 rounded-md min-h-52 px-4 py-4 flex flex-col space-y-3 justify-between items-center'>
            <singleFeature.icon className="w-8 h-8 text-[#fe6411]"/>
            <p className='font-poppins font-medium mb-1 text-[15px] capitalize'>{singleFeature.feature}</p>
            <p className='text-[14px] !mb-auto'>{singleFeature.description}</p>
        </div>
    </>
  )
}

export default FeatureCard
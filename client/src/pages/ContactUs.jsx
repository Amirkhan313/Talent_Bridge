import React from 'react'
import image from './../assets/ok4.png';
const ContactUs = () => {
  return (
    <div className='bg-blue-50 md:px-12 max-md:px-6 pb-8 pt-4'>
            <div className='text-center mx-auto w-[65%] mt-2 mb-5'>
                <p className='text-[22px] font-inter font-semibold capitalize text-[#0274da]'>Talk to <span className='text-[#fe6411]'>us</span></p>
                <p className='text-gray-700 text-[14px]'>we would be so glad to here from you! You can either send us message, feedback, ask questions or offer new features to develope a well design for our website.</p>
            </div>
            
            <div className='grid grid-cols-12 gap-x-6 items-center'>
                <div className='col-span-6 max-md:hidden flex flex-shrink-0 rounded-lg shadow-md overflow-hidden h-[530.8px]'>
                    <img src={image} alt="" className='w-full object-cover rounded-lg transition-all duration-300 hover:scale-110'/>
                </div>

                <div className='col-span-6 max-md:col-span-12 rounded-sm shadow-md h-fit py-6 px-8 bg-white'>
                    <p className='capitalize text-center font-bold text-[20px] mb-4'>Contact <span className='text-[#fe6411]'>us</span></p>
                    <form action="">
                        <div className="fullname w-full">
                            <div className='w-ful flex flex-col'>
                                <label htmlFor="name" className='text-black/65 text-[15px]'>Name</label>
                                <input type="text" id='name' placeholder='type your name' className='bg-blue-100/70 px-3 rounded-sm py-1.5 mb-4' />
                            </div>

                            <div className='w-full flex flex-col'>
                                <label htmlFor="lastname" className='text-black/65 text-[15px]'>Last Name</label>
                                <input type="text" id='lastname' placeholder='type your lastname' className='bg-blue-100/70 px-3 rounded-sm py-1.5 mb-4' />
                            </div>
                        </div>

                        <div className="contact">
                            <div className='w-full flex flex-col'>
                                <label htmlFor="email" className='text-black/65 text-[15px]'>Email</label>
                                <input type="email" id='email' placeholder='type your email' className='bg-blue-100/70 px-3 rounded-sm py-1.5 mb-4' />
                            </div>

                            <div className='w-full flex flex-col'>
                                <label htmlFor="phone" className='text-black/65 text-[15px]'>Phone</label>
                                <input type="text" id='phone' placeholder='type your phone' className='bg-blue-100/70 px-3 rounded-sm py-1.5 mb-4' />
                            </div>
                        </div>

                        <div className='detail w-full flex flex-col'>
                            <label htmlFor="Detail" className='text-black/65 text-[15px]'>Detail</label>
                            <textarea name="Detail" id="Detail" rows={2} className='px-3 rounded-sm py-1.5 bg-blue-100/70 mb-4' placeholder='type your message here'></textarea>
                        </div>

                        <div className='flex justify-center items-center '>
                            <button className='bg-[#0274da]/70 hover:bg-[#0274da]/60 text-white rounded-md px-3 py-1 mt-2 max-[530px]:w-full mx-auto'>submit</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    
  )
}

export default ContactUs
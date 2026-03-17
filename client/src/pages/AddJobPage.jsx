import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
const AddJobPage = ({addJobSubmit}) => {
  const [type,setType] = useState('');
  const [title,setTitle] = useState('');
  const [image,setImage] = useState('');
  const [description,setDescription] = useState('');
  const [sallery,setSallery] = useState('');
  const [location,setLocation] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [companyDescription,setCompanyDescription] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const navigate = useNavigate();

  const handleUploadImage = (e)=>{
      const file = e.target.files[0];
      if(!file) return;
      if(file.size > 10 * 1024 * 1024){
        toast.error('images must not be more than 10 MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () =>{
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
  }

  const SubmitForm = (e)=>{
    e.preventDefault();
    const NewJob = {
      id: crypto.randomUUID(),
      type,
      title,
      image,
      description,
      sallery,
      location,
      companyInfo:{
        name:companyName,
        description:companyDescription,
        email,
        phone
      }
    }
    addJobSubmit(NewJob);
    navigate('/Dashboard/JobsList')
  }

  return (
    <>
      <section className='bg-indigo-50'>
        <div className="container m-auto w-full">
          <div className='bg-white py-6 px-6 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <h1 className='text-2xl text-center font-semibold mb-7'>Add Job</h1>
            <form onSubmit={SubmitForm}>
                    <div className='job'>
                          <div className="jobInfo">
                            <h1 className='text-[18px] font-bold my-2'>Job Info</h1>
                          </div>
                          <div className='flex justify-between items-center gap-x-4'>
                              <div className='title flex flex-col w-full'>
                                  <label htmlFor="title" className='text-[14px]'>Job Title</label>
                                  <select name="title" id="title" required
                                  value={title}
                                  onChange={(e)=>setTitle(e.target.value)}
                                  className='border border-gray-400/50 rounded-lg py-1 ps-3'>
                                      <option value="...">....</option>  
                                      <option value="React-Native">React Native</option>  
                                      <option value="Mobile-Developement">Mobile Developement</option>  
                                      <option value="Web-Developement">Web Developement</option>  
                                      <option value="Graphic-Designing">Graphic Designing</option>  
                                      <option value="Ul-UX-Designing">Ul & UX Designing</option>  
                                      <option value="Video-Editing">Video Editing</option>  
                                  </select>  
                               </div> 

                              <div className='devType flex flex-col w-full'>
                                  <label htmlFor="type" className='text-[14px]'>Time woring</label>
                                  <select name="type" id="type" required
                                  value={type}
                                  onChange={(e)=>setType(e.target.value)}
                                  className='border border-gray-400/50 rounded-md py-1 px-3'>
                                      <option value="...">....</option>  
                                      <option value="full-time">Full time</option>  
                                      <option value="part-time">Part time</option>  
                                      <option value="remote">Remote</option>  
                                      <option value="internship">Internship</option>  
                                  </select>  
                              </div> 
                          </div>


                          <div className='flex justify-between items-center gap-x-4 my-4'>
                              <div className="sallery flex flex-col w-full">
                                  <label htmlFor="sallery" className='text-[14px]'>Sallery</label>
                                  <select name="sallery" id="sallery" 
                                  required
                                  value={sallery}
                                  onChange={(e)=>setSallery(e.target.value)}
                                  className='border border-gray-400/50 rounded-md py-1 px-3'>
                                    <option value="...">...</option>
                                    <option value="30000 AFS">30000 AFS</option>
                                    <option value="10000 AFS">10000 AFS</option>
                                    <option value="15000 AFS">15000 AFS</option>
                                    <option value="23000 AFS">23000 AFS</option>
                                    <option value="50000 AFS">50000 AFS</option>
                                    <option value="90000 AFS">90000 AFS</option>
                                    <option value="39000 AFS">39000 AFS</option>
                                  </select>
                              </div>

                              <div className="location flex flex-col w-full">
                                  <label htmlFor="location" className='text-[14px]'>Location</label>
                                  <input name="location" id="location" 
                                      required
                                      placeholder='Enter location'
                                      value={location}
                                      onChange={(e)=>setLocation(e.target.value)}
                                      className='border border-gray-400/50 rounded-md py-1 ps-3'>
                                  </input>
                              </div>
                          </div>

                          {/* Photo Upload */}
                          <div className="flex flex-col w-full">
                            <label htmlFor='image' className="text-sm"> Photo</label>
                            <input
                              id='image'
                              accept='image/*'
                              type='file'
                              required
                              onChange={handleUploadImage}
                              className="border rounded-lg py-1.5 text-[12px] px-3"
                            />
                            {image && (
                              <div>
                                <img src={image} 
                                alt="Preview"
                                className="w-8 h-8 rounded-full mt-1 object-cover shadow-md"/>
                              </div>
                            )}
                          </div>

                            <div className="description mt-4 flex flex-col w-full">
                                <label htmlFor="description" className='text-[14px] capitalize'>job Description</label>
                                <textarea name="description" id="description"
                                placeholder='enter the details of thr company'
                                required
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                className='border border-gray-400/50 rounded-md py-2 px-3'></textarea>
                            </div>
                    </div>

                    <div className='com mt-6'>
                          <div className='companyInfo'>
                              <h1 className='text-[18px] font-bold my-2'>Company info</h1>
                              <div className='co_name flex flex-col'>
                                <label className='text-[14px]'>Company name</label>
                                <input type="text"
                                placeholder='type company name'
                                required
                                value={companyName}
                                onChange={(e)=>setCompanyName(e.target.value)}
                                className='border border-gray-400/50 rounded-md py-1 px-3' />
                              </div>

                              <div className='email my-4 flex flex-col'>
                                <label className='text-[14px]'>Contact Email</label>
                                <input type="email"  
                                  placeholder='type company email'
                                required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className='border border-gray-400/50 rounded-md py-1 px-3'/>
                              </div>

                              <div className='phone flex mb-4 flex-col'>
                                <label className='text-[14px]'>Contact Phone</label>
                                <input type="text" 
                                  placeholder='type phone No'
                                required
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                                className='border border-gray-400/50 rounded-md py-1 px-3' />
                              </div>
                              </div>

                              <div className='co_desc flex flex-col'>
                                <label className='text-[14px]'>Company Description</label>
                                <textarea name="" id="" 
                                  placeholder='enter the details of thr company'
                                required
                                value={companyDescription}
                                onChange={(e)=>setCompanyDescription(e.target.value)}
                                className='border border-gray-400/50 rounded-md py-2 px-3'></textarea>
                              </div>
                    </div>
                <button className='bg-[#103354] px-4 py-1.5 text-[14px] flex justify-center items-center rounded-lg mt-8 mx-auto text-white'>Add Job</button>
            </form>
          </div>
        </div>  
      </section>       
    </>
  )
}

export default AddJobPage

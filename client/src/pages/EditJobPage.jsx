import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const EditJobPage = () => {
  const job = useLoaderData();
  
  const [type,setType]  = useState(job.type);
  const [image,setImage]  = useState(job.image);
  const [title,setTitle]  = useState(job.title);
  const [description,setDescription]  = useState(job.description);
  const [sallery,setSallery]  = useState(job.sallery);
  const [location,setLocation]  = useState(job.location);
  const [companyName,setCompanyName]  = useState(job.companyInfo.name);
  const [companyDescription,setCompanyDescription]  = useState(job.companyInfo.description);
  const [email,setEmail]  = useState(job.companyInfo.email);
  const [phone,setPhone]  = useState(job.companyInfo.phone);
  const navigate = useNavigate();
  
    const handlePhotoUpdate = (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onloadend = () =>(
      setImage(reader.result)
    )
    reader.readAsDataURL(file);
  }

  const SubmitForm = (e)=>{
      e.preventDefault();
      const upadteJob = {
        image,
        type,
        title,
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
      handleUpdateForm(upadteJob)
  }

  const handleUpdateForm = async (updateJob)=>{
      const res = await fetch(`/api/jobs/${job.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(updateJob),
      });
      if(!res.ok){
        toast.error('Update operation failed');
      }
      toast.success('Job updated successfully');
      return navigate('/Dashboard/JobsList');
  }

  return (
    <>
      <section className='bg-indigo-50'>
        <div className="container m-auto">
          <div className='bg-white py-6 px-6 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <h1 className='text-2xl text-center font-semibold mb-10'>Edit Job Details</h1>
            <form onSubmit={SubmitForm}>
              <div className="developerInfo">
                  <h1 className='text-[18px] font-bold my-2'>Job Info</h1>
                  {/* Photo Upload */}
                <div className="mb-4 flex flex-col">
                  <label htmlFor='image' className="text-sm"> Photo</label>
                  <input
                    onChange={handlePhotoUpdate}
                    required
                    type='file'
                    id='image'
                    accept='image/*'
                    className="border rounded-lg py-1.5 text-[12px] px-3"
                  />
                    {image? (
                    <div>
                        <img src={image}
                        className='h-8 w-8 rounded-full mt-1'
                        alt="preview" />
                    </div>
                  ):""}

                  {/* {image && (
                    <div>
                        <img src={image}
                        className='h-8 w-8 rounded-full mt-1'
                        onChange={handlePhotoUpdate}
                        alt="" />
                    </div>
                  )} */}
                </div>

                  <div className='devType my-4 flex flex-col'>
                      <label htmlFor="type" className='text-[14px]'>Time woring</label>
                      <select name="type" id="type" required
                      onChange={(e)=>setType(e.target.value)}
                      value={type}
                      className='border border-gray-400/50 rounded-md py-2 px-3'>
                          <option value="...">....</option>  
                          <option value="full-time">Full time</option>  
                          <option value="part-time">Part time</option>  
                          <option value="remote">Remote</option>  
                          <option value="internship">Internship</option>  
                      </select>  
                  </div> 
                  
                  <div className='title mb-4 flex flex-col'>
                      <label htmlFor="title" className='text-[14px]'>Job Title</label>
                      <select name="title" id="title" required
                      onChange={(e)=>setTitle(e.target.value)}
                      value={title}
                      className='border border-gray-400/50 rounded-lg py-2 px-3'>
                          <option value="...">....</option>  
                          <option value="React-Native">React Native</option>  
                          <option value="Mobile-Developement">Mobile Developement</option>  
                          <option value="Web-Development">Web Developement</option>  
                          <option value="Graphic-Designing">Graphic Designing</option>  
                          <option value="Ul-UX-Designing">Ul & UX Designing</option>  
                          <option value="Video Editing">Video Editing</option>  
                      </select>  
                  </div> 


                  <div className="description mt-4 flex flex-col">
                      <label htmlFor="description" className='text-[14px]'>Description</label>
                      <textarea name="description" id="description"
                      placeholder='enter the details of thr company'
                      required
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      className='border border-gray-400/50 rounded-md py-2 px-3'></textarea>
                  </div>

                  <div className="sallery my-4 flex flex-col">
                    <label htmlFor="sallery" className='text-[14px]'>Sallery</label>
                    <select name="sallery" id="sallery" 
                    required
                    value={sallery}
                    onChange={(e)=>setSallery(e.target.value)}
                    className='border border-gray-400/50 rounded-md py-2 px-3'>
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

                  <div className="location flex flex-col">
                    <label htmlFor="location" className='text-[14px]'>Location</label>
                    <select name="location" id="location" 
                    required
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    className='border border-gray-400/50 rounded-md py-2 px-3'>
                      <option value="...">...</option>
                      <option value="Herat">Herat</option>
                      <option value="Kabul">Kabul</option>
                      <option value="Kandahar">Kandahar</option>
                      <option value="Balkh">Balkh</option>
                      <option value="Ghor">Ghor</option>
                      <option value="Bamyan">Bamyan</option>
                      <option value="Dykondi">Dykondi</option>
                    </select>
                  </div>
              </div>

              <div className='companyInfo mt-10'>
                  <h1 className='text-[18px] font-bold my-2'>Company info</h1>
                  <div className='co_name flex my-4 flex-col'>
                    <label className='text-[14px]'>Company name</label>
                    <input type="text"
                    placeholder='type company name'
                    required
                    value={companyName}
                    onChange={(e)=>setCompanyName(e.target.value)}
                    className='border border-gray-400/50 rounded-md py-1.5 px-3' />
                  </div>

                  <div className='email my-4 flex flex-col'>
                    <label className='text-[14px]'>Contact Email</label>
                    <input type="email"  
                      placeholder='type company email'
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='border border-gray-400/50 rounded-md py-2 px-3'/>
                  </div>

                  <div className='phone flex mb-4 flex-col'>
                    <label className='text-[14px]'>Contact Phone</label>
                    <input type="text" 
                      placeholder='type phone No'
                    required
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    className='border border-gray-400/50 rounded-md py-2 px-3' />
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

                <button className='bg-indigo-700 w-full py-1.5 text-[14px] rounded-2xl mt-8 text-white capitalize'>Edit job details</button>
            </form>
          </div>
        </div>  
      </section>       
    </>
  )
}

export default EditJobPage

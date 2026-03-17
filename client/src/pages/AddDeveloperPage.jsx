import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
const AddDeveloperPage = ({addDeveloperSubmit}) => {
  const [name,setName] = useState('');
  const [lastname,setLastName] = useState('');
  const [image, setImage] = useState(null);
  const [jobTitle,setJobTitle] = useState('');
  const [type,setType] = useState('');
  const [description,setDescription] = useState('');
  const [sallery,setSallery] = useState('');
  const [location,setLocation] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [companyDescription,setCompanyDescription] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');

  const Navigate = useNavigate();

    // 📸 Image Handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
  
  const submitForm = (e) =>{
      e.preventDefault()
      const NewDeveloper = {
        id: crypto.randomUUID(),
        name,
        lastname,
        jobTitle,
        type,
        description,
        sallery,
        location,
        image,
        companyInfo:{
          name:companyName,
          description:companyDescription,
          email,
          phone
        },
      };
      addDeveloperSubmit(NewDeveloper);
      return Navigate('/Dashboard/DevelopersList')
  };

  return (
    <>
      <section className='bg-indigo-50'>
        <div className="container m-auto max-w-5xl shadow-lg">
          <div className='bg-white py-6 px-6 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <h1 className='text-2xl text-center font-semibold mb-6'>Add Developer</h1>
            <form onSubmit={submitForm}>
                    <div className="developerInfo mt-8">
                          <h1 className='text-[18px] font-bold my-2'>Developer Info</h1>
                        <div className='flex gap-x-4 justify-between items-center mb-4 w-full'>
                              <div className='devType flex flex-col w-full'>
                                  <label htmlFor="name" className='text-[14px]'>First Name</label>
                                  <input name="name" id="name" placeholder='type developer name'
                                  required
                                  value={name}
                                  onChange={(e)=>setName(e.target.value)}
                                  className='border border-gray-400/50 rounded-md py-1 px-3 '/>
                              </div> 

                              <div className='devType flex flex-col w-full'>
                                  <label htmlFor="name" className='text-[14px]'>Last Name</label>
                                  <input name="name" id="name"
                                  placeholder='type developer last name'
                                  required
                                  value={lastname}
                                  onChange={(e)=>setLastName(e.target.value)}
                                  className='border border-gray-400/50 rounded-md py-1 px-3 '/>
                              </div> 
                        </div>


                        <div className='flex gap-x-4 justify-between items-center mb-4 w-full'>
                                <div className='jobTitle flex flex-col w-full'>
                                  <label htmlFor="jobTitle" className='text-[14px]'>Job Title</label>
                                  <select name="jobTitle" id="jobTitle" required
                                  value={jobTitle}
                                  onChange={(e)=>setJobTitle(e.target.value)}
                                  className='border border-gray-400/50 rounded-lg py-1 px-3'>
                                      <option value="...">....</option>  
                                      <option value="React-Native">React Native</option>  
                                      <option value="Mobile-Developer">Mobile Developer</option>  
                                      <option value="Web-Developer">Web Developer</option>  
                                      <option value="Graphic-Designer">Graphic Designer</option>  
                                      <option value="Ul-UX-Designer">Ul & UX Designer</option>  
                                      <option value="Video-Editor">Video Editor</option>  
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

                        <div className='flex gap-x-4 justify-between items-center mb-4 w-full'>
                             <div className="location flex flex-col w-full">
                                 <label htmlFor="" className='text-[14px]'>Location</label>
                                  <input name="" id="" 
                                  required
                                  value={location}
                                  placeholder='inter location'
                                  onChange={(e)=>setLocation(e.target.value)}
                                  className='border border-gray-400/50 rounded-md py-1 px-3'>
                                  </input>
                              </div>

                              <div className="sallery flex flex-col w-full">
                                <label htmlFor="" className='text-[14px]'>Sallery</label>
                                <select name="" id="" 
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
                        </div>
                        
                        {/* Photo Upload */}
                        <div className="flex flex-col w-full mb-4">
                          <label className="text-sm"> Photo</label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="border rounded-lg py-1.5 text-[12px] px-3"
                          />
                        {image && (
                          <div>
                            <img
                              src={image}
                              alt="Preview"
                              className="w-8 h-8 rounded-full mt-1 object-cover shadow-md"
                            />
                          </div>
                        )}
                        </div>

                        <div className="description flex flex-col">
                            <label htmlFor="" className='text-[14px]'>Developer Description</label>
                            <textarea name="" id=""
                            placeholder='enter the details of thr company'
                            required
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            className='border border-gray-400/50 rounded-md py-2 px-3'></textarea>
                        </div>
                    </div>

                    <div className='companyInfo mt-8'>
                        <h1 className='text-[18px] font-bold my-2'>Company info</h1>
                          <div className='co_name flex flex-col w-full'>
                                <label className='text-[14px]'>Company name</label>
                                <input type="text"
                                  placeholder='type company name'
                                required
                                value={companyName}
                                onChange={(e)=>setCompanyName(e.target.value)}
                                className='border border-gray-400/50 rounded-md py-1 px-3' />
                          </div>

                          <div className='email flex flex-col w-full my-4'>
                            <label className='text-[14px]'>Contact Email</label>
                            <input type="email"  
                              placeholder='type company email'
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className='border border-gray-400/50 rounded-md py-1 px-3'/>
                          </div>

                          <div className='phone flex flex-col w-full mb-4'>
                            <label className='text-[14px]'>Contact Phone</label>
                            <input type="text" 
                              placeholder='type phone No'
                            required
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            className='border border-gray-400/50 rounded-md py-1 px-3' />
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
                <button className='bg-[#103354] px-4 py-1.5 text-[14px] flex justify-center items-center rounded-lg mt-8 mx-auto text-white'>Add Developer</button>
            </form>
          </div>
        </div>  
      </section>       
    </>
  )
}

export default AddDeveloperPage
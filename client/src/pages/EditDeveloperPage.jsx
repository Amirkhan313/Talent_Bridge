import React, { useState } from 'react'
import { useParams,useLoaderData, Link , useNavigate, Navigate} from 'react-router-dom'
import { toast } from 'sonner';


const EditDeveloperPage = ({updateDeveloperSubmit}) => {
      const personInfo = useLoaderData();
      
      const [name,setName] = useState(personInfo.name);
      const [lastname,setLastName] = useState(personInfo.lastname);
      const [jobTitle,setJobTitle] = useState(personInfo.jobTitle);
      const [image,setImage] = useState(personInfo.image);
      const [type,setType] = useState(personInfo.type);
      const [description,setDescription] = useState(personInfo.description)
      const [sallery,setSallery] = useState(personInfo.sallery);
      const [location,setLocation] = useState(personInfo.location);
      const [companyName,setCompanyName] = useState(personInfo.companyInfo.name);
      const [companyDescription,setCompanyDescription] = useState(personInfo.companyInfo.description);
      const [email,setEmail] = useState(personInfo.companyInfo.email);
      const [phone,setPhone] = useState(personInfo.companyInfo.phone);

      const Navigate = useNavigate();
      const {id} = useParams();
        
      const handleUpdateImage = (e)=>{
        const file = e.target.files[0];
        if(!file) return;
        if (file.size > 10 * 1024 * 1024) {
          alert("Image must be less than 5MB");
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () =>{
          setImage(reader.result);
        }

        reader.readAsDataURL(file)
      }


      const submitForm = (e) =>{
        e.preventDefault()
        const updateDeveloper = {
            id,
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
        updateDeveloperSubmit(updateDeveloper)
        toast.success('Developer details updated successfully')
        return Navigate(`/Dashboard/DevelopersList`)
    }

  return (
     <>
      <section className='bg-indigo-50'>
        <div className="container m-auto">
          <div className='bg-white py-6 px-6 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <h1 className='text-2xl text-center font-semibold mb-10'>Edit Developer Details</h1>
            <form onSubmit={submitForm}>
              <div className="developerInfo">
                  <h1 className='text-[18px] font-bold my-2'>Developer Info</h1>
                  <div className='devType my-4 flex flex-col'>
                      <label htmlFor="name" className='text-[14px]'>First Name</label>
                      <input name="name" id="name" placeholder='type developer name'
                      required
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className='border border-gray-400/50 rounded-md py-1 px-3 '/>
                  </div> 

                  <div className='devType my-4 flex flex-col'>
                      <label htmlFor="name" className='text-[14px]'>Last Name</label>
                      <input name="name" id="name"
                      placeholder='type developer last name'
                      required
                      value={lastname}
                      onChange={(e)=>setLastName(e.target.value)}
                      className='border border-gray-400/50 rounded-md py-1 px-3 '/>
                  </div> 

                  <div className="photo mb-4 flex flex-col">
                      <label htmlFor="photo" className='ext-[14px]'>Photo</label>
                      <input type="file"
                      required
                      onChange={handleUpdateImage}
                      className='border border-gray-400/50 rounded-md text-[12px] py-1.5 px-3'
                      />
                      {image && (
                      <div>
                        <img src={image} alt="preview" 
                        accept="image/*"
                        className='h-8 w-8 rounded-full mt-1'
                        />
                      </div>
                      )}
                  </div>

                  <div className='jobTitle mb-4 flex flex-col'>
                      <label htmlFor="jobTitle" className='text-[14px]'>Job Title</label>
                      <select name="jobTitle" id="jobTitle" required
                      value={jobTitle}
                      onChange={(e)=>setJobTitle(e.target.value)}
                      className='border border-gray-400/50 rounded-lg py-2 px-3'>
                          <option value="...">....</option>  
                          <option value="React-Native">React Native</option>  
                          <option value="Mobile-Developer">Mobile Developer</option>  
                          <option value="Web-Developer">Web Developer</option>  
                          <option value="Graphic-Designer">Graphic Designer</option>  
                          <option value="Ul-UX-Designer">Ul & UX Designer</option>  
                          <option value="Video-Editor">Video Editor</option>  
                      </select>  
                  </div> 

                  <div className='devType flex flex-col'>
                      <label htmlFor="type" className='text-[14px]'>Time woring</label>
                      <select name="type" id="type" required
                      value={type}
                      onChange={(e)=>setType(e.target.value)}
                      className='border border-gray-400/50 rounded-md py-2 px-3'>
                          <option value="...">....</option>  
                          <option value="full-time">Full time</option>  
                          <option value="part-time">Part time</option>  
                          <option value="remote">Remote</option>  
                          <option value="internship">Internship</option>  
                      </select>  
                  </div> 

                  <div className="sallery my-4 flex flex-col">
                    <label htmlFor="" className='text-[14px]'>Sallery</label>
                    <select name="" id="" 
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
                    <label htmlFor="" className='text-[14px]'>Location</label>
                    <select name="" id="" 
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

                  <div className="description mt-4 flex flex-col">
                      <label htmlFor="" className='text-[14px]'>Description</label>
                      <textarea name="" id=""
                      placeholder='enter the details of thr company'
                      required
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      className='border border-gray-400/50 rounded-md py-2 px-3'></textarea>
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

                <button className='bg-indigo-700 w-full py-1.5 text-[14px] rounded-2xl mt-8 text-white'>Update Developer Details</button>
            </form>
          </div>
        </div>  
      </section>       
    </>
  )
}

export default EditDeveloperPage
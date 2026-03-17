import { useEffect, useState } from 'react';
import { WiSnow } from 'react-icons/wi';
import { Link } from 'react-router-dom'

const Person = ({person}) => {
  const description = person.description
  const [descriptionLength,setDescriptionLength] = useState(130);
  
  useEffect(() => {
  const handleLengthInSize = () => {
    const width = window.innerWidth; 
    if (width <= 425) {
      setDescriptionLength(90);
    }
    else if (width <= 500) {
      setDescriptionLength(120);
    }
    else if (width <= 568) {
      setDescriptionLength(130);
    }
    else if (width <= 676) {
      setDescriptionLength(150);
    }
    else if (width <= 830) {
      setDescriptionLength(180);
    }
    else if (width <= 930) {
      setDescriptionLength(60);
    }
    else if (width <= 1100) {
      setDescriptionLength(100);
    }
    else {
      setDescriptionLength(140);
    }
  };

  handleLengthInSize(); // run on mount
  window.addEventListener('resize', handleLengthInSize);
  return () => window.removeEventListener('resize', handleLengthInSize);
}, []);
  
  
  return (
      <div className='mb-8 bg-white shadow-lg text-black grid grid-cols-12 rounded-lg overflow-hidden h-[250px] max-[530px]:flex  max-[530px]:flex-col min-[531px]:h-[250px] min-[480px]:h-[500px] min-[376px]:h-[450px] max-[375px]:h-[390px]'>
        <div className="col-span-5 overflow-hidden">
            <img src={person.image} alt="developer" className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"/>
        </div>

        <div className='flex flex-col py-4 ps-4 pe-8 col-span-7'>
          <p className='font-bold text-[16px]'>{person.name + " " + person.lastname}</p>
          <p className='font-bold text-[14px] my-1'> {person.jobTitle}</p>
          <p className='text-[14px] !text-start'>{description.slice(0,descriptionLength) + "..."}</p>
          <div className='mt-auto'>
              <p className='text-[#0274da] text-[12px] mt-2 max-[530px]:mt-3'> {person.sallery} / monthly </p>
              <hr className='my-1'/>
              <div className='flex items-center justify-between mt-auto'>
                  <p className='text-[#fe6411] text-[14px] font-semibold'>{person.location}</p>
                  <Link to={`/PersonInfo/${person.id}`} className='text-[12px] py-1.5 px-3 bg-[#0274da] hover:bg-[#0274da]  border-0 text-white font-normal rounded-md text-center'>
                  See More
                  </Link>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Person

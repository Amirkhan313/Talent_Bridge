import React, { useEffect, useState } from 'react'
import CustomSkeleton from './Skeleton.jsx'
import Job from './Job'
import { FaLeaf } from 'react-icons/fa6'
import { toast } from 'sonner'

const JobLists = ({isHome = false}) => {
  const [jobs,setJobs] = useState([]);
  const [Loading,setLoading] = useState(true);
  const SkeletonCount = isHome? 4:5;

  useEffect(()=>{
    const timer = setTimeout(() => {
      const fetchJobs = async () => {
        const apiUrl = isHome ? '/api/jobs?_limit=4' : '/api/jobs';
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        } catch {
          toast.error('Fetched api failed');
        } finally {
          setLoading(false);
        }
      }
      fetchJobs();
    }, 1200);

    return () => clearTimeout(timer);
  },[isHome]);

  return (
    <section className='bg-blue-50 md:px-12 max-md:px-8 my-8 pt-6 pb-3'>
        <div className=" w-full">
            <div className="topText mb-7">
                <h2 className='text-[#0274da] text-3xl text-center font-bold'>{isHome ? <p>See Jobs</p>:<p>List of Jobs</p>}</h2>
                <p className='text-gray-700 text-center font-poppins font-medium'>{isHome ? <span>Find the perfect job for your skills</span>:<span>Here you can find your dream type of job opportunities</span>}</p>
            </div>
            {Loading ?
              <div className='grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 items-start'>
                  {Array(SkeletonCount).fill(0).map((_,i)=><CustomSkeleton type="jobPage" key={i} />)}
              </div>
              :
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 w-full'>
                {jobs?.map((job)=>(
                  <Job key={job.id} job={job}/>
                ))}
              </div>
            }
        </div>
    </section>
  )
}

export default JobLists

import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye } from 'react-icons/fa'
import { IoTrashBinSharp } from 'react-icons/io5'
import DashboardSkeleton from './../../components/DashbaordSkeleton';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
const JobsList = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [totalPages,setTotalPages] = useState(1);
    const [currentPage,setCurrentPage] = useState(1);
    const limit = 3;

    useEffect(()=>{
        const ListtingJobs = async()=>{
            const API_URL = `/api/jobs?_page=${currentPage}&_limit=${limit}`
                try {
                    const res = await fetch(API_URL);
                    const data = await res.json();
                    setData(data);

                    const totalCounts = res.headers.get('X-Total-Count');
                    if(totalCounts){
                        setTotalPages(Math.ceil(totalCounts / limit));
                    }
                    else{
                        setTotalPages(Math.ceil(data.length / limit));
                    }
                }
                 catch (error) {
                    console.log('api fetch failed',error);
                }
                finally{
                    setLoading(false);
                }
            }
            ListtingJobs();
    },[currentPage]);

    const handleDeleteJob = async(id)=>{
        const confirmation = confirm('Are you sure to delete this record permenetly?');
        if(!confirmation) return;

        const res = await fetch(`/api/jobs/${id}`,{
            method: 'DELETE',
        });
        if (!res.ok) {
        toast.error('Delete operation failed');
        return false;
        }
        setData((prevData)=>prevData.filter((job)=>job.id !== id));
        toast.success('job deleted successfully');
        return true;
    }

    return (
    <>
       <div className='mb-8'>
        <p className="text-[24px] font-poppins mb-4 capitalize font-bold">Job Info</p>
             <table className='w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden'>
                <thead className='bg-[#103352] text-white'>
                    <tr className='py-5 w-full flex items-center justify-between px-8'>
                        <th className='font-medium text-[17px] text-left'>Photo</th>
                        <th className='font-medium text-[17px] text-left'>Job Title</th>
                        <th className='font-medium text-[17px] text-left'>Time Working</th>
                        <th className='font-medium text-[17px] text-left'>Location</th>
                        <th className='font-medium text-[17px] text-left'>Sallery</th>
                        <th className='font-medium text-[17px] text-left'>Action</th>
                    </tr>
                </thead>

                { loading ? 
                <tbody>
                    {Array(5).fill(0).map((_,i)=><DashboardSkeleton type="jobPage" key={i}/>)}
                </tbody>
                :
                <tbody>
                    {data?.map((job)=>(
                        <tr key={job.id} className='odd:bg-white even:bg-gray-200 py-2.5 w-full flex items-center justify-between px-8'>
                            <td className='text-left text-[14px]'>
                                {
                                    <img src={job.image} alt="" className='w-16 object-cover border h-16 rounded-full' />
                                }
                            </td>
                            <td className='text-left text-[14px]'>{job.title}</td>
                            <td className='text-left text-[14px]'>{job.type}</td>
                            <td className='text-left text-[14px]'>{job.location}</td>
                            <td className='text-left text-[14px]'>{job.sallery}</td>
                            <td className='text-left text-[14px] flex items-center gap-x-2'>
                                <Link to={`/Dashboard/EditJobPage/${job.id}`}><FaEdit className='cursor-pointer hover:text-[#fe2f9a]'/></Link>
                                <Link to={`/job/${job.id}`}><FaEye className='cursor-pointer hover:text-[#fe2f9a]'/></Link>
                                <Link onClick={()=>handleDeleteJob(job.id)}><IoTrashBinSharp className='cursor-pointer hover:text-[#fe2f9a]'/></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                }
            </table> 
        </div>   
        <div className='flex items-center gap-x-5'>
            <button className='text-white bg-red-500 px-3 py-1 font-medium rounded-md cursor-pointer' onClick={()=>setCurrentPage(prev=>Math.max(prev-1,1))} disabled={currentPage === 1}>Prev</button>
            {Array.from({length:totalPages},(_,i)=>i+1).map((page)=>(
                <button
                    key={page}
                    onClick={()=>setCurrentPage(page)}
                    className={`py-1 px-3 rounded-md font-medium ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                {page}          
                </button>
            ))}
            <button className='text-white bg-red-500 px-3 py-1 font-medium rounded-md cursor-pointer' onClick={()=>setCurrentPage(prev=>Math.min(prev+1,totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
    </>
  )
}

export default JobsList

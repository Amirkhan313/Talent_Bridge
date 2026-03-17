import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye } from 'react-icons/fa'
import { IoTrashBinSharp } from 'react-icons/io5'
import DashboardSkeleton from './../../components/DashbaordSkeleton'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
const DevelopersList = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    // const [search,setSearch] = useState();
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);
    const limit = 3;
 
    

    useEffect(()=>{
        const ListingDevelopers =  async() => {
            const API_URL = `/api/developers?_page=${currentPage}&_limit=${limit}`
            try {
                const res = await fetch(API_URL);
                const data  = await res.json();
                setData(data);

                const tottalCount = res.headers.get('X-Total-Count');
                if(tottalCount){
                    setTotalPages(Math.ceil(tottalCount / limit))
                }
                else{
                    setTotalPages(Math.ceil(data.length / limit));
                }
            } catch (error) {
                console.log('data fetch failed',error);                
            }finally {
                setLoading(false);
            }
        } 
        ListingDevelopers();
    },[currentPage]);

    const handleDeveloperDelete = async(id)=>{
        const confirmation = confirm('Are you sure to delete this record permenently?');
        if(!confirmation) return;
         const res = await fetch(`/api/developers/${id}`,{
            method: 'DELETE',
        });
        if(!res.ok) {
            toast.error('Developer deletation is failed');
            return false;
        }
        setData((prevData)=>prevData.filter((developer)=>developer.id !== id));
        toast.success('Developer deleted successfully');
        return true;
    }
  return (
    <>
    <div className='mb-8'>
        <p className="text-[24px] font-poppins mb-4 capitalize font-bold">Developer Info</p>
        <table className='w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden'>
            <thead className='bg-[#103352] text-white'>
                <tr className='py-5 w-full flex items-center justify-between px-8'>
                    <th className='font-medium text-[17px] text-left'>Photo</th>
                    <th className='font-medium text-[17px] text-left'>Name</th>
                    <th className='font-medium text-[17px] text-left'>Lastname</th>
                    <th className='font-medium text-[17px] text-left'>Job Title</th>
                    <th className='font-medium text-[17px] text-left'>Sallery</th>
                    <th className='font-medium text-[17px] text-left'>Location</th>
                    <th className='font-medium text-[17px] text-left'>Action</th>
                </tr>
            </thead>

            {loading ? 
            <tbody>
                {Array(limit).fill(0).map((_,i)=><DashboardSkeleton type="devPage" key={i}/>)}
            </tbody>
            :
            <tbody className=''>
                {data?.map((developer)=>(
                    <tr key={developer.id} className='odd:bg-white even:bg-gray-200 py-2.5 w-full flex items-center justify-between px-8'>
                        <td className='text-left text-[14px]'>
                        {<img src={developer.image} className='w-16 object-cover border h-16 rounded-full' alt=""/>}
                        </td>
                        <td className='text-left text-[14px]'>{developer.name}</td>
                        <td className='text-left text-[14px]'>{developer.lastname}</td>
                        <td className='text-left text-[14px]'>{developer.jobTitle}</td>
                        <td className='text-left text-[14px]'>{developer.sallery}</td>
                        <td className='text-left text-[14px]'>{developer.location}</td>
                        <td className='text-left text-[14px] flex items-center gap-x-2'>
                            <Link to={`/Dashboard/EditDeveloperPage/${developer.id}`}><FaEdit className='cursor-pointer  hover:text-[#fe2f9a]'/></Link> 
                            <Link to={`/PersonInfo/${developer.id}`}><FaEye className='cursor-pointer hover:text-[#fe2f9a]'/></Link> 
                            <Link onClick={()=>handleDeveloperDelete(developer.id)}><IoTrashBinSharp className='cursor-pointer hover:text-[#fe2f9a]'/></Link> 
                        </td>
                    </tr>
                ))}
            </tbody>
            }
        </table>
    </div>
    <div className='flex justify-start gap-x-5 items-center'>
        <button onClick={()=>setCurrentPage(prev=>Math.max(prev -1,1))} disabled={currentPage===1} className='bg-red-400 py-1 px-3 rounded-md text-white font-medium cursor-pointer'>Prev</button>
        {Array.from({length:totalPages},(_,i)=>i+1).map((page)=>(
            <button
                key={page}
                onClick={()=>setCurrentPage(page)}
                className={`py-1 px-3 rounded-md font-medium ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
            {page}
            </button>
        ))}
        <button onClick={()=>setCurrentPage(prev=>Math.min(prev +1, totalPages))} disabled={currentPage === totalPages} className='bg-red-400 py-1 px-3 rounded-md text-white font-medium cursor-pointer'>Next</button>
    </div>
    </>
  )
}

export default DevelopersList

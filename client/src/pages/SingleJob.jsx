import { useLoaderData, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
const SingleJob = () => {
  const job = useLoaderData();
  
  // const handleDeleteJob = async (jobID) => {
  //   const confirm = window.confirm('Are you sure to delete it?');
  //   if (!confirm) return;
  //   const deleted = await handleDeleteJobOperation(jobID);
  //   if (!deleted) return;
  //   navigate('/JobsPage');
  // };

  // const handleDeleteJob = async (jobID)=>{
  //   const res = await fetch(`/api/jobs/${jobID}`,{
  //     method : "DELETE",
  //   });
  //     if(!res.ok){
  //       toast.error('Delete operation failed');
  //     }
  //     const confirm = window.confirm("Are you sure to delete it?");
  //     if(!confirm) return;
  //     toast.success('Job deleted successfully');
  //     Navigate('/JobsPage');
  // }
  
  return(
    <>
      <section>
          <div className="container py-3 px-12">
            <Link to="/JobsPage" className='gap-x-2 flex items-center text-[12px] font-semibold text-[#0274da]'>
              <FaArrowLeft className='p-0 m-0'/>
              <p className='p-0 m-0'>Back to Jobs List</p>
            </Link>
          </div>
      </section>

      <section className='bg-blue-50 py-10'>
        <div className="container grid grid-cols-9 px-12 gap-x-4">
          <main className='col-span-7 rounded-md px-6'>
              {<div className="image rounded-md h-72 border-[4px] border-white ring-4 ring-[#0274da] mb-6">
                  <img src={job?.image} alt=""  className='rounded-md object-cover size-full'/>
              </div>}

              <div className="flex flex-col space-y-2 pt-3 pb-5 px-5 text-start shadow-md rounded-md bg-white">
                  <p className='text-[14px] text-gray-500'>{job?.type}</p>
                  <h1 className='text-[20px] font-bold mt-1'>{job?.title}</h1>
                  <div className='flex space-x-1 items-center'>
                      <div className="flex gap-x-1 items-center">
                          <FaMapMarker className='text-[12px] text-[#fe6411]'/>
                      </div>
                      <p className='text-[14px] text-[#fe6411]'>{job?.location}</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 text-start shadow-md bg-white rounded-md mt-3 pt-4 pb-6 px-5">
                <p className='font-bold text-[#0274da] mt-3 text-[16px] capitalize'>job description </p>
                <p className='mt-3 mb-1 text-[14px]'>{job?.description} </p>
                <p className='font-bold text-[14px] text-[#fe6411]'>Sallery</p>
                <p className='text-[14px] mt-0'>{job?.sallery}</p>
              </div>
          </main>

          {/* sidebar */}
          <aside className='col-span-2 grid gap-y-4'>
            <div className="co_info bg-white p-4 shadow-md rounded-md">
                <h1 className='font-bold text-[18px]'>Company info</h1>
                <h1 className='font-bold text-[16px] mb-2'>{job?.companyInfo?.name}</h1>
                <p className='text-[13px]'>{job?.companyInfo?.description}</p>
                <hr  className='bg-gray-500 mt-5'/>
                <div className='space-y-3 mt-3'>
                    <div>
                        <h3>Contact Email</h3>
                        <p className='bg-slate-300 py-1 px-3'>{job?.companyInfo?.email}</p>
                    </div>

                    <div>
                        <h3>Contact phone</h3>
                        <p className='bg-slate-300 py-1 px-3'>{job?.companyInfo?.phone}</p>
                    </div>
                </div>
                <div className='mt-16 w-full h-full rounded-md overflow-hidden'>
                    <img src={job?.image} className='hover:scale-110 transition-all duration-300 overflow-hidden rounded-md' />
                </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
};
export default SingleJob;

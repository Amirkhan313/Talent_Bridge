import { useLoaderData, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

const SinglePerson = () => {
  const developer = useLoaderData();

  // const handleDeleteDeveloper = async (devID) => {
  //   const confirmation = window.confirm('Are you sure to delete this record?');
  //   if (!confirmation) return;
  //   const deleted = await handleDeleteOperation(devID);
  //   if (!deleted) return;
  //   toast.success("Developer deleted successfully");
  //   navigate('/PeoplePage');
  // };

  // const handleDeleteDeveloper = async (id)=>{
  // const res = await fetch(`/api/developers/${id}`,{
  //     method: 'DELETE',
  //   });
  //   if(!res.ok){
  //     throw new Error("Delete operation failed");
  //   }
  //   const confirmation = window.confirm('Are you sure to delete it permenently?');
  //   if(!confirmation) return;
  //   navigate('/PeoplePage');
  //   return  await res.json();
  // }


  return(
    <>
      <section>
          <div className="container py-3 px-12">
            <Link to="/PeoplePage" className='gap-x-2 flex items-center text-[12px] font-semibold text-[#0274da]'>
              <FaArrowLeft className='p-0 m-0'/>
              <p className='p-0 m-0'>Back to Developers List</p>
            </Link>
          </div>
      </section>

      <section className='bg-blue-50 py-10'>
        <div className="container grid grid-cols-9 px-12 gap-x-4">
          <main className='col-span-7 rounded-md shadow-lg bg-white py-12 px-6'>
              <div className="flex items-center justify-center ">
                <div className="image w-full h-80 border-[4px] border-white ring-4 ring-[#0274da] rounded-lg">
                  <img src={developer?.image} alt=""  className='rounded-lg object-cover size-full'/>
                </div>
              </div>

              <div className=" rounded-md mt-3 pt-4 pb-6 px-5">
                <p className='text-[34px] font-bold'>{developer?.name + " " +  developer?.lastname}</p>
                <h1 className='text-[20px] font-bold mt-1'>{developer?.jobTitle}</h1>
                <p className='font-bold text-[17px] mt-3 text-[#fe6411]'>Sallery</p>
                <p className='text-[14px]'>{developer?.sallery} / monthly</p>
                <h1 className='font-bold mt-3 mb-1 text-[17px]'>Developer Description </h1>
                <p className='text-[13px] mb-3'>{developer?.description}</p>
                <div className='flex space-x-10 items-center'>
                    <div className="flex gap-x-1 items-center">
                        <FaMapMarker className='text-[12px] text-[#fe6411]'/>
                        <p className='text-[14px] text-[#fe6411]'>{developer?.location}</p>
                    </div>
                      <p className='text-[12px] text-gray-500'>{developer?.type}</p>
                  </div>
              </div>
          </main>

          {/* sidebar */}
          <aside className='col-span-2 grid gap-y-4'>
            <div className="co_info bg-white p-4 shadow-md rounded-md">
                <h1 className='font-bold text-[18px]'>Company info</h1>
                <h1 className='font-bold text-[16px] mb-2'>{developer?.companyInfo?.name}</h1>
                <p className='text-[13px]'>{developer?.companyInfo?.description}
                </p>
                <hr  className='bg-gray-500 my-2'/>
                <div className='space-y-3'>
                    <div>
                        <h3>Contact Email</h3>
                        <p className='bg-slate-300 py-1 px-3'>{developer?.companyInfo?.email}</p>
                    </div>

                    <div>
                        <h3>Contact phone</h3>
                        <p className='bg-slate-300 py-1 px-3'>{developer?.companyInfo?.phone}</p>
                    </div>
                </div>
              <div className='mt-10 overflow-hidden rounded-md'>
                <img src={developer?.image} className='hover:scale-110 transition-all duration-300 overflow-hidden rounded-md h-full w-full' alt="" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
};
export default SinglePerson;

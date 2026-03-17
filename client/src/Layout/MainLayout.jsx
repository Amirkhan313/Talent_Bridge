import { Toaster } from 'sonner';
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer'
const MainLayout = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <Toaster  richColors toastOptions={{
            classNames:{
              success: "bg-green-500",
              error : "bg-red-500"
            }
          }}
        />
        <div className='website content flex-1 flex flex-col h-screen justify-center'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default MainLayout

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/NotFoundPage';
import { toast, Toaster } from 'sonner';
import PeoplePage from './pages/PeoplePage';
import SinglePerson from './pages/SinglePerson';
import AddDeveloperPage from './pages/AddDeveloperPage';
import EditDeveloperPage from './pages/EditDeveloperPage';
import JobsPage from './pages/JobsPage';
import SingleJob from './pages/SingleJob';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import ServicesPage from './pages/ServicesPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import { personLoader } from './loaders/personLoader';
import { jobLoader } from './loaders/jobLoader';
import ProductsPage from './pages/ProductsPage';
import AdminDashboard from './Layout/AdminDashboard'
import DevelopersList from './pages/AdminDashboardPages/DevelopersList';
import JobsList from './pages/AdminDashboardPages/JobsList';
import HomeDashboard from './pages/AdminDashboardPages/HomeDashboard';

const App = () => {
  // handle add new developer
  const addDeveloper = async (newDeveloper) => {
    const res = await fetch('/api/developers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDeveloper),
    });
    if (!res.ok) {
      toast.error('Failed to insert new developer');
      return null;
    }
    toast.success('Developer inserted successfully');
    return await res.json();
  };

  // handle delete new developer
  // const handleDeleteDev = async (id) => {
  //   const res = await fetch(`/api/developers/${id}`, {
  //     method: 'DELETE',
  //   });
  //   if (!res.ok) {
  //     toast.error('Delete operation failed');
  //     return false;
  //   }
  //   return true;
  // };

  // handle update new developer
  const handleUpdateDeveloper = async (personInfo) => {
    const res = await fetch(`/api/developers/${personInfo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personInfo),
    });
    if (!res.ok) {
      toast.error('Update operation failed');
      return null;
    }
    toast.success('developer updated successfully');
    return await res.json();
  };


  // handle add new job
  const handleAddNewJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    if (!res.ok) {
      toast.error('Inserting job failed');
      return null;
    }
    toast.success('Job inserted successfully');
    return await res.json();
  };


  // handle delete new job
  // const handleJobDeletion = async (id) => {
  //   const res = await fetch(`/api/jobs/${id}`, {
  //     method: 'DELETE',
  //   });
  //   if (!res.ok) {
  //     toast.error('Delete operation failed');
  //     return false;
  //   }
  //   toast.success('Job deleted successfully');
  //   return true;
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          {/* main website layout */}
          <Route path='/' element={<MainLayout />}>

              <Route index element={<HomePage />} />
              <Route path='*' element={<PageNotFound />} />
              <Route path='/PeoplePage' element={<PeoplePage />} />
              {/* <Route path='/PersonInfo/:id' element={<SinglePerson handleDeleteOperation={handleDeleteDev} />} loader={personLoader} /> */}
              <Route path='/PersonInfo/:id' element={<SinglePerson/>} loader={personLoader}/>
              <Route path='/EditDeveloperPage/:id' element={<EditDeveloperPage updateDeveloperSubmit={handleUpdateDeveloper} />} loader={personLoader} />
              <Route path='/JobsPage' element={<JobsPage />} />
              {/* <Route path='/job/:id' element={<SingleJob handleDeleteJobOperation={handleJobDeletion} />} loader={jobLoader} /> */}
              <Route path='/job/:id' element={<SingleJob/>} loader={jobLoader}/>
              <Route path='/EditJobPage/:id' element={<EditJobPage />} loader={jobLoader} />
              <Route path='/ProductsPage' element={<ProductsPage/>}/>
              <Route path='/ServicesPage' element={<ServicesPage/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
              <Route path='/ContactUs' element={<ContactUs/>}/>
              <Route path='/Blogs' element={<Blogs/>}/>
          </Route>

        {/* //AdminDashboard layout */}
          <Route path='/Dashboard' element={<AdminDashboard />}>  
              <Route index element={<HomeDashboard />} />
              <Route path='AddNewDeveloper' element={<AddDeveloperPage addDeveloperSubmit={addDeveloper} />} />
              <Route path='AddJobPage' element={<AddJobPage addJobSubmit={handleAddNewJob} />} />
              <Route path='DevelopersList' element={<DevelopersList />}/>
              <Route path='JobsList' element={<JobsList />}/>
              <Route path='EditDeveloperPage/:id' element={<EditDeveloperPage updateDeveloperSubmit={handleUpdateDeveloper} />} loader={personLoader} />
              <Route path='EditJobPage/:id' element={<EditJobPage />} loader={jobLoader} />
          </Route>
      </>
    )
  );

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
};

export default App;


































// const x = 30;
  // const y = 40;
  // // const names = ['Amir Khan', 'Akram', 'Abdullah', 'Asghar', 'Akbar', 'Ahmad', 'Ali'];
  // const logedIn = false;
  // const styles = {
  //   color: 'yellow',
  //   backgroundColor: 'black',
  //   fontSize: '24px',
  //   fontStyle: 'bold',
  //   borderRadius: '10px',
  //   margin: '10px 0',
  //   padding: '5px 20px'
  // }

  // const [showDescription, setShowDescription] = useState(false)
  // let descrition =  person.description;

  // return (
  //   <>
  //     <Navbar />
  //     <PeopleList />
  //     {/* <div className="text-5xl">App</div> */}
  //     {/* <p className='text-2xl font-bold'>Hello Mr. {fullName}</p> */}
  //     {/* <p style={{ color: "blueviolet", fontSize: '30px', fontWeight: "bold" }}> the sum of {x} and {y} is {x + y}</p> */}
  //     {/* {logedIn ? <h1 style={{styles}}>Hello member</h1> : <h1>hello guest</h1>} */}
  //   </>
  // )

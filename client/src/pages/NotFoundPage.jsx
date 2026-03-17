import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='text-center flex flex-col items-center '>
        <FaExclamationTriangle className='text-yellow-400 text-4xl mb-4'/>
        <h1 className='text-5xl font-bold capitalize mb-1'>Page not found </h1>
        <p className='text'>This page does not exist
        </p>
        <Link to="/" className='bg-blue-600 rounded-md py-1 px-2 my-7 text-gray-200 cursor-pointer hover:font-bold'>Go Back
        </Link>
    </div>
  )
}

export default ErrorPage

import React from 'react'
import { Link } from 'react-router-dom'

const BookCards = () => {
  return (
    <>
    <div className="w-auto h-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg mt-4 lg:mt-0">
        <Link to="/hostel-11" className='flex justify-center items-center'>
            <img src="https://i.ibb.co/7tsvtBL/Hostel-11.jpg" className='h-64 w-56 rounded mt-2' alt="Hostel-11" border="0" />
        </Link>
        <div className="p-5">
            <Link to="/hostel-11">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hostel #11</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">mystery, suspense, thriller, stalking, abduction</p>
            <Link to="/hostel-11" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Read The Book
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
    </>
  )
}

export default BookCards

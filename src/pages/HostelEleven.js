import React from 'react'
import { Link } from 'react-router-dom'
import Chapters from '../components/Chapters'

const HostelEleven = () => {
  return (
    <>
    <section className='mt-6'>
      <div className='rounded dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg border border-white lg:flex lg:gap-16 lg:items-center'>
        {/* Image */}
        <div className='lg:w-[30%]'>
            <Link to="/hostel-11" className='flex justify-center items-center'>
                <img src="https://i.ibb.co/7tsvtBL/Hostel-11.jpg" className='h-96 w-64 rounded m-2' alt="Hostel-11" border="0" />
            </Link>
        </div>
        {/* Data */}
        <div className='flex flex-col lg:w-[70%]'>
            <h2 className='text-4xl font-extrabold text-center'>Hostel #11</h2>
            <p className='text-center'><span>Book By:</span><span className='italic'> Usama Hassan</span></p>
            <p className='text-justify px-6 lg:pl-0 lg:pr-6 mt-6'>Zartaj Mehmud's life takes a chilling turn when a mysterious woman starts following her outside Punjab Girls Hostel #11. What begins as unsettling encounters soon spirals into a dangerous game of cat and mouse, leaving Zartaj and her friends trapped in a web of fear.
              <br /><br />
              As her stalker closes in, secrets from Zartaj's past surface, tied to a forgotten family heirloom with dark implications. With her loved ones in danger and nowhere left to hide, Zartaj must unravel the mystery before time runs out.
              <br /><br />
              In Hostel #11, trust is a luxury, and the truth could cost Zartaj everything.</p>
        </div>
      </div>
    </section>

    <section className='mt-6 grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8 '>
      <Chapters chapterNumber="Chapter 1" chapterName="Stalking"/>
      <Chapters chapterNumber="Chapter 2" chapterName="Abduction"/>
      <Chapters chapterNumber="Chapter 3" chapterName="Runaway"/>
      <Chapters chapterNumber="Chapter 4" chapterName="Back to Safety"/>
    </section>
    </>
  )
}

export default HostelEleven

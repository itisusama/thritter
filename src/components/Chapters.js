import React from 'react'

const Chapters = ({chapterNumber, chapterName}) => {
  return (
    <div className='w-36 p-4 rounded dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg border border-white'>
      <h5 className='text-red-700 underline font-extrabold'>{chapterNumber}</h5>
      <p>{chapterName}</p>
    </div>
  )
}

export default Chapters

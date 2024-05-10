import React from 'react'

const page = () => {
  return (
    <div className='pt-16 bg-gray-900 h-[110vh]'>
      <div className='mt-16'>
        <div className='h-52 bg-gray-300 m-8 p-4 border-2 border-gray-700'>
          <h1 className='font-bold text-2xl'>Report_name</h1>
          <p className='w-[900px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='font-bold text-lg'>Author_name</p>
          <h1 className='flex justify-end pr-12'>timestamp</h1>
        </div>
      </div>
    </div>
  )
}

export default page
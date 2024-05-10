import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='pt-16 bg-yellow-300 h-screen'>
      <div className=" bg-gray-100 mx-48 my-4" style={{ height: '96%' }}>
      <h1 className='text-5xl items-center text-center pt-12 font-bold'>Reports</h1>
        {/* ??????????????????????????????????????????????????????????????????????????????????????how to navigate help */}
       <Link href='/ReportStatus/[id]' as="/ReportStatus/123">
       {/* ??????????????????????????????????????????????????????????????????????????????????????how to navigate help */}
         <div className='card pt-8'>
           <div className='h-52 bg-gray-100 m-8 p-4 border-2 border-gray-700'>
             <h1 className='font-bold text-2xl'>Report_name</h1>
             <p className='w-[900px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <p className='font-bold text-lg'>Author_name</p>
             <h1 className='flex justify-end pr-12'>timestamp</h1>
           </div>
         </div>
       </Link>
      </div>
    </div>
  )
}

export default page


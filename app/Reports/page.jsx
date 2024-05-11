import React from 'react'
import ReportPage from '@/components/ReportPage';
import NavBar from '@/components/NavBar';

const page = () => {
  return (
    <div>
      <NavBar />
      <div className='pt-16 mybgyum h-full'>
      <div className=" bg-gray-100 mx-48 my-4" style={{ height: '96%' }}>
       <h1 className='text-5xl items-center text-center pt-12 font-bold'>Reports</h1>
        <ReportPage rname='Mitochondria is the powerhouse of the cell' rauthor='Risha MK' rdesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' rtime='10:04'/>
        <ReportPage rname='Mitochondria is the powerhouse of the cell' rauthor='Risha MK' rdesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' rtime='10:04'/>
        <ReportPage rname='Mitochondria is the powerhouse of the cell' rauthor='Risha MK' rdesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' rtime='10:04'/>
        <ReportPage rname='Mitochondria is the powerhouse of the cell' rauthor='Risha MK' rdesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' rtime='10:04'/>
      </div>
    </div>
    </div>
  )
}

export default page


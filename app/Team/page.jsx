import { Avatar } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const page = () => {
  return (
    <div className='pt-16 bg-yellow-300 h-screen'>
      <div className=" bg-gray-100 mx-48 my-4" style={{ height: '96%' }}>
        <h1 className='text-5xl items-center text-center pt-12 font-bold'>Team Members</h1>
        <div className='h-52 bg-gray-200 m-8 mt-16 p-12 rounded-lg flex justify-evenly text-center items-center'>
          <div className='flex-col'>
            <h1 className='font-bold text-lg'>Name:<span className='font-normal ml-4'>e_name</span></h1>
            <p className='font-bold text-lg'>Role:<span className='font-normal ml-4'>e_role</span></p>
            <DeleteIcon className='mt-4 cursor-pointer'/>
          </div>
          <div>
            <Avatar alt="profile_pic" src="/images/profile.jpg" style={{ height: 90, width: 90 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

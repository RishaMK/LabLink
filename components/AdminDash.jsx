import { Avatar } from '@mui/material'
import React from 'react'
import './adminDash.css';


const AdminDash = () => {
  return (
    <div className='w-full h-full flex-col flex items-center text-center justify-center'>
        <div className="text-5xl admin-wel">
            <Avatar src='' alt='admin_img' sx={{width:100, height:100}}></Avatar>
        </div>
        <br></br>
        <div className='admin-wel'>
            <h1 className='font-bold text-4xl'>Welcome,</h1>
            <h3 className='text-xl'>admin name</h3>
        </div>
    </div>
  )
}

export default AdminDash
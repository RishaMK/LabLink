import { Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const AdminDash = () => {
  return (
    <div className='w-full bg-orange-700 h-full flex-col flex items-center text-center justify-center'>
        <div className="text-5xl">
            <Avatar src='' alt='admin_img' sx={{width:80, height:80}}></Avatar>
        </div>
        <br></br>
        <div>
            <h1 className='font-bold text-3xl'>Welcome,</h1>
            <h3>admin name</h3>
        </div>
    </div>
  )
}

export default AdminDash
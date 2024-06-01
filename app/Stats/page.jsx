import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
    <div>
          <NavBar />

      <div className='pt-16 mybgyum h-[100vh]'>
      <div className=" bg-gray-100 mx-48 my-4" style={{ height: '96%' }}>
      <h1 className='text-5xl items-center text-center pt-12 font-bold'>Stats</h1>
      </div>
    </div>
    </div>
  )
}

export default page
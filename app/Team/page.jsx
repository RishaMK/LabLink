import NavBar from '@/components/NavBar'
import TeamMember from '@/components/TeamMember'
import React from 'react'


const page = () => {
  return (

    <div>
      <NavBar />
      <div className='pt-16 mybgyum h-full'>
      <div className=" bg-gray-100 mx-48 my-4" style={{ height: '96%' }}>
        <h1 className='text-5xl items-center text-center pt-12 font-bold'>Team</h1>
        <TeamMember e_name='risha' e_role='frontend'/>
        <TeamMember e_name='risha' e_role='frontend'/>
        <TeamMember e_name='risha' e_role='frontend'/>
        <TeamMember e_name='risha' e_role='frontend'/>
        <TeamMember e_name='risha' e_role='frontend'/>
      </div>
    </div>
    </div>
  )
}

export default page

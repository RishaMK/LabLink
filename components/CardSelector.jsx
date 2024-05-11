import React from 'react'
import CardTab from './CardTab'

const CardSelector = () => {
  return (
    <div className='w-full h-full flex-col flex items-center text-center justify-center'>
      <div className='grid grid-cols-2 gap-x-16 gap-y-16'>
        <CardTab content="Listings" desc="Current institute listing"/>
        <CardTab content="Reports" desc="Approve reports"/>
        <CardTab content="Team" desc="Manage team members"/>
        <CardTab content="Stats" desc="See company stats"/>
      </div>
    </div>
  )
}

export default CardSelector
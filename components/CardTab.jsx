import Link from 'next/link'
import React from 'react'

const CardTab = ({content}) => {
  return (
    <div>
      <Link href={`/${content}`}> 
        <div className="bg-yellow-300 h-44 w-80 border-transparent border-2 m-4 rounded-xl flex justify-center items-center text-center">
          <h2>{content}</h2>
        </div>
      </Link>
    </div>
  )
}

export default CardTab
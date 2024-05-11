import Link from 'next/link'
import React from 'react'
import './cardTab.css';

const CardTab = ({ content }) => {
  return (
    <div>
      <Link href={`/${content}`}>
        <div className="card">
          <div className="content">
            <div className="front">
              text
            </div>
            <div className="back">
              <div className="flex justify-center items-center text-center">
                <h2 className='font-bold'>{content}</h2>
              </div></div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardTab
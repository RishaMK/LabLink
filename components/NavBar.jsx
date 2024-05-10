import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>   
        <nav className='w-full h-16 bg-[#7eb5ea] flex justify-around text-center items-center fixed top-0 left-0'>
            <div className='flex ml-16'>
                <Link href='/'><img src="" alt="logo"></img></Link>
                <span className='ml-8'><Link href='/'>company name</Link></span>
            </div>
            <ul className='flex pl-36'>
                <li className='pl-4'><Link href='/Listings'>listing</Link></li>
                <li className='pl-4'><Link href='/Reports'>reports</Link></li>
                <li className='pl-4'><Link href='/Stats'>stats</Link></li>
                <li className='pl-4'><Link href='/Team'>teamInfo</Link></li>
            </ul>
            <button className='border-2 border-black p-2'>Logout</button>
        </nav>
    </div>
  )
}

export default NavBar
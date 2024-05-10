import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='pt-16 bg-yellow-300'>
            <div className=" bg-gray-100 mx-48 my-4" style={{ height: '96%' }}>
                <h1 className='text-5xl items-center text-center pt-12 font-bold'>Research Center Name</h1>
                <div className='flex'>
                    <div className='flex-col justify-start ml-32 mt-36'>
                        <h1 className='text-2xl font-bold'>Project name</h1>
                        < p className='w-[500px] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='h-80 mt-52 ml-14'>
                        <img src='/images/resources.png' alt='growth' className='h-full' />
                    </div>
                </div>
                <div className='ml-32 mt-24'>
                    <h1 className='text-2xl font-bold mb-8'>Team</h1>
                    <ul className='ml-8 mr-36'>
                        <li>
                            <p className='font-bold mb-[10px]'>John Doe  ||  TEAM LEAD</p>
                            <p className='ml-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </li>
                        <li>
                            <p className='font-bold mb-[10px]'>Jane Doe</p>
                            <p className='ml-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </li>
                        <li>
                            <p className='font-bold mb-[10px]'>John Doe</p>
                            <p className='ml-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </li>
                    </ul>
                </div>
                <div className='flex-col'>
                    <h1 className='text-2xl font-bold  ml-32 mt-24'>Reports</h1>
                    <Link href='/ReportStatus/[id]' as="/ReportStatus/123">
                        <div className='card pt-4'>
                            <div className='h-48 bg-gray-100 m-8 p-4 border-2 border-gray-700 mx-32'>
                                <h1 className='font-bold text-2xl mt-4'>Report_name</h1>
                                <p className=' mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className='font-bold text-lg'>Author_name</p>
                            </div>
                            <div className='h-48 bg-gray-100 m-8 p-4 border-2 border-gray-700 mx-32'>
                                <h1 className='font-bold text-2xl mt-4'>Report_name</h1>
                                <p className=' mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className='font-bold text-lg'>Author_name</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex-col text-center items-center'>
                    <h1 className='text-2xl font-bold mt-24'>Growth</h1>
                    <div className='h-80 w-96 mt-16 flex ml-44 gap-4'>
                        <img src='/images/growth.png' alt='growth' className='h-full' />
                        <img src='/images/growth2.png' alt='growth' className='h-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
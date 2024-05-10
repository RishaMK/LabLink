import React from 'react'
import AdminDash from './AdminDash'
import CardSelector from './CardSelector'

const DashBoard = () => {
    return (
        <div className="flex justify-evenly h-screen">
            <div className="w-1/3"> <AdminDash /> </div>
            <div className="w-2/3"><CardSelector /></div>
        </div>
    )
}

export default DashBoard
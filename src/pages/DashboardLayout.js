import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex overflow-hidden h-screen">
        <Sidebar />
        <div className="w-[84%] overflow-y-scroll h-screen bg-[#f8f4f4] abc">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout

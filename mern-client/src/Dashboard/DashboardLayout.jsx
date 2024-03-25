import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <div>
      <SideBar/>
      </div>
      <Outlet/>
      {/* <div className='w-full h-screen overflow-y-hidden'>
        <div className='h-screen bg-blue-500 w-full' id='user'></div>
        <div className='h-screen bg-slate-300' id='inbox'>inbox</div>
      </div> */}
    </div>
  )
}

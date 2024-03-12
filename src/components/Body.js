import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="m-2 p-2 flex w-full">
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body

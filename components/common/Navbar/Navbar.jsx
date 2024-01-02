import React from 'react'
import TopBar from './TopBar'
import MiddleBar from './MiddleBar'
import MainNav from './MainNav'

export default function Navbar() {
  return (
    <div>
      {/* <div>
        <TopBar />
      </div>
      <div className='bg-gray-100'>
        <MiddleBar />
      </div> */}
      <div className='border-b-2 bg-red-200 z-50 shadow-sm fixed w-full top-0'>
        <div className='px-12'>
          <MainNav />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import {CgProfile} from 'react-icons/cg'

export default function Navbar() {
  return (
    <div className=''>
        <div className="flex  justify-between items-center mx-10 p-2">
          <div className="flex">
          <span className="text-lg text-blue-500 font-bold">Ve</span>
          <p className="text-lg font-semibold">Chat</p>
          </div>
          <div className="">
        <CgProfile size={20} className="text-blue-500"/>
          </div>

        </div>
    </div>
  )
}

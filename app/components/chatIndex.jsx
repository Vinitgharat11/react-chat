import React from 'react'
import { useRouter } from 'next/navigation'
const router = useRouter()


export default function ChatIndex() {
  return (
    <div>
        <div>
        <div className="min-nav flex justify-around text-sm">
          <p>Add friend</p>
          <p className="text-blue-500">Requests</p>
        </div>
      </div>
      <div className="message-container flex mx-2 my-3 items-center justify-between " onClick={()=>router.push('/')}>
        <div className="user-avtar flex items-center ">
          <div className="">
          <p className="bg-blue-400 rounded-full w-14 h-14 text-center p-4 text-white">
            U
          </p>
          </div>
          <div className="text-md  text-center">
          <p>Uday</p>
          <h1 className="text-center mx-3 font-bold text-[15px]">{messages}</h1>
          </div>
        </div>
        <div className="">
          <p className="text-[10px] text-end font-light ">12:00 PM</p>
        </div>
      </div>
    </div>
  )
}

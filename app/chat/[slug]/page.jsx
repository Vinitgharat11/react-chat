"use client";
import Navbar from "@/app/components/navbar";
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
 

export default function Chat({ params }) {
  const [messages, setmessages] = useState("");

  const handleChange=(e)=>{
    e.preventDefault()
    setmessages(e.target.value)
  }
  return (
    <div>
      <div className="Nav-menu shadow-md">
        <Navbar />
      </div>
      <form onSubmit={handleChange} >
        <div className="fixed bottom-0 p-3 flex ">
          <input
            type="text"
            className="outline-none border  rounded-lg p-2 ring-1"
            value={messages}
          />
          <button className="mx-3 bg-blue-400 rounded-lg p-2">
            <BsSend />
          </button>
        </div>
      </form>
    
    </div>
  );
}

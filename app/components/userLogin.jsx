"use client";

import { signIn } from "next-auth/react";

const UserLogin = () => {

  return (
    <div>
      <div className="login-container  mx-3 my-1">
        <div className="flex">
          <span className="text-lg text-blue-500 font-bold">Ve</span>
          <p className="text-lg font-semibold">Chat</p>
        </div>
        <div className="heading-title flex flex-col text-center justify-center my-10 ">
          <div className="flex justify-center">
            <span className="text-3xl text-blue-500 font-bold">Ve</span>
            <p className="text-3xl font-semibold">Chat</p>
          </div>
          <div className="">
            <p>connect with people</p>
          </div>
        </div>
        <div className="bg-slate-800 text-white p-3 rounded-lg text-center">
          <button onClick={()=>signIn()}>Login With Github</button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

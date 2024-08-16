"use client"

import Appbar from "@/components/Appbar";
import MenuSection from "@/components/MenuSection";
import { useState } from "react";




export default function About() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="bg-slate-100">
      <div className="text-white h-screen bg-center bg-no-repeat bg-black bg-[url('https://www-cdn.djiits.com/dps/bad1e5a4d479357204ae68f6cca736a3.png')]">
        <Appbar menu={menu} setMenu={setMenu}/>
        <MenuSection menu={menu} setMenu={setMenu}/>
        <div className="ml-32 h-[100%] mt-32 text-8xl max-sm:text-4xl max-sm:ml-10 stroke-gray-600">
          <div className="mt-20">Improving Everyday</div>
          <div className="">Life With Drone</div>
        </div>
      </div>
      {/* MISSION */}
      <div className="h-screen text-black py-20 mx-10 max-sm:mx-4">
        <div className="h-[2px] bg-slate-300 w-full">
          <div className="h-[2px] bg-black w-[30%]"></div>
        </div>
        <div className="mt-10 text-[20px]">MISSION</div>
      </div>
      {/* Who are we  */}
      <div className=" text-black py-20 mx-10 max-sm:mx-4">
        <div className="h-[2px] bg-slate-300 w-full">
          <div className="h-[2px] bg-black w-[60%]"></div>
        </div>
        <div className="mt-10 text-[20px]">WHO ARE WE</div>
        <div className="mt-10 text-6xl font-thin">Meet the Founders</div>
        <div className="grid grid-cols-5 max-sm:grid-cols-1 mt-20">
            <div className="col-span-3"></div>
            <div className="col-span-2 flex justify-end text-justify">This is the space to introduce the team and what makes it special. Describe the team culture and work philosophy. To help site visitors connect with the team, add details about team member&apos;s experience and skills.</div>
        </div>
        <div className="max-sm:hidden grid grid-cols-5 max-lg:grid-cols-1 max-sm:grid-cols-1 mt-20">
            <div className="col-span-1"></div>
            <div className="col-span-4 grid grid-cols-4 space-x-2">
                <div className="h-[450px] border shadow-md rounded-lg bg-black"></div>
                <div className="h-[450px] border shadow-md rounded-lg bg-white"></div>
                <div className="h-[450px] border shadow-md rounded-lg bg-black"></div>
                <div className="h-[450px] border shadow-md rounded-lg bg-white"></div>
            </div>
        </div>
        {/* mob */}
        <div className="hidden max-sm:flex flex-col mt-20">
            <div className="">
                <div className="h-[450px] border sticky top-10 shadow-md rounded-lg bg-black"></div>
                <div className="h-[450px] border sticky top-10 shadow-md rounded-lg bg-white"></div>
                <div className="h-[450px] border sticky top-10 shadow-md rounded-lg bg-black"></div>
                <div className="h-[450px] border sticky top-10 shadow-md rounded-lg bg-white"></div>
            </div>
        </div>
        {/* footer  */}
      </div>
    </div>
  )
}
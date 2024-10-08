"use client"

import MenuSection from "@/components/MenuSection";
import WhiteAppbar from "@/components/WhiteAppbar";
import { useState } from "react";



export default function Contact() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="">
        <div>
            <WhiteAppbar menu={menu} setMenu={setMenu}/>
            <MenuSection menu={menu} setMenu={setMenu}/>
            <div className="mx-20 mt-10 max-sm:mx-4">
                <div className="text-6xl font-thin">Get In Touch</div>
                <p className=" text-slate-500 my-10">
                    REACH OUT, SHARE A QUESTION OR PROVIDE FEEDBACK <br />ON OUR PRODUCTS. FILL OUT THE FORM AND WE&apos;LL<br /> RESPOND AS SOON AS POSSIBLE. 
                </p>
            </div>
        </div>
        {/* form  */}
        <div className="grid grid-cols-5 max-sm:grid-cols-1 mx-20 max-sm:mx-4">
            <div className="col-span-2"></div>
            <div className=" pt-20 col-span-3">
                <div className="grid grid-cols-2 mb-6 space-x-2">
                    <div className="flex flex-col space-y-3">
                        <label>First Name *</label>
                        <input className="border border-black rounded-md px-2 py-1"/>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label>Last Name *</label>
                    <input className="border border-black rounded-md px-2 py-1"/>
                </div>
                </div>
                <div className="flex flex-col space-y-3 mb-6">
                    <label>Email *</label>
                    <input className="border border-black rounded-md px-2 py-1"/>
                </div>
                <div className="flex flex-col space-y-3 mb-6">
                    <label>Organization (Optional) *</label>
                    <input className="border border-black rounded-md px-2 py-1"/>
                </div>
                <div className="flex flex-col space-y-3 mb-6">
                    <label>Type of inquiry *</label>
                    <input className="border border-black rounded-md px-2 py-1"/>
                </div>
                <div className="flex flex-col space-y-3 mb-6">
                    <label>Message</label>
                    <textarea className="border border-black rounded-md px-2 py-1 h-[100px]" placeholder="Write your message here"/>
                </div>
                <button className="border bg-black px-3 py-2 rounded-lg text-white">SEND QUERY</button>
            </div>
        </div>
    </div>
  );
}

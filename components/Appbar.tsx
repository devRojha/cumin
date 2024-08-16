"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Appbar({menu,setMenu}:{menu:boolean,setMenu:any}){
    const [trans, setTrans] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const bgChange = () => {
          if (window.scrollY >= 90) {
            setTrans(true);
          } else {
            setTrans(false);
          }
        };
    
        window.addEventListener("scroll", bgChange);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", bgChange);
        };
      }, []);
    return (
        <div className={`text-white sticky top-0 h-[90px] px-10 max-sm:px-2 flex flex-col justify-center ${trans?"bg-black":"bg-transparent"}`}>
            <div className="flex justify-between">
                <div className="font-bold text-[20px] flex space-x-5">
                  <Image className="h-[50px] w-[50px]" src={"/logob.png"} height={100} width={100} alt="Loading.."/>
                  <button onClick={()=>router.push("/")} className="flex flex-col justify-center hover:text-slate-500 active:text-blue-900">Lumin Aerospace</button>
                </div>
                <div className="space-x-10 max-sm:hidden">
                    <button className="hover:text-blue-600 active:text-blue-900">Products</button>
                    <button onClick={()=>router.push("/About")} className="hover:text-blue-600 active:text-blue-900">About</button>
                    <button onClick={()=>{router.push("/contact")}} className="border text-black bg-white rounded-full px-3 py-2 hover:text-blue-600 hover:bg-slate-300 active:text-blue-900">Contact</button>
                </div>
                <div className="hidden max-sm:flex">
                    <button onClick={()=>setMenu(!menu)} className="">
                        <Image className="h-[25px] w-[25px] mr-8" src={"/menu-bar.png"} height={100} width={100} alt="Loading"/>
                    </button>
                </div>
            </div>
        </div>
    ) 
}
        
"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";



export default function MenuSection({menu,setMenu}:{menu:boolean,setMenu:any}){
    const router = useRouter();
    return (
        <div className={`h-screen rounded-l-lg shadow-lg shadow-slate-500 fixed top-0 ${menu?"right-0":"right-[-300px]"} z-50 w-[300px] bg-black text-white`}>
            <div className="flex justify-end my-10 mr-6">
                <button onClick={()=>setMenu(false)} className="">
                <Image className="h-[30px] w-[30px]" src={"/x-mark.png"} height={100} width={100} alt="Loading.."/>
                </button>
            </div>
            <div className="flex flex-col justify px-6 space-y-10">
                <button className="flex hover:text-blue-600 active:text-blue-900">Products</button>
                <button onClick={()=>router.push("/About")} className="flex hover:text-blue-600 active:text-blue-900">About</button>
                <button onClick={()=>router.push("/contact")} className="flex hover:text-blue-600 active:text-blue-900">Contacts</button>
            </div>
            <div className="font-bold text-[20px] flex space-x-5 fixed bottom-10 mt-10 pl-6">
                <Image className="h-[50px] w-[50px]" src={"/logob.png"} height={100} width={100} alt="Loading.."/>
                <button onClick={()=>router.push("/")} className="flex flex-col justify-center hover:text-slate-500 active:text-blue-900">Lumin Aerospace</button>
            </div>
        </div>
    )
}
"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WhiteAppbar(){
    const router = useRouter();
    return (
        <div className={`text-black  bg-white sticky top-0 h-[90px] px-10 flex flex-col justify-center`}>
            <div className="flex justify-between">
                <div className="font-bold text-[20px] flex space-x-5">
                  <Image className="h-[50px] w-[50px]" src={"/logoW.jpg"} height={100} width={100} alt="Loading.."/>
                  <button onClick={()=>router.push("/")} className="flex flex-col justify-center">Lumin Aerospace</button>
                </div>
                <div className="space-x-10">
                    <button>Technology</button>
                    <button>About</button>
                    <button onClick={()=>{router.push("/contact")}} className="border text-black bg-white rounded-full px-3 py-2">Contact</button>
                </div>
            </div>
        </div>
    ) 
}
        
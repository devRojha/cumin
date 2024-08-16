"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WhiteAppbar(){
    const router = useRouter();
    return (
        <div className={`text-black  bg-white sticky top-0 h-[90px] px-10 max-sm:px-2 flex flex-col justify-center`}>
            <div className="flex justify-between">
                <div className="font-bold text-[20px] flex space-x-5">
                  <Image className="h-[50px] w-[50px]" src={"/logoW.jpg"} height={100} width={100} alt="Loading.."/>
                  <button onClick={()=>router.push("/")} className="flex flex-col justify-center">Lumin Aerospace</button>
                </div>
                <div className="space-x-10 max-sm:hidden">
                    <button>Products</button>
                    <button onClick={()=>router.push("/About")}>About</button>
                    <button onClick={()=>{router.push("/contact")}} className="border text-black bg-white rounded-full px-3 py-2">Contact</button>
                </div>
                <div className="hidden max-sm:flex">
                    <button>
                        <Image className="h-[25px] w-[25px] mr-8" src={"/menu.png"} height={100} width={100} alt="Loading"/>
                    </button>
                </div>
            </div>
        </div>
    ) 
}
        
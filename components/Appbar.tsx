"use client"

import { useEffect, useState } from "react";

export default function Appbar(){
    const [trans, setTrans] = useState(false);
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
        <div className={`text-white sticky top-0 h-[90px] px-10 flex flex-col justify-center ${trans?"bg-black":"bg-transparent"}`}>
            <div className="flex justify-between">
                <div className="font-bold text-[20px]">Lumin Aerospace & Technology</div>
                <div className="space-x-10">
                    <button>Technology</button>
                    <button>About</button>
                    <button className="border text-black bg-white rounded-full px-3 py-2">Contact</button>
                </div>
            </div>
        </div>
    ) 
}
        
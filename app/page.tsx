"use client"
import Appbar from "@/components/Appbar";
import MenuSection from "@/components/MenuSection";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="bg-black">
      <div className="text-white h-screen bg-center bg-no-repeat bg-black bg-[url('https://www-cdn.djiits.com/dps/bad1e5a4d479357204ae68f6cca736a3.png')]">
        <Appbar menu={menu} setMenu={setMenu}/>
        <MenuSection menu={menu} setMenu={setMenu}/>
        <div className="ml-32 h-[100%] mt-32 text-8xl max-sm:text-4xl max-sm:ml-10 stroke-gray-600">
          <div className="mt-20">The Future of</div>
          <div className="">Drone is Here</div>
        </div>
      </div>
      {/* vision  */}
      <div className="h-screen text-white py-20 mx-10 max-sm:mx-4">
        <div className="h-[2px] bg-slate-600">
          <div className="h-[2px] bg-white w-[20%]"></div>
        </div>
        <div className="mt-10 text-[20px]">VISION</div>
      </div>
      {/* Products  */}
      <div className=" text-black px-10 max-sm:px-4 py-20 bg-white">
        <div className="h-[2px] bg-slate-200 w-full">
          <div className="h-[2px] bg-black w-[40%]"></div>
        </div>
        <div className="mt-10 text-[20px]">Our Products</div>
        <div className="my-20 text-6xl max-sm:text-2xl font-thin">
          <div>Semi Autonomous, </div>
          <div>Uncompromisingly Sustainable </div>
        </div>
        <div className="">
          <div className="border shadow-lg shadow-slate-200 h-[600px] rounded-lg sticky top-10 z-10 bg-white"></div>
          <div className="border shadow-lg shadow-slate-200 h-[600px] rounded-lg sticky top-10 z-20 bg-white"></div>
          <div className="border shadow-lg shadow-slate-200 h-[600px] rounded-lg sticky top-10 z-30 bg-white"></div>
        </div>
      </div>
      {/* Why Lumin */}
      <div className="h-screen text-white py-20 mx-10 max-sm:mx-4">
        <div className="h-[2px] bg-slate-600">
          <div className="h-[2px] bg-white w-[60%]"></div>
        </div>
        <div className="mt-10 text-[20px]">Why Lumin</div>
      </div>
      {/* Compney  */}
      <div className="h-screen text-white py-20 mx-10 max-sm:mx-4">
        <div className="h-[2px] bg-slate-600">
          <div className="h-[2px] bg-white w-[80%]"></div>
        </div>
        <div className="mt-10 text-[20px]">Compney</div>
      </div>
    </div>
  );
}

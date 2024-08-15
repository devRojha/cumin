import Appbar from "@/components/Appbar";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="text-white h-screen bg-center bg-no-repeat bg-black bg-[url('https://www-cdn.djiits.com/dps/bad1e5a4d479357204ae68f6cca736a3.png')]">
        <Appbar />
        <div className="ml-32 h-[100%] mt-32 text-8xl stroke-gray-600">
          <div className="mt-20">The Future of</div>
          <div className="">Drone is Here</div>
        </div>
      </div>
      {/* vision  */}
      <div className="h-screen text-white py-20 mx-10">
        <div className="h-[2px] bg-slate-600">
          <div className="h-[2px] bg-white w-[20%]"></div>
        </div>
        <div className="mt-10 text-[20px]">VISION</div>
      </div>
      {/* Products  */}
      <div className=" text-black px-10 py-20 bg-white">
        <div className="h-[2px] bg-slate-200 w-full">
          <div className="h-[2px] bg-black w-[40%]"></div>
        </div>
        <div className="mt-10 text-[20px]">Our Products</div>
        <div className="my-20 text-6xl font-thin">
          <div>Semi Autonomous, </div>
          <div>Uncompromisingly Sustainable </div>
        </div>
        <div className="">
          <div className="border shadow-lg shadow-slate-200 h-[800px] rounded-lg sticky top-10"></div>
          <div className="border shadow-lg shadow-slate-200 h-[800px] rounded-lg sticky top-10"></div>
          <div className="border shadow-lg shadow-slate-200 h-[800px] rounded-lg sticky top-10"></div>
        </div>
      </div>
      {/* Why Lumin */}
      <div className="h-screen text-white py-20 mx-10">
        <div className="h-[2px] bg-slate-600">
          <div className="h-[2px] bg-white w-[60%]"></div>
        </div>
        <div className="mt-10 text-[20px]">Why Lumin</div>
      </div>
      {/* Compney  */}
      <div className="h-screen text-white py-20 mx-10">
        <div className="h-[2px] bg-slate-600">
          <div className="h-[2px] bg-white w-[80%]"></div>
        </div>
        <div className="mt-10 text-[20px]">Compney</div>
      </div>
    </div>
  );
}

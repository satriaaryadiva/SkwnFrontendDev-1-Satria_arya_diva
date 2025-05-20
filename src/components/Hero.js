import { PlayCircleIcon, Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center flex sm:flex-row flex-col  py ">
      <div className="flex justify-center h-[356px]   px-8 py-4 sm:items-center flex-col sm:w-2/3">
        <h1 className="text-3xl sm:text-7xl  sm:text-left sm:p-10 text-[#2F241F] font-bold mb-4">
          The kind of <span className="text-[#a58272]">furniture</span><br /> you have been looking for
        </h1>
        <div className="flex justify-center flex-col gap-4 mt-6 flex-wrap">
          <button className="bg-[#E5F0B6] rounded-xl flex flex-row px-4 py-6 items-center justify-center m-auto w-72 text-black">
            <Search className="mr-2" /> Search Catalog
          </button>
          <button className="border rounded-xl flex flex-row px-4 py-6 items-center botder-[#553B33]  justify-center m-auto w-72 text-[#553B33]">
           <PlayCircleIcon className="mr-2 " /> Watch Videos
          </button>
        </div>
      </div>

      {/* Image with Overlay */}
    
    </section>
  );
}
